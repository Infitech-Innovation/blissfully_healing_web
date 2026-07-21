import type { Metadata } from "next";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://blissfullyhealing.com"
).replace(/\/$/, "");

export const siteName = "Blissfully Healing";
const titleSuffix = ` | ${siteName}`;

function getBrandedTitle(title: string) {
  if (title === siteName || title.endsWith(titleSuffix)) {
    return title;
  }

  return `${title}${titleSuffix}`;
}

export function createMetadata({
  title,
  description,
  path = "",
  image = "/opengraph-image.png",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const brandedTitle = getBrandedTitle(title);

  return {
    title: {
      absolute: brandedTitle,
    },
    description,
    alternates: {
      canonical: path,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      title: brandedTitle,
      description,
      url: path,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: brandedTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [image],
    },
  };
}
