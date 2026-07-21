import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/app/seo";

export const metadata: Metadata = createMetadata({
  title: "Retreat Confirmation",
  description: "Confirm your Blissfully Healing retreat registration.",
  path: "/retreats/confirmation",
  noIndex: true,
});

export default function RetreatConfirmationLayout({ children }: { children: ReactNode }) {
  return children;
}
