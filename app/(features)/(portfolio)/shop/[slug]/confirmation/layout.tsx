import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/app/seo";

export const metadata: Metadata = createMetadata({
  title: "E-Book Checkout Confirmation",
  description: "Confirm your Blissfully Healing e-book checkout.",
  path: "/shop/confirmation",
  noIndex: true,
});

export default function EbookConfirmationLayout({ children }: { children: ReactNode }) {
  return children;
}
