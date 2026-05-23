# Deploying Rephina to Cloudflare

The site is configured as a **static export** (`output: "export"` in [`next.config.ts`](next.config.ts)). `pnpm build` produces a fully static `/out` folder; [`wrangler.jsonc`](wrangler.jsonc) tells Cloudflare to upload that folder as a Worker with static assets.

This deploys for free with unlimited bandwidth on Cloudflare's global CDN.

## One-time setup

### 1. Push the repo to GitHub

```bash
git add -A
git commit -m "Initial Rephina website"
git branch -M main
gh repo create rephina-website --public --source=. --push
# or manually create the repo on github.com and:
# git remote add origin git@github.com:<you>/rephina-website.git
# git push -u origin main
```

### 2. Connect the repo on Cloudflare

1. Sign in (free) at <https://dash.cloudflare.com>.
2. **Workers & Pages** → **Create** → **Workers** tab → **Import a repository**.
3. Pick `rephina-website`.
4. **Build configuration** — confirm these (Cloudflare auto-fills most):

   | Field                   | Value           |
   | ----------------------- | --------------- |
   | Build command           | `pnpm build`    |
   | Deploy command          | `npx wrangler deploy` |
   | Root directory          | *(leave blank)* |
   | Env var: `NODE_VERSION` | `22`            |
   | Env var: `PNPM_VERSION` | `9`             |

   **Leave the "Output directory" field blank.** Wrangler reads `wrangler.jsonc` and uploads `./out` automatically.

5. Click **Save and Deploy**. First build takes ~2 min. You get a URL like `rephina-website.<account>.workers.dev`.

Every push to `main` from now on triggers an automatic build + deploy. Pull requests get preview URLs.

### 3. Add your custom domain

Once a deploy is live:

1. Worker → **Settings** → **Domains & Routes** → **Add** → **Custom domain** → enter `rephina.co.za` (and again for `www.rephina.co.za`).
2. If your domain is registered through Cloudflare, DNS is added automatically.
3. If it's registered elsewhere (e.g. domains.co.za):
   - Either transfer DNS to Cloudflare (free, recommended), or
   - At your registrar add a `CNAME` for `www` pointing to your `*.workers.dev` URL.
4. SSL certificates issue automatically within ~10 minutes.

## Day-to-day workflow

```bash
# edit content (lib/content.ts is the single source of truth)
pnpm dev                    # local preview at http://localhost:3000
git add -A && git commit -m "Update copy"
git push                    # → Cloudflare auto-builds + deploys in ~2 min
```

## Local preview of the production build

To verify what Cloudflare will see before pushing:

```bash
pnpm build                       # writes /out
pnpm dlx serve out -l 4000       # serves it at http://localhost:4000
# or, to test it through workerd (the actual Cloudflare runtime):
pnpm dlx wrangler dev
```

## Environment variables

If you later set a custom domain, add this in the Cloudflare dashboard
(**Worker → Settings → Variables and Secrets**) so the sitemap and OG tags pick it up:

```
NEXT_PUBLIC_SITE_URL = https://rephina.co.za
```

It's referenced from [`app/sitemap.ts`](app/sitemap.ts) and [`app/robots.ts`](app/robots.ts).

## Why the first deploy failed (background)

If you ever see this error:

> `ENOENT: ... .next/standalone/.next/server/pages-manifest.json`

That means Wrangler tried to migrate your project to **OpenNext** (server-rendered Next.js on Workers). OpenNext expects `output: "standalone"`, but ours is `output: "export"` (static). The [`wrangler.jsonc`](wrangler.jsonc) at the project root prevents the auto-migration — it explicitly declares the project as a static-assets Worker pointing at `./out`. Don't delete that file.

## Switching to SSR later

If you eventually need server-rendered routes, route handlers, middleware or ISR:

1. Remove `output: "export"`, `images.unoptimized` and `trailingSlash` from [`next.config.ts`](next.config.ts).
2. Remove the `export const dynamic = "force-static"` lines from `app/sitemap.ts` and `app/robots.ts`.
3. Delete [`wrangler.jsonc`](wrangler.jsonc) and let Cloudflare's OpenNext flow take over — or migrate to Netlify, which handles SSR Next.js out of the box.

## Other free options (for reference)

| Host              | Why you'd pick it                                            |
| ----------------- | ------------------------------------------------------------ |
| **Cloudflare**  *(current)* | Unlimited bandwidth, free SSL, fastest global CDN |
| **GitHub Pages**  | Already in your git workflow — push the `/out` folder to a `gh-pages` branch |
| **Netlify**       | Same UX, supports SSR Next.js natively if you switch          |
| **Surge.sh**      | `pnpm dlx surge ./out rephina.surge.sh` — literally one command |
