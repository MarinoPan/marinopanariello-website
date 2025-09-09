import "./global.css";
import type { Metadata } from "next";
import { satoshi } from "./fonts/satoshi";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { BackgroundLines } from "./components/BackgroundLines";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "Marino Panariello | Product Designer",
        template: "%s | Marino Panariello",
    },
    description:
        "I’m Marino Panariello, a product designer based in Italy. I create user-centered designs that solve real problems.",
    openGraph: {
        title: "Marino Panariello | Product Designer",
        description:
            "I’m Marino Panariello, a product designer based in Italy. I create user-centered designs that solve real problems.",
        url: baseUrl,
        siteName: "My Portfolio",
        locale: "en_US",
        type: "website",
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
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${satoshi.variable}`}>
            <body className={`antialised bg-background  ${satoshi.className}`}>
                <a href="#content" className="skip-link">Skip to content</a>
                <main id="content" className="flex-auto min-w-0 flex flex-col px-6">
                    <div className="fixed w-full opacity-5 h-screen bg-[url(/images/noise.jpg)] bg-repeat -z-1"></div>
                    <BackgroundLines />
                    <Navbar />
                    {children}
                    <Footer />
                    <Analytics />
                    <SpeedInsights />
                </main>
            </body>
        </html>
    );
}
