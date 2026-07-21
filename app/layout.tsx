import type { Metadata } from "next";
import { Baskervville, Geist, Geist_Mono, Great_Vibes } from "next/font/google";
// import "./styles/globals.css";
import "@/styles/globals.css"
import QueryProvider from "@/lib/query-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteName, siteUrl } from "./seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const baskervville = Baskervville({
  variable: "--font-baskervville",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Blissfully Healing",
  },
  description:
    "Blissfully Healing is a digital wellness sanctuary for courses, retreats, support groups, healing videos, and guided resources for emotional and spiritual care.",
  keywords: [
    "Blissfully Healing",
    "wellness courses",
    "healing retreats",
    "support groups",
    "mental wellness",
    "spiritual healing",
    "somatic healing",
    "digital wellness",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  icons: {
    icon: "/icon1.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: siteName,
    description:
      "Courses, retreats, support groups, healing videos, and guided resources for emotional and spiritual care.",
    url: "/",
    siteName,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Courses, retreats, support groups, healing videos, and guided resources for emotional and spiritual care.",
    images: ["/opengraph-image.png"],
  },
  // robots: {
  //   index: true,
  //   nocache: false,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     "max-snippet": -1,
  //     "max-image-preview": "large",
  //     "max-video-preview": -1
  //   }
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} ${baskervville.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* {children} */}
        <QueryProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </QueryProvider>
      </body>
    </html>
  );
}
