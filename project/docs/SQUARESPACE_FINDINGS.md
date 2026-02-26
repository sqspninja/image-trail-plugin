# Squarespace Findings (Evidence Log)

## Scope
- This file contains only observations that are directly visible in files in this repository.
- Each observation includes concrete evidence with file and line references.
- No inferred platform behavior is included.

## Evidence Index

### 1) Legacy utility script defines `observeElementVisibility`
Observation:
- A global `observeElementVisibility` function exists in the reference site script.

Evidence:
- `references/colour-and-shapes.html:91`

### 2) Legacy utility script defines and initializes `SNWindowUtils`
Observation:
- `SNWindowUtils` is declared inline with `init/getDimensions/destroy` and `SNWindowUtils.init()` is called.

Evidence:
- `references/colour-and-shapes.html:91`

### 3) Legacy script defines `window.reloadSquarespaceScripts`
Observation:
- `window.reloadSquarespaceScripts` is conditionally assigned and calls `window.Squarespace?.initializeLayoutBlocks`, `initializeNativeVideo`, and `initializePageContent`.

Evidence:
- `references/colour-and-shapes.html:127`

### 4) Legacy image trail used page-context fetch
Observation:
- The legacy `runImageTrailScripts` contains `fetch("/galleries?format=page-context")`.

Evidence:
- `references/colour-and-shapes.html:142`

### 5) Legacy image trail consumed page-context section array index
Observation:
- Legacy code reads from `t?.squarespace?.pageSections?.sections?.[0]?.galleryImages`.

Evidence:
- `references/colour-and-shapes.html:142`

### 6) Legacy image trail attached `ImageLoader.load` to generated images
Observation:
- Legacy code invokes `ImageLoader.load(i,{load:!0})` in image `onload`.

Evidence:
- `references/colour-and-shapes.html:147`

### 7) Legacy image trail used `.fluid-engine` for mount context
Observation:
- Legacy code selects `e.querySelector(".fluid-engine")`.

Evidence:
- `references/colour-and-shapes.html:142`

### 8) Legacy image trail checked editor class `sqs-edit-mode-active`
Observation:
- Legacy code checks `document.body.classList.contains("sqs-edit-mode-active")`.

Evidence:
- `references/colour-and-shapes.html:142`

### 9) Captured page markup contains gallery image attributes used by plugin
Observation:
- Gallery `<img>` nodes include `data-src`, `data-image`, `data-image-dimensions`, `data-image-focal-point`, `width`, `height`, `sizes`, and `srcset`.

Evidence:
- `references/image-trail.html:1668`
- `references/image-trail.html:1683`
- `references/image-trail.html:1698`
- `references/image-trail.html:1713`

### 10) Captured page markup contains `.gallery-grid-item` wrappers
Observation:
- Gallery image items are wrapped in `.gallery-grid-item` and `.gallery-grid-item-wrapper`.

Evidence:
- `references/image-trail.html:1677`
- `references/image-trail.html:1678`
- `references/image-trail.html:1692`
- `references/image-trail.html:1693`

### 11) Captured page markup contains `.fluid-engine`
Observation:
- Page markup includes a `.fluid-engine` container.

Evidence:
- `references/image-trail.html:2158`

### 12) Project runtime hardcodes target/source selectors
Observation:
- Runtime defaults include:
- `targetSectionSelector: "#trail-section"`
- `sourceGallerySelector: "#trail-gallery"`
- `sourceGridImageSelector: ".gallery-grid img"`

Evidence:
- `project/image-trail-runtime.js:4`
- `project/image-trail-runtime.js:6`
- `project/image-trail-runtime.js:8`

### 13) Project runtime requires `data-src`
Observation:
- Runtime default includes `requiredSourceAttr: "data-src"` and validates missing values.

Evidence:
- `project/image-trail-runtime.js:10`
- `project/image-trail-runtime.js:741`
- `project/image-trail-runtime.js:759`

