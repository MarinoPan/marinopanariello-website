import "./global.css";
import type { Metadata } from "next";
import { satoshi } from "./fonts/satoshi";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { BackgroundLines } from "./components/BackgroundLines";
import { Blob } from "./components/Blob";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Marino Panariello | Product Designer",
    template: "%s | Marino Panariello",
  },
  description:
    "I’m Marino Panariello, a product designer based in Italy. I create user-centered designs that solve real problems.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Product Designer",
    "Design Engineer",
    "Design Systems",
    "UX Engineering",
    "Marino Panariello",
  ],
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  authors: [{ name: "Marino Panariello" }],
  creator: "Marino Panariello",
  openGraph: {
    title: "Marino Panariello | Product Designer",
    description:
      "I’m Marino Panariello, a product designer based in Italy. I create user-centered designs that solve real problems.",
    url: baseUrl,
    siteName: "Marino Panariello Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og?title=Marino%20Panariello%20Portfolio",
        width: 1200,
        height: 630,
        alt: "Open Graph preview of Marino Panariello portfolio",
      },
    ],
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
  twitter: {
    card: "summary_large_image",
    title: "Marino Panariello | Product Designer",
    description:
      "I’m Marino Panariello, a product designer based in Italy. I create user-centered designs that solve real problems.",
    images: [
      {
        url: "/og?title=Marino%20Panariello%20Portfolio",
        alt: "Twitter card preview of Marino Panariello portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${satoshi.variable}`}>
      <Analytics />
      <body className={`antialised bg-background  ${satoshi.className}`}>
        <main id="content" className="flex-auto min-w-0 flex flex-col px-6">
          <div className="fixed w-full opacity-5 h-screen bg-[url(/images/noise.jpg)] bg-repeat -z-1 left-0"></div>
          <Blob />
          <BackgroundLines />
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
