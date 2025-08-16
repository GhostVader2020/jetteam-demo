# JetTeam Integration Report
Date: 2025-08-16
Tester: Nurbek

## Sites Under Test (Live Links)
- **Hub:** https://ghostvader2020.github.io/jetteam-demo/
- **TrailRun Club — Find Your Pace:** https://ghostvader2020.github.io/jetteam-demo/trailrun-landing/
- **Indie Beats — Music Notes & Finds:** https://ghostvader2020.github.io/jetteam-demo/indie-beats-blog/
- **Auralink Pro — Smart Wireless Earbuds:** https://ghostvader2020.github.io/jetteam-demo/ai-gadget-product/
- **Mina Park — Minimalist Portfolio:** https://ghostvader2020.github.io/jetteam-demo/minimalist-portfolio/
- **Frontend Fast-Track — 1-Day Workshop:** https://ghostvader2020.github.io/jetteam-demo/tech-workshop-event/
- **Iframe Tester:** https://ghostvader2020.github.io/jetteam-demo/tools/iframe-tester.html

## Method
- **Standalone checks** (outside JetTeam): responsiveness, basic navigation, and interactivity confirmed for all sites.
- **JetTeam checks**: to be verified inside JetTeam by loading each URL as an **iframe** and as an **external link**.

## Test Matrix
> Legend: ✅ Pass · ❌ Fail · ⏳ Pending (requires JetTeam access)

| Site | iframe loads | External link loads | Mobile OK (standalone) | Interactivity OK (standalone) | Notes |
|---|:--:|:--:|:--:|:--:|---|
| TrailRun Club | ⏳ | ✅ | ✅ | ✅ | Local images; ready for iframe test |
| Indie Beats | ⏳ | ✅ | ✅ | ✅ | Tag filter works; iframe test pending |
| Auralink Pro | ⏳ | ✅ | ✅ | ✅ | Gallery works; iframe test pending |
| Portfolio | ⏳ | ✅ | ✅ | ✅ | Lightbox works; iframe test pending |
| Workshop Event | ⏳ | ✅ | ✅ | ✅ | Agenda expands; iframe test pending |

## Issues & Observations
- **Images/CDN**: Switched to **local assets** across all sites to avoid external CDN blocks when embedded.
- **HTTPS**: Served via GitHub Pages over HTTPS (avoids mixed-content issues).
- **CORS**: No cross-origin fetches; contact forms are client-only.
- **Framing headers**: GitHub Pages typically does **not** set restrictive `X-Frame-Options` or `CSP frame-ancestors`. If JetTeam enforces its own CSP, the Pages domain may need to be allowlisted.

## Quick JetTeam Steps to Complete (per site)
1. Add the URL as an **external link** → confirm it opens.  
2. Embed the URL in an **iframe/content block** → confirm it renders.  
3. Narrow the JetTeam panel (~360–414px) → check layout and overflow.  
4. Click menu + interactive widget → confirm behavior.  
5. If iframe fails: check console for `frame-ancestors` / `X-Frame-Options` messages.

## Conclusions
- **Standalone**: All five sites pass responsiveness and interactivity checks.  
- **JetTeam**: Embedding status **pending** until validated inside JetTeam.

## Recommendations
1. Keep using **local images/assets** to avoid CDN/CSP issues.
2. If JetTeam CSP blocks iframes, allow `https://ghostvader2020.github.io` in `frame-ancestors`.
3. Avoid third-party widgets that inject strict CSP unless whitelisted.
