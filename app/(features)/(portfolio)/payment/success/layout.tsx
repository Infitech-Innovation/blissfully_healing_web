import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/app/seo";

export const metadata: Metadata = createMetadata({
  title: "Payment Status",
  description: "Review the status of your Blissfully Healing payment.",
  path: "/payment/success",
  noIndex: true,
});

export default function PaymentSuccessLayout({ children }: { children: ReactNode }) {
  return children;
}
