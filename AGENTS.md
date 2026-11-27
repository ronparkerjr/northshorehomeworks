## Project rules
- Site content (business info, services, testimonials, image URLs) lives in `src/content/site.ts`; pages read from it so new service/location pages reuse one source.
- Shared layout pieces live in `src/components/site/`; visual styles are `@utility` classes in `src/styles.css`.
- Estimate requests are delivered by the server route `src/routes/api/public/estimate.ts`, which reads the owner's inbox address from the `FORMSUBMIT_TO` secret and forwards it to FormSubmit; the browser posts only to that route, so the address never reaches page code. A refused delivery is reported in the response body as `delivered: false` with a plain message rather than as a 5xx, because a server error from this app's own route blanks the preview; the visitor must still be told the request did not arrive.
- Shared photo rendering uses `SiteImage` and local responsive image manifest; keep original URLs in content so full-size viewing and smaller display sources share one identity.
- Overlay navigation and photo viewing share `useDialogFocus` to contain keyboard focus, restore it, and disable background interaction.
- Warranty scope and provider data live in `src/content/site.ts`; About and service pages reuse those terms to prevent coverage drift between divisions.
- Public-page canonical and sharing URLs derive from `SITE_URL` in `src/lib/seo.ts`, so the approved launch domain can be changed consistently without altering hosting during preparation.
- Browser storage is optional for estimate cooldowns; in-memory checks and an in-flight guard preserve accurate delivery state when storage is blocked.
- Reveal effects must never hide content; keep text and forms visible before hydration, during animation and when observation is unavailable.
