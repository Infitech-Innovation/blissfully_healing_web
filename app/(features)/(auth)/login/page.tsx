import type { Metadata } from "next";
import { Suspense } from "react";
import LoginForm from "./form/login-form";
import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/app/seo";

export const metadata: Metadata = createMetadata({
  title: "Login",
  description: "Sign in to your private Blissfully Healing account.",
  path: "/login",
  noIndex: true,
});

export default function LoginPage() {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-[#fffaf6] px-4 py-10 sm:px-6">
      <div className="w-full max-w-[400px] space-y-5">
        
        {/* Branding Vault Area */}
        <div className="flex w-full items-center justify-center py-2 sm:py-4">
          <div className="w-32 sm:w-36">
            <Image
              src="/images/bh_logo.webp"
              width={400}
              height={280}
              className="h-auto w-full object-contain"
              alt="Blissfully Healing Identity"
              priority // Replaces loading="eager" for better Next.js LCP optimization flags
            />
          </div>
        </div>

        {/* Dynamic Context Form Boundary */}
        <Suspense 
          fallback={
            <div className="w-full rounded-lg border border-[#eadfd4] bg-white p-6 space-y-4 shadow-sm animate-pulse">
              <div className="h-9 w-1/3 bg-[#f8f0e8] rounded-[4px]" />
              <div className="space-y-2">
                <div className="h-11 bg-[#f8f0e8] rounded-[4px]" />
                <div className="h-11 bg-[#f8f0e8] rounded-[4px]" />
              </div>
              <div className="h-11 bg-[#eadfd4] rounded-[4px] mt-2" />
            </div>
          }
        >
          <LoginForm />
        </Suspense>

        {/* Navigation Trailing Parameter */}
        <p className="text-center text-xs sm:text-sm text-[#7a6658]">
          Don&apos;t have a security profile?{" "}
          <Link
            href="/register"
            className="font-bold text-[#3f342c] underline decoration-[#eadfd4] underline-offset-4 transition hover:text-[#8f6249] hover:decoration-[#8f6249]"
          >
            Create one here
          </Link>
        </p>

      </div>
    </main>
  );
}
