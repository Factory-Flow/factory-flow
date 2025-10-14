# Factory Flow marketing site

Marketing site built with React, TypeScript, Vite, and Material UI.

## Waitlist configuration

The hero section includes an inline waitlist form backed by Loops. Set `VITE_LOOPS_FORM_ID` to your Loops newsletter form ID (for example, `cmgql2ir8e5fo180ietgz744n`) so submissions post to `https://app.loops.so/api/newsletter-form/{id}`.

Without this environment variable the form stays disabled and shows a reminder banner in development.

## Analytics

Google Analytics 4 is wired up with measurement ID `G-MBRSNLKTMD`, which is embedded directly in the client build. The tracker initializes automatically and records page views for every route change.
