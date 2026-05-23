import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rephina Software Solutions — Enterprise quality at SME scale",
    template: "%s · Rephina Software Solutions",
  },
  description:
    "South African software development partner for SMEs, startups and freelancers. Custom software, AI integration, Microsoft Power Platform and web development — built in Rands, priced for South African business reality.",
  keywords: [
    "software development South Africa",
    "SME web development",
    "AI integration",
    "Microsoft Power Platform",
    "South African software company",
    "custom software for small business",
    "Rephina",
  ],
  authors: [{ name: "Rephina Software Solutions" }],
  openGraph: {
    title: "Rephina Software Solutions — Enterprise quality at SME scale",
    description:
      "South African software partner for SMEs and startups. Custom software, AI, Power Platform and web — priced for SA business reality.",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
