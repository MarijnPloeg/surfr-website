# Deploying the Surfr Website

The site runs on Vercel. The previous GitHub Pages setup has been retired
because the leaderboard integration requires server-side compute (a BFF that
proxies the Surfr backend with a server-only access token).

## First-time setup

1. **Connect the repo on Vercel.**
   - Go to vercel.com → Add New → Project.
   - Import the `MarijnPloeg/surfr-website` GitHub repo.
   - Framework preset: Next.js (auto-detected).
   - Build command and output directory: defaults are correct.

2. **Set environment variables.**
   In Vercel project settings → Environment Variables, add:
   - `SURFR_API_TOKEN` — server-side access token from the Surfr backend
     team. Mark it Production + Preview + Development.
   - `SURFR_API_BASE_URL` (optional) — defaults to `https://api.thesurfr.app`.

   Local development: copy `.env.example` to `.env.local` and fill in.

3. **Domain.**
   - In Vercel project settings → Domains, add `thesurfr.app` (and `www`).
   - Update DNS at the registrar to point to Vercel (A/CNAME records as
     instructed by Vercel's domain UI).
   - Vercel issues the TLS certificate automatically.

## What changed vs the GitHub Pages setup

- `next.config.ts`: `output: "export"`, `basePath`, `assetPrefix`, and the
  `GITHUB_PAGES` flag have all been removed. Next.js now runs as a full
  server-rendered app on Vercel.
- `.github/workflows/deploy.yml` (GitHub Pages action) has been removed.
  Vercel handles deploys automatically on every push to `main`.
- The site now supports API routes (`app/api/*/route.ts`) which the
  leaderboard will use as a proxy to the Surfr backend.

## Routine deploys

Push to `main` → Vercel builds and ships automatically. Preview URLs are
generated for every other branch and PR.

## Rollback

In the Vercel dashboard → Deployments → pick a previous green deploy →
Promote to Production. Instant rollback, no rebuild.
