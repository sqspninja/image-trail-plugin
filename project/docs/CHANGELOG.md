# Changelog

## 2026-02-25

### Runtime and Behavior
- Rebuilt trail runtime to source images from on-page `#trail-gallery` only (no page-context fetch).
- Added startup wait flow with explicit diagnostics.
- Added runtime controller lifecycle with teardown-before-reinit behavior.
- Added strict config validation guardrails and internal/public config separation.
- Added touch/mobile eligibility gating and resize re-evaluation.
- Added scroll-based mount-bounds refresh for below-fold pointer tracking.
- Added source-gallery hide policy in startup, active, teardown, and bail states.
- Removed ScrollTrigger dependency from install artifacts.
- Switched visibility binding to native `IntersectionObserver`.
- Added targeted suppression for noisy ResizeObserver loop warning messages.

### Distribution and Install Artifacts
- Added/updated one-file snippet: `project/image-trail-snippet.html`.
- Added oneline runtime: `project/image-trail-runtime-oneline.js`.
- Added oneline style: `project/image-trail-style-oneline.css`.
- Added one-file oneline snippet: `project/image-trail-snippet-oneline.html`.
- Added copy-ready bundle file: `project/image-trail.txt`.
- Added release helper script: `project/scripts/build-image-trail-artifacts.js`.

### Documentation
- Completed full documentation audit and refresh.
- Added deep technical analysis: `project/docs/CODE_ANALYSIS.md`.
- Expanded Squarespace knowledge base: `project/docs/SQUARESPACE_FINDINGS.md`.
- Updated briefing, roadmap, tasks, config reference, deployment checklist, rules, and handoff docs to match runtime behavior.
- Added compact smoke checklist: `project/docs/SMOKE_CHECKLIST.md`.
