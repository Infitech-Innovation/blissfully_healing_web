"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/homepage" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Retreats", href: "/retreats" },
  { label: "Blog", href: "/blogs" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfd4] bg-[#fffaf6]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/homepage" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center">
            <Image
              src="/images/bh_logo.webp"
              alt="BlissFully Healing"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>

          <div className="leading-tight">
            <p className="text-lg font-semibold tracking-wide text-[#3f342c]">
              Blissfully Healing
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-[#6f5c4f] transition hover:text-[#9a6b4f]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant="ghost"
            className="text-[#6f5c4f] hover:bg-[#f3e8df] hover:text-[#3f342c]"
          >
            <Link href="/login">Sign In</Link>
          </Button>

          <Button
            asChild
            className="rounded-full bg-[#9a6b4f] px-6 text-white hover:bg-[#80563f]"
          >
            <Link href="/register">Start Healing</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#6f5c4f] hover:bg-[#f3e8df] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#eadfd4] bg-[#fffaf6] px-4 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-[#6f5c4f] hover:bg-[#f3e8df] hover:text-[#3f342c]"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 grid gap-3 border-t border-[#eadfd4] pt-4">
              <Button
                asChild
                variant="ghost"
                className="justify-center text-lg text-[#6f5c4f] hover:bg-[#f3e8df]"
              >
                <Link href="/auth/login" onClick={() => setOpen(false)}>
                  Sign In
                </Link>
              </Button>

              <Button
                asChild
                className="rounded-full bg-[#9a6b4f] text-white text-lg hover:bg-[#80563f]"
              >
                <Link href="/courses" onClick={() => setOpen(false)}>
                  Start Healing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
