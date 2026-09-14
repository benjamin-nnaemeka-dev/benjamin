import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: `${profile.name} | Software Engineer`,
  description: profile.subTagline,
  keywords: [
    "Benjamin Nnaemeka",
    "Apexly",
    "Idyntic",
    "Cliqpay",
    "Software Engineer",
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "Next.js",
    "TypeScript",
  ],
  authors: [
    { name: profile.name, url: "https://benjamin-nnaemeka.dev" },
  ],
  creator: profile.name,
  metadataBase: new URL("https://benjamin-nnaemeka.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://benjamin-nnaemeka.dev",
    title: `${profile.name} | Software Engineer`,
    description: profile.subTagline,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Software Engineer`,
    description: profile.subTagline,
  },
  icons: {
    icon: profile.avatar,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-[#0a192f]">
      <head>
        <link
          rel="preload"
          href="/fonts/Calibre-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Calibre-Semibold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SFMono-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[#0a192f] text-slate antialiased">{children}</body>
    </html>
  );
}
