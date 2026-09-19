import { profile } from "@/lib/data/profile";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0a192f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Software Engineer`,
    template: `%s | ${profile.name}`,
  },
  description: profile.subTagline,
  keywords: [
    "Benjamin Nnaemeka",
    "Software Engineer",
    "Full Stack Developer",
    "benjamin-nnaemeka.dev",
    "benjamin",
    "nnaemeka",
    "Apexly",
    "Idyntic",
    "Cliqpay",
    "Software Engineer Nigeria",
    "Android Developer",
    "Kotlin Developer",
    "Jetpack Compose",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Voice AI Engineer",
  ],
  authors: [{ name: profile.name, url: "https://benjamin-nnaemeka.dev" }],
  creator: profile.name,
  metadataBase: new URL("https://benjamin-nnaemeka.dev"),
  alternates: {
    canonical: "https://benjamin-nnaemeka.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
  verification: {
    google: "google88828ce61c693110",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: "https://benjamin-nnaemeka.dev",
  image: "https://benjamin-nnaemeka.dev/profile/profile-photo.png",
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "APEXLY",
    url: "https://getapexly.com",
  },
  sameAs: profile.socials
    .filter((s) => !s.url.startsWith("mailto:"))
    .map((s) => s.url),
  description: profile.subTagline,
  knowsAbout: profile.skills,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0a192f] text-slate antialiased">{children}</body>
    </html>
  );
}
