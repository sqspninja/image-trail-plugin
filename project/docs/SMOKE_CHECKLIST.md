# Smoke Checklist

Use this for quick validation after deploy or config changes.

## Preconditions
- Page has section ID `trail-section`.
- Page has gallery section ID `trail-gallery`.
- Source gallery images have `data-src`.

## Quick Checks
1. Load page on non-touch desktop above `767px`.
- Expected: `[ImageTrail]` logs show startup and trail setup completion.
- Expected: moving cursor over target section spawns trail images.

2. Scroll within target section below the fold.
- Expected: trail still follows cursor inside target section.

3. Resize non-touch browser to `<= 767px`.
- Expected: logs indicate runtime inactive (`mobile-disabled`).
- Expected: trail stops.

4. Resize back above `767px`.
- Expected: logs indicate runtime enabling.
- Expected: trail resumes.

5. Test touch device (or touch emulation).
- Expected: logs indicate runtime inactive (`touch-disabled`).
- Expected: no trail animation.

6. Verify source gallery visibility behavior.
- Live mode: `#trail-gallery` hidden when class `image-trail-source-hidden` is present.
- Editor mode (`.sqs-edit-mode-active`): source gallery remains visible.

## Fast Failure Triage
- If setup fails, check section IDs first.
- Then check source image `data-src` attributes.
- Then check dependency availability (`gsap`, `ImageLoader.load`).
