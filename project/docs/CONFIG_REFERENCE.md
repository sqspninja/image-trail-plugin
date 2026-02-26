# Config Reference

Set `window.IMAGE_TRAIL_CONFIG` before plugin initializes.

## Recommended Script Order

```html
<script src="/s/image-trail-config.js"></script>
<link rel="stylesheet" href="/s/image-trail.css" />
<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/gsap.min.js"></script>
<script src="/s/image-trail-runtime.js"></script>
```

## Public Config Keys

- `debug` (boolean, default `false`)
- `trailImageWidth` (string or number, default `"15vw"`)
- `initialActivationDistancePx` (number, default `100`)
- `spawnDistancePx` (number, default `150`)
- `idleSpawnIntervalMs` (number, default `220`)
- `idleSpawnMaxGapMs` (number, default `700`)
- `idleApproachFactor` (number `0..1`, default `0.6`)
- `visibilityThreshold` (number `0..1`, default `0.1`)
- `moveDuration` (number, default `0.4`)
- `moveEase` (string, default `"power3.out"`)
- `fadeInDuration` (number, default `0.2`)
- `fadeInEase` (string, default `"power1.out"`)
- `fadeOutDelay` (number, default `0.7`)
- `fadeOutDuration` (number, default `0.3`)
- `fadeOutEase` (string, default `"power2.out"`)

## Internal Defaults (Not Public Config)

These are intentionally not overridable through `window.IMAGE_TRAIL_CONFIG`:

- `targetSectionSelector: "#trail-section"`
- `sourceGallerySelector: "#trail-gallery"`
- `sourceGridImageSelector: ".gallery-grid img"`
- `requiredSourceAttr: "data-src"`
- `startupTimeoutMs: 10000`
- `hideSourceGallery: true`
- `sourceHiddenClass: "image-trail-source-hidden"`
- `enableOnMobile: false`
- `enableOnTouch: false`
- `mobileBreakpoint: 767`

## Validation Rules

- Unknown keys are rejected.
- Internal-only keys are rejected.
- Invalid values/types are rejected.
- If validation fails, runtime bails and does not initialize trail nodes.

## Runtime Notes

- On non-touch devices, runtime auto-disables at `<= mobileBreakpoint` and re-enables above it on resize.
- On touch-capable devices (default settings), trail stays disabled.
- Source gallery visibility policy is still applied when runtime bails.
- `runImageTrailScripts(...)` can be called again to re-initialize.

## CSS Contract

The runtime toggles class `image-trail-source-hidden` on source gallery section.
This rule is already included in `project/image-trail.css`.
