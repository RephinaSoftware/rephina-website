# Deploying Rephina to Cloudflare Pages

The site is configured as a **static export** (`output: "export"` in [`next.config.ts`](next.config.ts)). `pnpm build` produces a fully static `/out` folder — no server runtime required. Cloudflare Pages serves it free, with unlimited bandwidth, on a global CDN.

## One-time setup (~5 minutes)

### 1. Push the repo to GitHub

If you haven't already:

```bash
git add -A
git commit -m "Initial Rephina website"
git branch -M main
gh repo create rephina-website --public --source=. --push
# or manually: create the repo on github.com, then:
git remote add origin git@github.com:<you>/rephina-website.git
git push -u origin main
```

### 2. Connect the repo to Cloudflare Pages

1. Sign in (or sign up — free) at <https://dash.cloudflare.com>.
2. Left sidebar → **Workers & Pages** → **Create** → **Pages** tab → **Connect to Git**.
3. Authorise Cloudflare to read your GitHub account, then pick `rephina-website`.
4. **Build settings**:

   | Field                   | Value           |
   | ----------------------- | --------------- |
   | Framework preset        | **Next.js (Static HTML Export)** |
   | Build command           | `pnpm build`    |
   | Build output directory  | `out`           |
   | Root directory          | *(leave blank)* |
   | Node version (env var)  | `NODE_VERSION = 22` |
   | Package manager (env var) | `PNPM_VERSION = 9` |

5. Click **Save and Deploy**. First build takes ~2 minutes. You get a URL like `rephina-website.pages.dev`.

Every push to `main` from now on triggers an automatic build + deploy. Pull requests get preview URLs.

### 3. Add your custom domain

Once a deploy is live:

1. Project → **Custom domains** → **Set up a custom domain** → enter `rephina.co.za` (and again for `www.rephina.co.za`).
2. If your domain is registered through Cloudflare, DNS is added automatically.
3. If it's registered elsewhere (e.g. domains.co.za):
   - At your registrar, add a `CNAME` for `www` pointing to `rephina-website.pages.dev`.
   - For the apex (`rephina.co.za`) use Cloudflare's instructions — usually a `CNAME` flattening or transferring DNS to Cloudflare.
4. SSL certificates issue automatically within ~10 minutes.

## Day-to-day workflow

```bash
# edit content (lib/content.ts is the source of truth)
pnpm dev                    # local preview at http://localhost:3000
git add -A && git commit -m "Update copy"
git push                    # → Cloudflare auto-deploys in ~2 min
```

## Environment variables

If you later add a public site URL (for OG tags / sitemap), set it in **Cloudflare Pages → Settings → Environment variables**:

```
NEXT_PUBLIC_SITE_URL = https://rephina.co.za
```

It's referenced from [`app/sitemap.ts`](app/sitemap.ts) and [`app/robots.ts`](app/robots.ts).

## Switching to SSR later

If you ever need server-rendered routes, route handlers (`app/api/...`), middleware, or ISR:

1. Remove `output: "export"` and `images.unoptimized` from [`next.config.ts`](next.config.ts).
2. Remove the `export const dynamic = "force-static"` lines from `app/sitemap.ts` and `app/robots.ts`.
3. In Cloudflare Pages, switch the framework preset to **Next.js** (not the static one) and install the [`@cloudflare/next-on-pages`](https://github.com/cloudflare/next-on-pages) adapter, or move the site to Netlify which handles SSR Next.js out of the box.

## Other free options (for reference)

| Host              | Why you'd pick it                                            |
| ----------------- | ------------------------------------------------------------ |
| **Cloudflare Pages** *(current)* | Unlimited bandwidth, free SSL, fastest global CDN |
| **GitHub Pages**  | Already in your git workflow — set source to `/out` branch    |
| **Netlify**       | Same UX as CF, supports SSR Next.js natively if you switch    |
| **Surge.sh**      | `pnpm dlx surge ./out rephina.surge.sh` — literally one command |
