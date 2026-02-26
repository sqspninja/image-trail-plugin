# Code Patterns And Rules

## Runtime Context
- Script runs via Squarespace header injection.
- Do not assume module bundlers, npm runtime, or build pipeline.
- Prefer plain JavaScript with defensive guards and explicit console diagnostics.

## Dependency Rules
- Required: `gsap`.
- Required: `ImageLoader.load` (resolved from supported global locations).
- Optional: `window.reloadSquarespaceScripts`.
- Optional: `SNWindowUtils.getDimensions` (browser viewport fallback is required).
- Do not require `ScrollTrigger` for core image-trail runtime.

## Lifecycle Rules
- Keep one runtime controller instance on `window.__imageTrailRuntimeController`.
- Re-init must teardown prior runtime before starting a new one.
- Session teardown must remove listeners, clear intervals, kill tweens, hide trail nodes, and remove injected trail nodes.
- Apply source-gallery visibility policy in startup, active, teardown, and bail states.
- Fatal startup/runtime errors should bail controller execution until explicit re-init.

## Source Image Rules
- Source from on-page gallery only: `#trail-gallery .gallery-grid img`.
- Canonical source URL: `data-src`.
- Fail setup if any source image is missing required source attr.
- Preserve source order from DOM order.

## Selector Rules
- Prefer stable IDs over section order.
- Fixed internal selectors:
- target section: `#trail-section`
- source section: `#trail-gallery`
- source image selector: `.gallery-grid img`

## Event and Visibility Rules
- Bind high-frequency pointer listeners only when target section is visible.
- Use native `IntersectionObserver` for visibility gating.
- Refresh mount bounds on both `scroll` and `resize`.
- Keep off-screen behavior strict: unbind listeners and hide trail nodes.

## Logging Rules
- Prefix all runtime logs with `[ImageTrail]`.
- Log lifecycle stages:
- init start
- dependency wait/results
- source wait/results
- setup success
- hide/show source actions
- eligibility transitions (`touch-disabled`, `mobile-disabled`, `enabled`)
- runtime errors with explicit reason

## Error and Console Noise Rules
- Suppress only known non-actionable ResizeObserver loop warning text.
- Do not suppress unrelated console errors.
- Keep source gallery hide policy active even on bail, unless product direction changes.

## Style Rules
- Scope trail styles to `#trail-section`.
- Keep source hide class explicit: `.image-trail-source-hidden`.
- Use editor-safe hide selector:
- `body:not(.sqs-edit-mode-active) #trail-gallery.image-trail-source-hidden`

## Distribution Rules
- Source of truth: `project/image-trail.js`.
- Runtime distribution copy: `project/image-trail-runtime.js`.
- One-file snippet: `project/image-trail-snippet.html`.
- Oneline runtime/snippet/style are release artifacts, not source.
- Regenerate artifacts with: `node project/scripts/build-image-trail-artifacts.js`.
- After runtime/style edits, run the build script before release.

## Documentation Sync Rules
- When behavior/config changes, update:
- `project/docs/CONFIG_REFERENCE.md`
- `project/docs/CHANGELOG.md`
- `project/docs/HANDOFF.md`
- `project/docs/SQUARESPACE_FINDINGS.md`
- `project/docs/TASKS.md`
