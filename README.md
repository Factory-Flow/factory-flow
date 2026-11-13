# Factory Flow marketing site

Marketing site built with React, TypeScript, Vite, and Material UI.

## Beta signup configuration

The hero section includes an inline beta signup form backed by Loops. Set `VITE_LOOPS_FORM_ID` to your Loops newsletter form ID (for example, `cmgql2ir8e5fo180ietgz744n`) so submissions post to `https://app.loops.so/api/newsletter-form/{id}`.

Without this environment variable the form stays disabled and shows a reminder banner in development.

## Gateway download

The Factory Flow Gateway section has a "Download Gateway" button that opens a modal collecting the
visitor's platform and email, verifying them with Cloudflare Turnstile, then posting to the
[`download-factory-flow-gateway`](https://github.com/Factory-Flow/factory-flow-cloudflare) Worker's
`/request` endpoint — the Worker emails a one-time, one-hour download link for the matching installer.

Set `VITE_TURNSTILE_SITE_KEY` to the Turnstile Site Key for this domain (from the Cloudflare Turnstile
dashboard — the matching Secret Key lives on the Worker, not here). Without it, the modal skips
rendering the Turnstile widget and the Worker's Turnstile check will reject every submission.

This repo deploys via GitHub Pages ([`.github/workflows/pages.yml`](.github/workflows/pages.yml)), which
doesn't read `.env.production` — it only sees whatever env vars the workflow itself passes to
`npm run build:gh`. So the real key needs to be a repo secret, passed to that build step:

```yaml
- name: Build (GitHub Pages)
  run: npm run build:gh
  env:
    VITE_TURNSTILE_SITE_KEY: ${{ secrets.VITE_TURNSTILE_SITE_KEY }}
```

`.env.production` is only consulted for a local `vite build --mode production`.

`VITE_DOWNLOAD_API_URL` optionally overrides the Worker origin (defaults to
`https://downloads.factoryflow.io`) — useful for pointing a local build at `wrangler dev`.

Set `VITE_SHOW_GATEWAY_DOWNLOAD=false` (as a repo variable/secret passed to the build step, same as
above) to hide the "Download Gateway" button and skip mounting the modal entirely — e.g. while the
Worker's R2 bucket isn't populated yet. It defaults to shown; any value other than the literal
string `"false"` keeps it visible.

## Analytics

Google Analytics 4 is wired up with measurement ID `G-MBRSNLKTMD` in production builds only. The tracker initializes automatically and records page views for every route change when deployed.
