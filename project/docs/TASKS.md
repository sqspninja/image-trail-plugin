# Tasks

## Active
- [ ] Run cross-page verification on at least two additional Squarespace pages.

## Upcoming
- [ ] Build editor-mode UI entrypoint (floating config button), gated to edit mode.
- [ ] Add preset model (`soft`, `editorial`, `bold`) plus `custom`.
- [ ] Add export/import JSON flow for sharing settings between pages.
- [ ] Add debug panel mode that surfaces live runtime state.

## Backlog
- [ ] Add advanced GSAP override block for dev users.
- [ ] Add optional image filtering rules (count limit, orientation filter, randomize).
- [ ] Add optional performance mode profile for large source galleries.

## Completed
- [x] Added release helper workflow script for generating:
- [x] `image-trail-runtime-oneline.js`
- [x] `image-trail-snippet-oneline.html`
- [x] `image-trail-style-oneline.css`
- [x] Added compact smoke checklist doc: `project/docs/SMOKE_CHECKLIST.md`.
- [x] Replaced page-context fetch with on-page gallery sourcing.
- [x] Added startup waits for DOM, dependencies, and source gallery readiness.
- [x] Added strict config validation and internal/public config separation.
- [x] Added source-gallery hide policy across startup/active/teardown/bail.
- [x] Added touch/mobile eligibility gating with resize re-evaluation.
- [x] Added scroll+resize mount-bounds refresh for below-fold tracking.
- [x] Added runtime controller lifecycle with teardown and re-init replacement.
- [x] Removed ScrollTrigger dependency from install artifacts.
- [x] Switched visibility binding to native `IntersectionObserver`.
- [x] Added targeted suppression for noisy ResizeObserver loop console warning.
- [x] Added one-file and oneline install artifacts.
- [x] Completed documentation audit and baseline refresh.
