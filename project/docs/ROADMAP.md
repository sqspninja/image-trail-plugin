# Roadmap

## Goal
Ship a reusable Squarespace 7.1 image-trail plugin that is reliable in header injection, easy to configure, and easy to hand off.

## Product Principles
- Keep default setup simple.
- Prefer explicit setup errors over silent failure.
- Keep editor-only tooling out of live render.
- Keep integration patterns portable to other Squarespace projects.

## Current Status
- Phase 1: on-page gallery sourcing and runtime stabilization complete.
- Phase 2: config guardrails and responsive eligibility control complete.
- Phase 2.2: install artifacts complete (external-file and one-file modes).
- Phase 2.3: documentation and analysis baseline complete.

## Phase 2.4 (Next)
- Add a small release script/workflow to regenerate oneline artifacts consistently.
- Add a compact smoke checklist doc for post-deploy and config-change verification.
- Validate behavior across at least two additional Squarespace pages with different gallery presets.

## Phase 3
- Multi-instance selector targeting (contains matching + multiple trail instances).
- Per-instance settings model (instance-level config overrides).
- Optional sync from gallery section settings into trail defaults.
- Editor-only configurator entrypoint (floating button in edit mode).
- Basic control panel for current public config keys.
- Config export/import text mode.

## Phase 4
- Preset system (`soft`, `editorial`, `bold`) with `custom` overlay.
- Fade-out motion preset family (`fade`, `drop`, `shrink`, `spin`, extensible).
- Optional advanced GSAP overrides for dev users.

## Phase 5
- Multi-effect trail core refactor (adapter model with image parity baseline).
- Image styling controls (corner radius, shadow, aspect ratio, clip-path variants).
- Image count controls (limit/selection strategy).
- Shape trail mode.
- Icon trail mode.
- SVG stamp trail mode.
- Particle trail mode (with pooling/perf caps).

## Phase 6
- External source feasibility and adapter track (Dropbox/Drive/remote feed where technically viable).
- Packaging polish and repeatable release checklist.
- Versioned release notes and migration notes for breaking changes.
