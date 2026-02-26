# AI Agent Briefing

## Project
Squarespace 7.1 image-trail plugin delivered through header injection.

## Current Objective
Maintain a reusable, config-first trail effect that is safe for production installs and simple for developers and technical designers to tune.

## Audience
- Primary: developers
- Secondary: technically comfortable designers

## Product Direction (Confirmed)
- Keep default setup simple.
- Keep advanced GSAP override work for later.
- Support named presets plus a `custom` mode in a later phase.
- Build editor-only configurator UI later.
- Keep live site clean with no configurator UI.

## Runtime Snapshot
- Source of truth: `project/image-trail.js`
- Runtime copy: `project/image-trail-runtime.js`
- One-file snippet: `project/image-trail-snippet.html`
- One-file oneline snippet: `project/image-trail-snippet-oneline.html`
- Oneline runtime: `project/image-trail-runtime-oneline.js`
- Optional config example: `project/image-trail-config.example.js`
- Install example: `project/image-trail-install.example.html`
- Style source: `project/image-trail.css`
- Oneline style: `project/image-trail-style-oneline.css`
- Legacy style reference: `project/image-trail-styles.less`
- Deep code analysis: `project/docs/CODE_ANALYSIS.md`
- Release helper: `project/scripts/build-image-trail-artifacts.js`
- Smoke checks: `project/docs/SMOKE_CHECKLIST.md`

## Runtime Behavior (As Built)
- Auto-init runs once with `window.__imageTrailAutoInitRan` guard.
- `runImageTrailScripts(...)` replaces prior runtime controller instance.
- Strict public config validation rejects unknown and internal-only keys.
- Startup waits for DOM, optional Squarespace reload, and runtime dependencies.
- Source is read from on-page `#trail-gallery .gallery-grid img` only.
- Trail mounts in `#trail-section .fluid-engine`.
- `data-src` is canonical asset URL for source images.
- `ImageLoader.load` is required and resolved from supported globals.
- Source gallery visibility policy is applied during startup, active runtime, teardown, and bail states.
- Default policy keeps source gallery hidden.
- Touch devices are disabled by default.
- Non-touch viewports at or below `767px` are disabled by default.
- Runtime re-evaluates eligibility on resize and re-enables when eligible.
- Visibility binding uses native `IntersectionObserver`.
- Runtime suppresses only known noisy ResizeObserver loop warnings.

## Current Open Decisions
- Final preset names and values.
- Configurator panel UX in editor mode.
- JSON import/export and persistence approach.

## Operational Notes
- Context7 MCP check attempted during this audit and returned no resources/templates in this workspace.
- Squarespace findings are maintained in `project/docs/SQUARESPACE_FINDINGS.md` as the growing cross-project knowledge base.

## Agent Rules For This Project
- Preserve backward compatibility where practical.
- Do not reintroduce page-context fetch for image sourcing.
- Keep selectors and runtime safety controls internal-only unless product direction changes.
- Keep error logging explicit and lifecycle-scoped.
- Keep `project/image-trail.js` and `project/image-trail-runtime.js` in sync.
- After runtime edits, regenerate snippet artifacts before handoff.
- Update docs together: config reference, changelog, tasks, handoff, and Squarespace findings.
