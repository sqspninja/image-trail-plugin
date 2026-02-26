#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const projectRoot = path.resolve(__dirname, "..");

const paths = {
  runtimeSource: path.join(projectRoot, "image-trail.js"),
  runtimeDist: path.join(projectRoot, "image-trail-runtime.js"),
  runtimeOneline: path.join(projectRoot, "image-trail-runtime-oneline.js"),
  styleSource: path.join(projectRoot, "image-trail.css"),
  snippet: path.join(projectRoot, "image-trail-snippet.html"),
  snippetOneline: path.join(projectRoot, "image-trail-snippet-oneline.html"),
  styleOneline: path.join(projectRoot, "image-trail-style-oneline.css"),
  copyBundle: path.join(projectRoot, "image-trail.txt")
};

const RUNTIME_BLOCK_RE =
  /<script>\s*\/\* image trail start \*\/[\s\S]*?\/\* image trail end \*\/\s*<\/script>/m;
const STYLE_BLOCK_RE = /<style>\s*([\s\S]*?)\s*<\/style>/m;

function readFile(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function writeFile(filePath, contents) {
  fs.writeFileSync(filePath, contents.endsWith("\n") ? contents : `${contents}\n`, "utf8");
}

function assertRuntimeMarkers(runtimeSource) {
  if (!runtimeSource.includes("/* image trail start */")) {
    throw new Error("Runtime source is missing start marker: /* image trail start */");
  }
  if (!runtimeSource.includes("/* image trail end */")) {
    throw new Error("Runtime source is missing end marker: /* image trail end */");
  }
}

function replaceRuntimeBlock(html, runtimeText) {
  if (!RUNTIME_BLOCK_RE.test(html)) {
    throw new Error("Could not find runtime block markers in snippet.");
  }
  return html.replace(RUNTIME_BLOCK_RE, `<script>\n${runtimeText}\n</script>`);
}

function replaceStyleBlock(html, styleText) {
  if (!STYLE_BLOCK_RE.test(html)) {
    throw new Error("Could not find <style> block in snippet.");
  }
  return html.replace(STYLE_BLOCK_RE, `<style>\n${styleText}\n</style>`);
}

function toOnelineJs(runtimeSource) {
  const lines = runtimeSource.split(/\r?\n/);
  const collapsed = lines
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .filter((line) => !line.startsWith("//"))
    .join(" ");

  return collapsed;
}

function toOnelineCss(cssText) {
  return cssText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join(" ");
}

function parseCheck(jsCode, label) {
  try {
    // Parse-only validation
    new vm.Script(jsCode);
  } catch (error) {
    throw new Error(`${label} failed parse validation: ${error.message}`);
  }
}

function build() {
  const runtimeSource = readFile(paths.runtimeSource);
  const styleSource = readFile(paths.styleSource);
  assertRuntimeMarkers(runtimeSource);
  parseCheck(runtimeSource, "Runtime source");

  // 1) Keep runtime distribution synced to source of truth.
  writeFile(paths.runtimeDist, runtimeSource);

  // 2) Build oneline runtime.
  const runtimeOneline = toOnelineJs(runtimeSource);
  parseCheck(runtimeOneline, "Oneline runtime");
  writeFile(paths.runtimeOneline, runtimeOneline);

  // 3) Update standard snippet with current runtime source.
  const snippetHtml = readFile(paths.snippet);
  const updatedSnippetHtml = replaceRuntimeBlock(snippetHtml, runtimeSource);
  writeFile(paths.snippet, updatedSnippetHtml);

  // 4) Update oneline snippet with oneline runtime.
  const snippetOnelineHtml = readFile(paths.snippetOneline);
  const snippetWithOnelineRuntime = replaceRuntimeBlock(snippetOnelineHtml, runtimeOneline);

  // 5) Build oneline CSS from css source of truth.
  const styleOneline = toOnelineCss(styleSource);
  writeFile(paths.styleOneline, styleOneline);

  // 6) Keep oneline snippet style block synced with oneline CSS artifact.
  const updatedSnippetOnelineHtml = replaceStyleBlock(snippetWithOnelineRuntime, styleOneline);
  writeFile(paths.snippetOneline, updatedSnippetOnelineHtml);

  // 7) Keep copy-ready bundle synced to oneline snippet.
  writeFile(paths.copyBundle, updatedSnippetOnelineHtml);

  console.log("Built image trail artifacts:");
  console.log(`- ${path.relative(projectRoot, paths.runtimeDist)}`);
  console.log(`- ${path.relative(projectRoot, paths.runtimeOneline)}`);
  console.log(`- ${path.relative(projectRoot, paths.snippet)}`);
  console.log(`- ${path.relative(projectRoot, paths.snippetOneline)}`);
  console.log(`- ${path.relative(projectRoot, paths.styleOneline)}`);
  console.log(`- ${path.relative(projectRoot, paths.copyBundle)}`);
}

build();
