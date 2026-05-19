import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "./form/register-form";

export default function RegisterPage() {
  return (
    <main
      className="flex min-h-[100dvh] items-center justify-center px-4 py-8 sm:px-6"
      // style={{
      //   backgroundImage: "url('/images/bg.webp')",
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat',
      // }}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          {/* Left: Logo + Branding */}
          <div className="flex w-full flex-col items-center justify-center md:sticky md:top-8 md:w-2/5 md:pt-8">
            <div className="w-32 sm:w-40 md:w-56">
              <Image
                src="/images/bh_logo.webp"
                width={800}
                height={560}
                className="h-auto w-full"
                alt="Blissfully Healing"
                loading="eager"
                priority
              />
            </div>
            <h1 className="mt-4 font-[family-name:var(--font-great-vibes)] text-4xl text-[#d4af37]">
              Blissfully Healing
            </h1>
            <p className="mt-4 hidden text-center text-lg text-black-500 md:block">
              Get started with Blissfully Healing.
            </p>
          </div>

          {/* Right: Register Form */}
          <div className="w-full md:w-3/5">
            <Suspense>
              <RegisterForm />
            </Suspense>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-black underline-offset-4 hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
