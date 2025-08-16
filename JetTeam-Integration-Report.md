# JetTeam Integration Report
Date: 2025-08-11
Tester: _Your name_

## Sites Under Test
- **TrailRun Club — Find Your Pace** — Sports / Landing Page — Path: `/trailrun-landing/index.html`
- **Indie Beats — Music Notes & Finds** — Music / Blog — Path: `/indie-beats-blog/index.html`
- **Auralink Pro — Smart Wireless Earbuds** — Technology / Product Page — Path: `/ai-gadget-product/index.html`
- **Mina Park — Minimalist Portfolio** — Fashion / Portfolio — Path: `/minimalist-portfolio/index.html`
- **Frontend Fast-Track — 1‑Day Workshop** — Education / Event Page — Path: `/tech-workshop-event/index.html`


## JetTeam Context
- Platform URL: https://jetteam.glpsoftware.pl/ (requires access)
- Methods evaluated: iframe embed, external link, CMS content source (where applicable).

## Test Matrix

| Site | Method | Result | Mobile OK | Notes |
|---|---|---|---|---|
| TrailRun Club | iframe | ☐ Pass ☐ Fail | ☐ |  |
| TrailRun Club | external link | ☐ Pass ☐ Fail | ☐ |  |
| Indie Beats | iframe | ☐ Pass ☐ Fail | ☐ |  |
| Indie Beats | external link | ☐ Pass ☐ Fail | ☐ |  |
| Auralink Pro | iframe | ☐ Pass ☐ Fail | ☐ |  |
| Auralink Pro | external link | ☐ Pass ☐ Fail | ☐ |  |
| Portfolio | iframe | ☐ Pass ☐ Fail | ☐ |  |
| Portfolio | external link | ☐ Pass ☐ Fail | ☐ |  |
| Workshop Event | iframe | ☐ Pass ☐ Fail | ☐ |  |
| Workshop Event | external link | ☐ Pass ☐ Fail | ☐ |  |

## Issues & Observations
- CORS: None expected (static assets only). If seen, note the failing asset URL.
- HTTPS: Ensure hosting is HTTPS to avoid mixed content inside JetTeam.
- Framing headers: If pages fail in iframe, check host adds `X-Frame-Options` or `Content-Security-Policy: frame-ancestors`.

## Conclusions
- _Summary of what worked and what didn’t._

## Recommendations
1. Prefer Netlify/Vercel for hosting (no restrictive frame headers by default).
2. Avoid third‑party widgets that inject strict CSP.
3. Keep assets on same origin or trusted CDNs (HTTPS).
