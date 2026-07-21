import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import PurchaseHist from "@/features/private/payments/PurchaseHist";

export const metadata: Metadata = createMetadata({
  title: "Purchases",
  description: "Review your private Blissfully Healing purchase history.",
  path: "/user/purchases",
  noIndex: true,
});

export default function PurchasePage() {
  return <PurchaseHist />;
}
