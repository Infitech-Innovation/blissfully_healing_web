"use client";

import { Button } from "@/components/ui/button";
import { LogIn, Menu, Sparkles, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/homepage" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Retreats", href: "/retreats" },
  { label: "Blog", href: "/blogs" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || (href !== "/homepage" && pathname.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfd4] bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <Link
          href="/homepage"
          className="flex min-w-0 items-center gap-3 text-xl font-bold text-[#2f251f] transition hover:text-[#8f6249] sm:text-2xl"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/bh_logo.webp"
            alt="BlissFully Healing"
            width={60}
            height={60}
            className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
            priority
          />

          <div className="min-w-0 leading-tight">
            <p className="truncate">Blissfully Healing</p>
            <p className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a6b4f] sm:block">
              Healing space
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 text-base font-medium text-[#6f5c4f] lg:flex xl:gap-9">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`transition hover:text-[#8f6249] ${
                  active ? "text-[#8f6249]" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant="ghost"
            className="h-12 rounded-md px-5 text-base font-semibold text-[#6f5c4f] hover:bg-[#f8f0e8] hover:text-[#2f251f]"
          >
            <Link href="/login">
              <LogIn className="h-4 w-4" />
              Sign In
            </Link>
          </Button>

          <Button
            asChild
            className="h-12 rounded-md bg-[#8f6249] px-5 text-base font-semibold text-white transition hover:bg-[#744d39] lg:px-6"
          >
            <Link href="/register">
              <Sparkles className="h-4 w-4" />
              Start Healing
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-[#eadfd4] text-[#2f251f] transition hover:bg-[#f8f0e8] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#eadfd4] bg-white px-4 py-4 shadow-lg shadow-[#2f251f]/5 sm:px-6 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 text-sm font-medium text-[#6f5c4f]">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 transition hover:bg-[#f8f0e8] hover:text-[#8f6249] ${
                    active ? "bg-[#f8f0e8] text-[#8f6249]" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-2 grid gap-2 border-t border-[#eadfd4] pt-4">
              <Button
                asChild
                variant="ghost"
                className="h-12 justify-center rounded-md text-base font-semibold text-[#6f5c4f] hover:bg-[#f8f0e8]"
              >
                <Link href="/login" onClick={() => setOpen(false)}>
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Link>
              </Button>

              <Button
                asChild
                className="h-12 rounded-md bg-[#8f6249] text-base font-semibold text-white hover:bg-[#744d39]"
              >
                <Link href="/register" onClick={() => setOpen(false)}>
                  <Sparkles className="h-4 w-4" />
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
