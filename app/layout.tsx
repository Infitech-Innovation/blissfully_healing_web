import type { Metadata } from "next";
import { Baskervville, Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./styles/globals.css";
import QueryProvider from "@/providers/query-provider";

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
  title: "Blissfully Healing",
  description:
    "A digital wellness platform focused on spiritual healing, mental health and personal reconnection",
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
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
