# Handoff

## Deliverable
Reusable Squarespace image-trail runtime that sources from on-page gallery content and mounts into a target section with strict lifecycle management.

## Source of Truth and Artifacts
- Source of truth: `project/image-trail.js`
- Runtime distribution copy: `project/image-trail-runtime.js`
- Config template: `project/image-trail-config.example.js`
- External install template: `project/image-trail-install.example.html`
- One-file snippet: `project/image-trail-snippet.html`
- One-file oneline snippet: `project/image-trail-snippet-oneline.html`
- Style source: `project/image-trail-styles.less`
- Oneline style: `project/image-trail-style-oneline.css`
- Release helper: `project/scripts/build-image-trail-artifacts.js`
- Quick validation: `project/docs/SMOKE_CHECKLIST.md`

## Runtime Contracts
- No `/galleries?format=page-context` fetch dependency.
- Source images must come from `#trail-gallery .gallery-grid img` and include `data-src`.
- Trail mounts in `#trail-section .fluid-engine`.
- `ImageLoader.load` is required.
- Re-init replaces prior runtime controller.
- Off-screen target unbinds listeners and hides trail nodes.
- Source gallery visibility follows config policy across active and bail states.
- Public config is animation-only; selector/safety keys are internal-only.

## Default Internal Behavior
- Source gallery is hidden by default.
- Trail disabled on touch devices by default.
- Trail disabled at `<= 767px` on non-touch by default.
- Runtime re-evaluates eligibility on resize.

## Known Risks
- Squarespace markup changes for gallery blocks may require selector updates.
- Missing `data-src` values cause intentional hard fail.
- Large source galleries can create high animation load.
- ResizeObserver warning suppression is scoped to specific known noisy message text.

## Recommended Next Steps
1. Add a reproducible release helper for oneline artifact generation.
2. Add QA matrix with expected logs for each fail/disable scenario.
3. Continue growing cross-project knowledge in `project/docs/SQUARESPACE_FINDINGS.md`.
