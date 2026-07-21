import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "./form/register-form";
import { createMetadata } from "@/app/seo";

export const metadata: Metadata = createMetadata({
  title: "Create Account",
  description: "Create a private Blissfully Healing account to access your wellness resources.",
  path: "/register",
  noIndex: true,
});

export default function RegisterPage() {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-[#fffaf6] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          
          {/* Left Block: Identity Context */}
          <div className="flex w-full flex-col items-center justify-center text-center md:sticky md:top-12 md:w-2/5 md:pt-6">
            <div className="w-32 sm:w-40 md:w-48">
              <Image
                src="/images/bh_logo.webp"
                width={400}
                height={280}
                className="h-auto w-full object-contain"
                alt="Blissfully Healing Branding"
                priority
              />
            </div>
            <h1 className="mt-3 font-[family-name:var(--font-great-vibes)] text-4xl text-[#b28b67] tracking-wide">
              Blissfully Healing
            </h1>
            <p className="mt-3 hidden font-serif text-sm text-[#7a6658] md:block max-w-[240px]">
              Begin your supportive journey into emotional grounding and structured self-care.
            </p>
          </div>

          {/* Right Block: Interactive Form Interface */}
          <div className="w-full max-w-[480px] md:max-w-none md:w-3/5">
            <Suspense
              fallback={
                <div className="w-full rounded-lg border border-[#eadfd4] bg-white p-6 space-y-4 shadow-sm animate-pulse">
                  <div className="h-6 w-1/4 bg-[#f8f0e8] rounded-[4px]" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-11 bg-[#f8f0e8] rounded-[4px]" />
                    <div className="h-11 bg-[#f8f0e8] rounded-[4px]" />
                  </div>
                  <div className="h-11 bg-[#f8f0e8] rounded-[4px]" />
                  <div className="h-11 bg-[#eadfd4] rounded-[4px] mt-2" />
                </div>
              }
            >
              <RegisterForm />
            </Suspense>

            {/* Account Trailing Gateway */}
            <p className="mt-6 text-center text-xs sm:text-sm text-[#7a6658]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-[#3f342c] underline decoration-[#eadfd4] underline-offset-4 transition hover:text-[#8f6249] hover:decoration-[#8f6249]"
              >
                Log in instead
              </Link>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
