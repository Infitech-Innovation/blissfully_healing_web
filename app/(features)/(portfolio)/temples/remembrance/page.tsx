import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import {
  ArrowRight,
  BookOpen,
  Crown,
  Feather,
  Landmark,
  ScrollText,
  Shield,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: "Temple of Remembrance",
  description:
    "Enter the Temple of Remembrance for courses rooted in sovereign lineage, ancestry, and spiritual memory.",
  path: "/temples/remembrance",
});

const templePractices = [
  {
    title: "Ancestral Listening",
    copy: "Trace the prayers, names, stories, and inherited wisdom that still live in the body.",
    icon: ScrollText,
  },
  {
    title: "Sovereign Reclamation",
    copy: "Move from inherited survival patterns into choice, dignity, and grounded self-trust.",
    icon: Crown,
  },
  {
    title: "Spiritual Memory",
    copy: "Build rituals that help you remember belonging, guidance, and inner authority.",
    icon: Sparkles,
  },
];

const courseDetails = [
  "Lineage journaling prompts",
  "Guided remembrance rituals",
  "Somatic grounding practices",
  "Reflection-led integration",
];

export default function RemembrancePage() {
  return (
    <section className="bg-[#fffaf6] text-[#2f251f]">
      <div className="border-b border-[#eadfd4] bg-[#2a0f43]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_0.88fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#d6a83f]/45 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#f3d27a]">
              <Landmark className="h-4 w-4" />
              Temple of Remembrance
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#fff8e8] sm:text-5xl lg:text-6xl">
              Sovereign lineage, ancestry, and spiritual memory.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#ead7ff] sm:text-lg">
              A purple and gold course temple for learning practices that honor
              where you come from, restore inner authority, and make inherited
              wisdom usable in daily life.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/courses"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-[#d6a83f] px-5 text-sm font-semibold text-[#241039] transition hover:bg-[#f0c85d]"
              >
                Explore Courses
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/homepage#temples"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-[#f3d27a]/55 px-5 text-sm font-semibold text-[#fff8e8] transition hover:bg-white/10"
              >
                View Temples
              </Link>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-[8px] border border-[#d6a83f]/35 bg-[#170824] shadow-[0_30px_80px_rgba(0,0,0,0.24)] sm:min-h-[430px]">
            <Image
              src="/images/story-img1.webp"
              alt="Temple of Remembrance ancestral healing visual"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,8,36,0.2),rgba(23,8,36,0.82))]" />
            <div className="absolute inset-x-8 top-8 h-40 rounded-t-full border border-[#f3d27a]/50 sm:inset-x-14 sm:h-56" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#d6a83f] text-[#241039]">
                <Shield className="h-7 w-7" />
              </div>
              <p className="max-w-md font-serif text-3xl leading-tight text-[#fff8e8]">
                Remember the crown your spirit carried before the world named
                you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7b2cbf]">
              Course Temple
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#2f251f] sm:text-4xl">
              Courses for remembering with reverence.
            </h2>
            <p className="mt-4 leading-7 text-[#6f5c4f]">
              This page frames the course library through the Remembrance
              temple: reflective, ceremonial, body-aware, and rooted in purple
              sovereignty with gold accents of honor.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {templePractices.map((practice) => (
              <article
                key={practice.title}
                className="rounded-[8px] border border-[#eadfd4] bg-white p-5 shadow-[0_18px_45px_rgba(63,52,44,0.08)]"
              >
                <practice.icon className="h-6 w-6 text-[#7b2cbf]" />
                <h3 className="mt-4 text-lg font-semibold text-[#2f251f]">
                  {practice.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#6f5c4f]">
                  {practice.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="border-y border-[#eadfd4] bg-[#f8f0e8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="rounded-[8px] bg-[#2a0f43] p-6 text-[#fff8e8] sm:p-8">
            <div className="mb-5 inline-flex items-center gap-2 text-[#f3d27a]">
              <Feather className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                What fits here
              </span>
            </div>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Lessons that feel ceremonial, practical, and personal.
            </h2>
            <p className="mt-4 leading-7 text-[#ead7ff]">
              The Remembrance temple is best for courses on ancestry, grief,
              inherited patterns, identity, ritual, spiritual connection, and
              restoring a sense of inner royalty.
            </p>
          </div>

          <div className="grid content-center gap-3 sm:grid-cols-2">
            {courseDetails.map((detail) => (
              <div
                key={detail}
                className="rounded-[8px] border border-[#dec77e] bg-white px-5 py-4 text-sm font-semibold text-[#2f251f]"
              >
                {detail}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 py-12 text-center sm:px-6 lg:px-8">
        <p className="mx-auto max-w-2xl text-2xl font-semibold leading-tight text-[#2f251f] sm:text-3xl">
          Begin with the course that calls your memory forward.
        </p>
        <Link
          href="/courses"
          className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-[#8f6249] px-5 text-sm font-semibold text-white transition hover:bg-[#744d39]"
        >
          Enter Courses
          <BookOpen className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
