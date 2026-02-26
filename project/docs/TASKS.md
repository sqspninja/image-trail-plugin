# Tasks

## Active
- [ ] Run cross-page verification on at least two additional Squarespace pages.

## Upcoming
- [ ] Support multi-instance targeting by matching selectors via "contains" logic and initializing all matches.
- [ ] Add per-instance config overrides so each matched trail instance can have different settings.
- [ ] Add optional gallery-settings sync to seed trail config from gallery section settings where mappable.
- [ ] Build editor-mode visual settings popup with save/apply flow to avoid manual config typing.
- [ ] Refactor runtime to effect-adapter architecture while keeping image mode parity.
- [ ] Add image styling controls: rounded corners, drop shadow, aspect ratio override, clip-path shape modes.
- [ ] Add image-count controls (max images, ordering strategy, optional random subset).
- [ ] Add fade-out motion presets: `drop`, `shrink`, `spin`, plus default fade.
- [ ] Add `shape` effect mode.
- [ ] Add `icon` effect mode.
- [ ] Add `svg` effect mode.
- [ ] Add `particle` effect mode with node pooling/performance caps.
- [ ] Build editor-mode UI entrypoint (floating config button), gated to edit mode.
- [ ] Add preset model (`soft`, `editorial`, `bold`) plus `custom`.
- [ ] Add export/import JSON flow for sharing settings between pages.
- [ ] Add debug panel mode that surfaces live runtime state.

## Backlog
- [ ] Explore separate flashlight/reveal plugin that reuses shared targeting/utilities.
- [ ] Run feasibility spike for external sources (Dropbox/Drive/remote feeds) with CORS, auth, and URL-stability constraints.
- [ ] If external sources are feasible, add pluggable source adapters with explicit fallback/error behavior.
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
