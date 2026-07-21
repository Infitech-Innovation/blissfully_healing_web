import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import ForgotPassword from "./forgot-password";

export const metadata: Metadata = createMetadata({
  title: "Forgot Password",
  description: "Request a Blissfully Healing password reset link.",
  path: "/forget-password",
  noIndex: true,
});

export default function Page() {
  return <ForgotPassword/>
}