### 14) Project runtime waits for gallery readiness before setup
Observation:
- Runtime loops until source section exists, images exist, and required attr is present on all images.

Evidence:
- `project/image-trail-runtime.js:682`
- `project/image-trail-runtime.js:690`
- `project/image-trail-runtime.js:699`
- `project/image-trail-runtime.js:741`

### 15) Project runtime resolves `ImageLoader` from multiple global paths
Observation:
- Runtime checks `ImageLoader.load`, `window.Squarespace.ImageLoader.load`, and `window.Static.ImageLoader.load`.

Evidence:
- `project/image-trail-runtime.js:615`
- `project/image-trail-runtime.js:621`
- `project/image-trail-runtime.js:630`

### 16) Project runtime optionally calls `window.reloadSquarespaceScripts`
Observation:
- Runtime calls `window.reloadSquarespaceScripts()` only if function exists.

Evidence:
- `project/image-trail-runtime.js:659`
- `project/image-trail-runtime.js:663`

### 17) Project runtime uses native `IntersectionObserver` in visibility helper
Observation:
- Visibility helper checks for `IntersectionObserver` and creates a new observer.

Evidence:
- `project/image-trail-runtime.js:1295`
- `project/image-trail-runtime.js:1302`

### 18) Project runtime suppresses specific ResizeObserver warning text
Observation:
- Runtime defines regex for ResizeObserver loop warning and installs an `error` listener that suppresses matching messages.

Evidence:
- `project/image-trail-runtime.js:56`
- `project/image-trail-runtime.js:1239`
- `project/image-trail-runtime.js:1246`
- `project/image-trail-runtime.js:1256`

### 19) Project runtime source-hide behavior uses class + aria
Observation:
- Runtime hide helper adds class and sets `aria-hidden="true"`; show helper removes both.

Evidence:
- `project/image-trail-runtime.js:1122`
- `project/image-trail-runtime.js:1127`
- `project/image-trail-runtime.js:1128`
- `project/image-trail-runtime.js:1131`
- `project/image-trail-runtime.js:1136`
- `project/image-trail-runtime.js:1137`

### 20) Project CSS includes editor-aware gallery-hide selector in oneline artifact
Observation:
- Oneline CSS hides source gallery only when body does not have `.sqs-edit-mode-active`.

Evidence:
- `project/image-trail-style-oneline.css:1`

### 21) Reference LESS includes multiple rules scoped by `.sqs-edit-mode-active`
Observation:
- Reference LESS file contains multiple selectors with `body:not(.sqs-edit-mode-active)`.

Evidence:
- `references/image-trail.less:199`
- `references/image-trail.less:370`
- `references/image-trail.less:398`
- `references/image-trail.less:526`

### 22) Current one-file snippet ships with GSAP core only
Observation:
- Oneline snippet includes only `gsap.min.js` external script tag.

Evidence:
- `project/image-trail-snippet-oneline.html:2`

### 23) Current runtime defaults disable touch/mobile behavior
Observation:
- Runtime defaults set `enableOnMobile: false`, `enableOnTouch: false`, and `mobileBreakpoint: 767`.

Evidence:
- `project/image-trail-runtime.js:20`
- `project/image-trail-runtime.js:22`
- `project/image-trail-runtime.js:24`

### 24) Current runtime derives viewport dimensions from `SNWindowUtils` when available
Observation:
- Runtime checks `SNWindowUtils.getDimensions` and otherwise falls back to `window.innerWidth/innerHeight`.

Evidence:
- `project/image-trail-runtime.js:1277`
- `project/image-trail-runtime.js:1283`
- `project/image-trail-runtime.js:1287`

## Notes on Verification Method
- Evidence references were collected from:
- `project/image-trail-runtime.js`
- `project/image-trail-style-oneline.css`
- `project/image-trail-snippet-oneline.html`
- `references/colour-and-shapes.html`
- `references/image-trail.html`
- `references/image-trail.less`
