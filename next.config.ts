import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Static export — Next.js writes plain HTML/CSS/JS to /out.
  // Drop this (and `images.unoptimized`) if you ever add server routes,
  // ISR, or middleware and need a Node runtime on the host.
  output: "export",

  // /out is served as static files (Cloudflare Pages, GitHub Pages, Netlify
  // static, S3, etc.), so disable the next/image optimisation pipeline.
  images: { unoptimized: true },

  // Pretty URLs without server-side redirects: /about → /about/index.html
  trailingSlash: true,
};

export default nextConfig;
