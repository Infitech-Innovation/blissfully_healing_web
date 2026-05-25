"use client";

import Link from "next/link";
import { LogIn, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
    <header className="sticky top-0 z-50 bg-[#fffaf6]/80 px-3 py-3 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between rounded-[28px] border border-[#eadfd4] bg-white/90 px-3 shadow-[0_18px_50px_rgba(63,52,44,0.10)] sm:px-4 lg:h-[78px] lg:px-5">
        <Link
          href="/homepage"
          className="flex min-w-0 items-center gap-3 rounded-2xl px-2 py-2 transition hover:bg-[#f7efe7]"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#e6d7c8] bg-[#fffaf6] shadow-sm lg:h-12 lg:w-12">
            <Image
              src="/images/bh_logo.webp"
              alt="BlissFully Healing"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>

          <div className="min-w-0 leading-tight">
            <p className="truncate text-base font-semibold text-[#2f251f] sm:text-lg">
              Blissfully Healing
            </p>
            <p className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a6b4f] sm:block">
              Healing space
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 rounded-2xl border border-[#eadfd4] bg-[#fffaf6] p-1.5 shadow-inner lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "bg-[#2f251f] text-[#fffaf6] shadow-[0_8px_18px_rgba(47,37,31,0.18)]"
                    : "text-[#6f5c4f] hover:bg-white hover:text-[#2f251f]"
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
            className="h-11 rounded-2xl px-4 text-[#6f5c4f] hover:bg-[#f7efe7] hover:text-[#2f251f]"
          >
            <Link href="/login">
              <LogIn className="h-4 w-4" />
              Sign In
            </Link>
          </Button>

          <Button
            asChild
            className="h-11 rounded-2xl bg-[#8f6249] px-5 text-white shadow-[0_12px_26px_rgba(143,98,73,0.26)] hover:bg-[#744d39]"
          >
            <Link href="/register">
              <Sparkles className="h-4 w-4" />
              Start Healing
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#eadfd4] bg-[#fffaf6] text-[#6f5c4f] shadow-sm hover:bg-[#f3e8df] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-[26px] border border-[#eadfd4] bg-white/95 p-3 shadow-[0_20px_50px_rgba(63,52,44,0.12)] lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-base font-semibold transition ${
                    active
                      ? "bg-[#2f251f] text-[#fffaf6]"
                      : "text-[#6f5c4f] hover:bg-[#f7efe7] hover:text-[#2f251f]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-3 grid gap-3 border-t border-[#eadfd4] pt-4">
              <Button
                asChild
                variant="ghost"
                className="h-12 justify-center rounded-2xl text-base text-[#6f5c4f] hover:bg-[#f7efe7]"
              >
                <Link href="/login" onClick={() => setOpen(false)}>
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Link>
              </Button>

              <Button
                asChild
                className="h-12 rounded-2xl bg-[#8f6249] text-base text-white hover:bg-[#744d39]"
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
