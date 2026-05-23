import type { NextConfig } from "next";

// On GitHub Pages without a custom domain, the site lives at
// <username>.github.io/<repo>/ — every asset URL needs that prefix.
// Set the BASE_PATH env var (e.g. "/rephina-website") in that case.
// Leave it unset (or empty) for Cloudflare, custom domains, or local dev.
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Static export — Next.js writes plain HTML/CSS/JS to /out.
  // Drop this (and `images.unoptimized`) if you ever add server routes,
  // ISR, or middleware and need a Node runtime on the host.
  output: "export",

  // /out is served as static files (Cloudflare, GitHub Pages, Netlify
  // static, S3, etc.), so disable the next/image optimisation pipeline.
  images: { unoptimized: true },

  // Pretty URLs without server-side redirects: /about → /about/index.html
  trailingSlash: true,

  // Honoured on GitHub Pages project sites; harmless everywhere else.
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
