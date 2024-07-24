import type { Metadata, Viewport } from "next";
import { Ubuntu } from "next/font/google";
import { WEBSITE_ROOT } from '@/consts';
import "@/styles/globals.scss";

import Background from "@/components/Background";

const font = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const viewport: Viewport = {
  themeColor: "#23c6ff",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Luminol",
  description: "An RPG Maker XP-VX Ace rewrite, written in Rust with love 💕",
  openGraph: {
    type: "website",
    images: [{ url: `${WEBSITE_ROOT}/header.jpg` }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <link rel="alternate" type="application/rss+xml" href="/news/feed/rss" title="Luminol News (RSS)" />
        <link rel="alternate" type="application/atom+xml" href="/news/feed/atom" title="Luminol News (Atom)" />
        <link rel="alternate" type="application/feed+json" href="/news/feed/json" title="Luminol News (JSON)" />
      </head>
      <body className={font.className}>
        <Background className="bg" />
        {children}
      </body>
    </html>
  );
}
