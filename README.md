# Rephina Software Solutions — Website

Marketing site for **Rephina Software Solutions (Pty) Ltd** (Reg. 2026/250285/07), the South African software development partner for SMEs, startups and freelancers.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · pnpm

## Quick start

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm start
```

## Add the logo

1. Save your brand mark as **`public/logo.png`** — that's what the Nav and Footer reference.
2. (Optional) Drop `app/icon.png` for the browser tab favicon — Next.js picks it up automatically.

## Project structure

```
app/
  layout.tsx     # nav + footer wrapper
  page.tsx       # home
  globals.css    # Tailwind v4 + brand theme tokens
  about/         # mission, values, story, FAQ
  services/      # full service catalogue
  contact/       # form + contact details
  work/          # case study placeholders
  not-found.tsx  # 404
components/
  Nav, Footer, Logo, Container, PageHeader, CtaSection, ServiceIcon
lib/
  content.ts     # ALL site copy — edit one file, the whole site updates
public/
  logo.png       # ← drop the brand mark here
```

## Brand palette

Defined in [`app/globals.css`](app/globals.css) under `@theme`, mirroring the logo:

| Token         | Use                                | Notes                                           |
| ------------- | ---------------------------------- | ----------------------------------------------- |
| `brand-*`     | Primary navy (REPHINA wordmark)    | `brand-800` (#1c3a5d) is the headline navy     |
| `sky-*`       | Secondary blue (circuit traces)    | `sky-400` (#5fa3cd) for accents                |
| `accent-*`    | Lime green (growth accent)         | `accent-500` (#8fb53a) for CTAs / highlights   |
| `ink-*`       | Neutral slate                      | Text and surfaces                              |

Change those values in one place to re-skin the entire site.

## Contact form

Currently uses a `mailto:` fallback so it works without a backend. To send to a real inbox or CRM, replace the `onSubmit` handler in [`app/contact/ContactForm.tsx`](app/contact/ContactForm.tsx) with a Next.js Route Handler (`app/api/contact/route.ts`) + Resend / Postmark / SendGrid — or a hosted form service (Formspree, Web3Forms, Basin).

## Deployment

- **Vercel** (recommended) — connect the GitHub repo, no config needed.
- **Netlify** — works with the `@netlify/plugin-nextjs`.
- **Self-hosted (Xneelo / Hetzner)** — run `pnpm build && pnpm start` behind a reverse proxy.

## Contact info

`rephinasoftware@gmail.com` · 071 927 9462
