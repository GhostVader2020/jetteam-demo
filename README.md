# JetTeam Demo — 5 Simple Websites

This bundle contains five small, static websites built with HTML/CSS/JS for **JetTeam** integration testing.

## Sites

- **TrailRun Club — Find Your Pace** — Sports / Landing Page (`/trailrun-landing/index.html`)
- **Indie Beats — Music Notes & Finds** — Music / Blog (`/indie-beats-blog/index.html`)
- **Auralink Pro — Smart Wireless Earbuds** — Technology / Product Page (`/ai-gadget-product/index.html`)
- **Mina Park — Minimalist Portfolio** — Fashion / Portfolio (`/minimalist-portfolio/index.html`)
- **Frontend Fast-Track — 1‑Day Workshop** — Education / Event Page (`/tech-workshop-event/index.html`)

## Features (each site)

- Unique theme/title
- One text section + one visual section (hero image or icons)
- Responsive (mobile-first)
- Basic navigation (top menu + anchors)
- Light interactivity (slider, filter, gallery, modal, form)

## Embedding/Integration Notes

- No `X-Frame-Options` or `Content-Security-Policy` headers are set here (static files). If your hosting adds restrictive headers, disable them to allow iframing in JetTeam.
- All assets are relative or hosted via HTTPS.
- No cross-origin fetches; forms are handled client-side.

## Quick Deploy

### Netlify (drag & drop)

1. Zip the folder of a site (e.g., `/trailrun-landing`) and drag it onto https://app.netlify.com/drop
2. Copy the resulting **HTTPS** URL.

### GitHub Pages (per-folder)

1. Push this repo to GitHub.
2. In **Settings → Pages**, select the `main` branch and `/root` or `/docs`.
3. Access at `https://<user>.github.io/<repo>/{slug}/index.html`

> Tip: Netlify/Vercel generally allow iframing by default. Some enterprise hosts add `X-Frame-Options: SAMEORIGIN` by default—avoid that for JetTeam.

## JetTeam Test Checklist (quick)

- [ ] Page loads in JetTeam (iframe/external link/content source).
- [ ] Mobile view works inside JetTeam container.
- [ ] No mixed-content warnings (all HTTPS).
- [ ] Interactions work (menu, sliders, modals, forms).
- [ ] No console errors / CORS issues.
- [ ] Performance acceptable and layout stable.

See `JetTeam-Integration-Report.md` to record results.
