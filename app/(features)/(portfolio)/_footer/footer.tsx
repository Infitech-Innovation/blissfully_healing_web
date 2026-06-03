import {
  ArrowUpRight,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const sanctuaryLinks = [
  { label: "Home", href: "/homepage" },
  { label: "About", href: "/about" },
  { label: "Retreats", href: "/retreats" },
  { label: "Courses", href: "/courses" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const healingLinks = [
  { label: "Temple of Stillness", href: "/temples/stillness" },
  { label: "Temple of Voyage", href: "/temples/voyage" },
  { label: "Temple of Return", href: "/temples/return" },
  { label: "Temple of Remembrance", href: "/temples/remembrance" },
  { label: "Temple of Purification", href: "/temples/purification" },
  { label: "Support", href: "/support" },
];

const contactItems = [
  { icon: Mail, label: "hello@blissfullyhealing.com" },
  { icon: Phone, label: "+254 700 000 000" },
  { icon: MapPin, label: "Nairobi, Kenya" },
];

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#271d19] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8b06a] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,176,106,0.18),transparent_34%),linear-gradient(135deg,rgba(143,98,73,0.22),transparent_42%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr]">
          <section>
            <Link
              href="/homepage"
              className="inline-flex items-center gap-4 transition hover:opacity-90"
            >
              <Image
                src="/images/bh_logo.webp"
                alt="Blissfully Healing"
                width={128}
                height={128}
                className="h-20 w-20 shrink-0 object-contain"
              />
              <span>
                <span className="block font-serif text-3xl font-semibold leading-none text-white">
                  Blissfully Healing
                </span>
                <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#d8b06a]">
                  Royal healing sanctuary
                </span>
              </span>
            </Link>

            <p className="mt-7 max-w-md text-base leading-7 text-white/68">
              A sacred digital home for emotional restoration, spiritual
              reconnection, and soft transformation through retreats, courses,
              temples, and guided care.
            </p>
          </section>

          <nav aria-label="Sanctuary links">
            <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#d8b06a]">
              Sanctuary
            </h2>
            <div className="grid gap-3">
              {sanctuaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Healing pathways">
            <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#d8b06a]">
              Pathways
            </h2>
            <div className="grid gap-3">
              {healingLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </nav>

          <section>
            <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#d8b06a]">
              Begin Gently
            </h2>
            <div className="grid gap-4">
              {contactItems.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 text-sm text-white/70"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-[#d8b06a]/25 bg-white/[0.05]">
                    <Icon size={16} className="text-[#d8b06a]" />
                  </span>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#d8b06a] px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#271d19] shadow-[0_18px_45px_rgba(0,0,0,0.2)] transition hover:bg-[#f0ca7c]"
            >
              Book A Call
              <HeartHandshake size={16} />
            </Link>
          </section>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col justify-between gap-4 text-xs text-white/48 md:flex-row md:items-center">
            <p>Copyright {year} Blissfully Healing. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/security" className="transition hover:text-white/80">
                Security
              </Link>
              <Link href="/help" className="transition hover:text-white/80">
                Help Center
              </Link>
              <Link href="/login" className="transition hover:text-white/80">
                Member Login
              </Link>
              <span>By Infitech Innovations</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
