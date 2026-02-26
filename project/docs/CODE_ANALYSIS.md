# Code Analysis

## Audit Scope
- Runtime source: `project/image-trail.js`
- Runtime distribution: `project/image-trail-runtime.js`
- One-file snippets: `project/image-trail-snippet.html`, `project/image-trail-snippet-oneline.html`
- Install artifacts: `project/image-trail-install.example.html`, `project/image-trail-config.example.js`, `project/image-trail-style-oneline.css`, `project/image-trail-styles.less`

## Architecture Summary
- Entry point: `runImageTrailScripts(configOrElement)`.
- Runtime controller manages enable/disable state and re-evaluation on resize.
- Session initialization pipeline:
- DOM ready wait
- optional `window.reloadSquarespaceScripts()`
- runtime dependency wait (`gsap`, `ImageLoader.load`)
- source gallery readiness wait
- source image normalization and preload
- trail node creation and event binding
- Session teardown removes listeners, intervals, tweens, and injected nodes.

## Data Flow
1. Source discovery: `#trail-gallery .gallery-grid img`.
2. Validation: all source images must have `data-src`.
3. Metadata extraction: width/height from `data-image-dimensions` or width/height attrs.
4. Trail render: append `.trail-image-container > img.trail-image` nodes to target `.fluid-engine`.
5. Runtime movement: pointer and idle bridge drive GSAP timeline transforms.

## Config Model
- Public keys are motion/timing only.
- Internal runtime and selector keys are rejected from public config.
- Validation is strict and fail-fast.
- Validation failures short-circuit runtime start and return explicit errors.

## Dependency Handling
- Hard dependencies:
- `gsap`
- `ImageLoader.load` (via `ImageLoader`, `window.Squarespace.ImageLoader`, or `window.Static.ImageLoader`)
- Soft dependencies:
- `window.reloadSquarespaceScripts`
- `SNWindowUtils.getDimensions`

## Error and Stability Patterns
- Explicit timeout-based waits for startup and source readiness.
- Explicit hard-fail conditions for missing selector/data requirements.
- Bail-state behavior keeps source gallery visibility policy applied.
- Runtime controller suppresses repeated startup loops after fatal runtime errors.

## Observed Strengths
- Clear separation between runtime controller and animation session.
- Strong teardown discipline reduces listener/tween leaks.
- Strict config contract prevents accidental breaking overrides.
- No network dependency for gallery data in current runtime.
- One-file and external-file install paths both supported.

## Observed Risks
- Global ResizeObserver warning suppression is broad to window error stream, even though message match is narrow.
- No built-in cap on source image count; very large galleries can increase memory and animation cost.
- Oneline release artifacts are generated manually; risk of drift without a scripted release step.
- Runtime source and distribution copies can diverge if not synced on every edit.

## High-Value Next Improvements
1. Add a release helper script to regenerate runtime/snippet oneline artifacts deterministically.
2. Add QA matrix with expected logs and outcomes for each fail path.
3. Add optional source image cap for performance-sensitive pages.
4. Add lightweight runtime health metrics in debug mode (active listeners, active trail node count).

## Verification Notes
- Syntax check performed for runtime and oneline runtime with `node --check` during this session.
- Behavior verification in this audit is document/code-based, not browser-automated.
