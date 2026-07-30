"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { ChevronDown, LogIn, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useState } from "react";
import UserMenu from "../_topbar/user_menu";

// const templeLinks = [
//   { label: "Stillness", href: "/temples/stillness", color: "bg-[#111111]" },
//   { label: "Purification", href: "/temples/purification", color: "bg-[#8a6a4d]" },
//   { label: "Return", href: "/temples/return", color: "bg-[#d4af37]" },
//   { label: "Voyage", href: "/temples/voyage", color: "bg-[#047857]" },
//   { label: "Remembrance", href: "/temples/remembrance", color: "bg-[#6d28d9]" },
//   { label: "Belonging", href: "/temples/belonging", color: "bg-[#1d4ed8]" },
// ];

const templeLinks = [
  { label: "Stillness", href: "/blogs", color: "bg-[#111111]" },
  { label: "Purification", href: "/temples/purification", color: "bg-[#8a6a4d]" },
  { label: "Return", href: "/temples/return", color: "bg-[#d4af37]" },
  { label: "Voyage", href: "/retreats", color: "bg-[#047857]" },
  { label: "Remembrance", href: "/courses", color: "bg-[#6d28d9]" },
  { label: "Belonging", href: "/support-groups", color: "bg-[#1d4ed8]" },
];

export function Navbar() {
  const user = useAuthStore((state) => state.user);
  const isAuth = !!user;
  const [open, setOpen] = useState(false);
  const [templeMenuOpen, setTempleMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href.split("#")[0] ||
    (href !== "/" && pathname.startsWith(`${href.split("#")[0]}/`));

  const templesActive = pathname.startsWith("/temples");

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfd4] bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <Link
          href="/homepage#top"
          className="flex min-w-0 items-center gap-3 text-xl font-bold text-[#2f251f] transition hover:text-[#8f6249] sm:text-2xl"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/bh_logo.webp"
            alt="BlissFully Healing"
            width={60}
            height={60}
            className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
          />

          <div className="min-w-0 leading-tight">
            <p className="truncate">Blissfully Healing</p>
            <p className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a6b4f] sm:block">
              Healing space
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-[26px] text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[#6f5c4f] lg:flex">
          <Link
            href="/homepage#journey"
            aria-current={isActive("/homepage#journey") ? "page" : undefined}
            className={`transition hover:text-[#8f6249] ${isActive("/homepage#journey") ? "text-[#8f6249]" : ""}`}
          >
            The Journey
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setTempleMenuOpen(true)}
            onMouseLeave={() => setTempleMenuOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={templeMenuOpen}
              aria-current={templesActive ? "page" : undefined}
              className={`inline-flex items-center gap-1.5 transition hover:text-[#8f6249] ${templesActive ? "text-[#8f6249]" : ""}`}
              onClick={() => setTempleMenuOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.parentElement?.contains(event.relatedTarget)) {
                  setTempleMenuOpen(false);
                }
              }}
            >
              Temples
              <ChevronDown
                className={`h-3.5 w-3.5 transition ${templeMenuOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`absolute right-1/2 top-full z-50 mt-3 w-[430px] translate-x-1/2 rounded-[26px] border border-[#dac69c]/45 bg-[#fffaf6]/95 p-3 shadow-[0_24px_70px_rgba(42,33,28,0.14)] backdrop-blur-xl transition ${
                templeMenuOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-2 opacity-0"
              }`}
              role="menu"
            >
              <div className="pointer-events-none absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-[#dac69c]/45 bg-[#fffaf6]" />
              <div className="grid grid-cols-2 gap-2">
                {templeLinks.map((temple) => (
                  <Link
                    key={temple.href}
                    href={temple.href}
                    role="menuitem"
                    onClick={() => setTempleMenuOpen(false)}
                    className="group/item inline-flex min-h-11 items-center justify-between gap-3 rounded-full border border-[#dac69c]/55 bg-transparent px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#5b473b] transition hover:border-[#8f6249] hover:bg-[#f8f0e8] hover:text-[#2f251f]"
                  >
                    <span>Temple of {temple.label}</span>
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[#dac69c]/55 text-[#b99a60] transition group-hover/item:border-[#8f6249] group-hover/item:text-[#8f6249]">
                      <ChevronDown className="h-3.5 w-3.5 -rotate-90" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/about"
            aria-current={isActive("/about") ? "page" : undefined}
            className={`transition hover:text-[#8f6249] ${isActive("/about") ? "text-[#8f6249]" : ""}`}
          >
            About
          </Link>

          <Link
            href="/shop"
            aria-current={isActive("/shop") ? "page" : undefined}
            className={`transition hover:text-[#8f6249] ${isActive("/shop") ? "text-[#8f6249]" : ""}`}
          >
            Shop
          </Link>

          {!isAuth ? (
            <div>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-full px-[18px] py-[11px] normal-case tracking-normal text-[#6f5c4f] transition hover:bg-[#f8f0e8] hover:text-[#2f251f]"
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </Link>

              <Link
                href="/register"
                className="rounded-full border border-[#b99a60]/42 px-[18px] py-[11px] transition hover:border-[#8f6249] hover:bg-[#f8f0e8] hover:text-[#2f251f]"
              >
                Enter the Sanctuary
              </Link>
            </div>
          ) : null}



          {isAuth ? (
            <Suspense
              fallback={
                <div className="h-8 w-8 animate-pulse rounded-full bg-[#eadfd4]" />
              }
            >
              <UserMenu />
            </Suspense>
          ) : null}
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
          <div className="mx-auto grid max-w-7xl gap-1 text-sm font-semibold uppercase tracking-[0.14em] text-[#6f5c4f]">
            <Link
              href="/homepage"
              aria-current={isActive("/homepage") ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`rounded-md px-3 py-2 transition hover:bg-[#f8f0e8] hover:text-[#8f6249] ${isActive("/homepage#journey") ? "bg-[#f8f0e8] text-[#8f6249]" : ""}`}
            >
              The Journey
            </Link>

            <details className="group rounded-[18px] px-3 py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-[16px] marker:hidden">
                Temples
                <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
              </summary>
              <div className="mt-3 grid gap-2 rounded-[24px] border border-[#dac69c]/45 bg-[#fffaf6] p-3 normal-case tracking-normal shadow-[0_18px_48px_rgba(42,33,28,0.08)]">
                {templeLinks.map((temple) => (
                  <Link
                    key={temple.href}
                    href={temple.href}
                    onClick={() => setOpen(false)}
                    className="inline-flex min-h-11 items-center justify-between gap-3 rounded-full border border-[#dac69c]/55 bg-transparent px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#5b473b] transition hover:border-[#8f6249] hover:bg-[#f8f0e8] hover:text-[#2f251f]"
                  >
                    <span>Temple of {temple.label}</span>
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[#dac69c]/55 text-[#b99a60]">
                      <ChevronDown className="h-3.5 w-3.5 -rotate-90" />
                    </span>
                  </Link>
                ))}
              </div>
            </details>

            <Link
              href="/about"
              aria-current={isActive("/about") ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`rounded-md px-3 py-2 transition hover:bg-[#f8f0e8] hover:text-[#8f6249] ${isActive("/about") ? "bg-[#f8f0e8] text-[#8f6249]" : ""}`}
            >
              About
            </Link>

            <Link
              href="/shop"
              aria-current={isActive("/shop") ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`rounded-md px-3 py-2 transition hover:bg-[#f8f0e8] hover:text-[#8f6249] ${isActive("/shop") ? "bg-[#f8f0e8] text-[#8f6249]" : ""}`}
            >
              Shop
            </Link>

            {/* <Link
              href="/about"
              aria-current={isActive("/homepage#sanctuary") ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`rounded-md px-3 py-2 transition hover:bg-[#f8f0e8] hover:text-[#8f6249] ${isActive("/homepage#sanctuary") ? "bg-[#f8f0e8] text-[#8f6249]" : ""}`}
            >
              About
            </Link> */}

            <div className="mt-2 grid gap-2 border-t border-[#eadfd4] pt-4">
              {isAuth ? (
                <Suspense
                  fallback={
                    <div className="h-8 w-8 animate-pulse rounded-full bg-[#eadfd4]" />
                  }
                >
                  <UserMenu />
                </Suspense>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-[18px] py-[11px] text-sm font-bold normal-case tracking-normal text-[#6f5c4f] transition hover:bg-[#f8f0e8] hover:text-[#2f251f]"
                >
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Link>
              )}

              {!isAuth ? (
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-[#b99a60]/42 px-[18px] py-[11px] text-center text-xs font-bold uppercase tracking-[0.16em] transition hover:border-[#8f6249] hover:bg-[#f8f0e8] hover:text-[#2f251f]"
                >
                  Enter the Sanctuary
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
