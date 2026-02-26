# Deployment Checklist

## Purpose
Repeatable install and verification flow for Squarespace header injection.

## Deployable Files
- Runtime source copy: `project/image-trail-runtime.js`
- Runtime style source copy: `project/image-trail.css`
- Optional config template: `project/image-trail-config.example.js`
- External install example: `project/image-trail-install.example.html`
- CDN install example: `project/image-trail-install-cdn.example.html`
- One-file snippet: `project/image-trail-snippet.html`
- One-file oneline snippet: `project/image-trail-snippet-oneline.html`
- Oneline style: `project/image-trail-style-oneline.css`
- Legacy style reference: `project/image-trail-styles.less`

## Pre-Deploy Checks
- Regenerate artifacts from source:
- `node project/scripts/build-image-trail-artifacts.js`
- Target section exists with ID `trail-section`.
- Source gallery section exists with ID `trail-gallery`.
- Source gallery images expose `data-src`.
- `gsap` and `ImageLoader.load` are available at runtime.

## Install Option A: External Files
1. Upload runtime file to a URL like `/s/image-trail-runtime.js`.
2. Upload style file to a URL like `/s/image-trail.css`.
3. Upload config file based on `image-trail-config.example.js` (for example `/s/image-trail-config.js`).
4. Paste tags from `project/image-trail-install.example.html` into Header Code Injection.
5. Save and hard refresh.

## Install Option B: One-File Snippet
1. Copy all content from `project/image-trail-snippet-oneline.html`.
2. Paste into Header Code Injection.
3. Adjust only `window.IMAGE_TRAIL_CONFIG` values as needed.
4. Save and hard refresh.

## CSS Note
- `project/image-trail.css` already contains the editor-safe hide rule for source gallery visibility.

## Smoke Test
1. Desktop non-touch above `767px`: trail initializes and follows pointer.
2. Scroll within target section below fold: trail still tracks correctly.
3. Resize non-touch viewport to `<= 767px`: trail tears down.
4. Resize back above `767px`: trail re-initializes.
5. Touch device: trail remains disabled.
6. Source gallery is hidden on live site and visible in editor.

## Troubleshooting
- Use `[ImageTrail]` logs as primary signal.
- Validate section IDs and `data-src` first.
- If setup bails, fix validation/dependency errors before tweaking animation values.
- Ignore unrelated YUI warnings unless plugin logs show failure.
