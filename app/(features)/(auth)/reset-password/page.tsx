import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import PageUnderDevelopment from "@/components/common/comming-soon";

export const metadata: Metadata = createMetadata({
  title: "Reset Password",
  description: "Set a new password for your Blissfully Healing account.",
  path: "/reset-password",
  noIndex: true,
});

export default function ForgotPassword() {
  return <PageUnderDevelopment title="Reset Password" />;
}
