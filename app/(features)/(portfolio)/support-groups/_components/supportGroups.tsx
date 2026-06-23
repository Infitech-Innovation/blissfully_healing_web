"use client";

import { useState } from "react";
import Link from "next/link";
import { GroupCard } from "./GroupCard";
import { mockSupportGroups } from "@/app/(features)/(dashboard)/user/support-groups/data";

const categories = [
  "All",
  ...new Set(mockSupportGroups.map((g) => g.category)),
];

export default function SupportGroups() {
    const [activeCategory, setActiveCategory] = useState("All");

  // ─── Default Hub Explorer Index Template Layout View ────────────────────────
  return (
    <div className="bg-stone-50 text-stone-800 min-h-screen font-sans antialiased selection:bg-stone-200/60 pb-24">
      {/* Editorial Header Section */}
      <section className="relative overflow-hidden px-6 pt-24 pb-16 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.45]"
            style={{
              backgroundImage: `
              radial-gradient(ellipse 70% 50% at 50% -10%, rgba(200,168,130,0.18) 0%, transparent 70%),
              radial-gradient(ellipse 40% 40% at 15% 70%, rgba(168,196,184,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 40% 40% at 85% 80%, rgba(212,165,165,0.15) 0%, transparent 60%)
            `,
            }}
          />
        </div>

        <h1 className="font-serif mx-auto mb-6 max-w-4xl text-5xl font-light leading-tight tracking-tight text-stone-900 sm:text-6xl md:text-7xl">
          Shared processing for
          <br />
          human{" "}
          <em className="italic text-[#8B6A44] font-normal">restoration</em>.
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-base font-light leading-relaxed text-stone-500 sm:text-lg">
          Intimate, counselor-facilitated digital safe spaces designed to offer
          deep listening containment parameters for local communal processing
          paths.
        </p>

        {/* Global Dataset Metric Counter Widgets */}
        <div className="inline-flex flex-col sm:flex-row bg-white/70 backdrop-blur-md border border-stone-200/60 rounded-2xl sm:rounded-full overflow-hidden shadow-sm divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
          <div className="px-8 py-3.5 flex flex-col gap-0.5 min-w-[120px]">
            <span className="font-serif text-3xl font-normal text-stone-800">
              {mockSupportGroups.length}
            </span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-stone-400">
              Total Circles
            </span>
          </div>
          <div className="px-8 py-3.5 flex flex-col gap-0.5 min-w-[120px]">
            <span className="font-serif text-3xl font-normal text-stone-800">
              {mockSupportGroups.filter((g) => g.status === "filling").length}
            </span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-stone-400">
              Closing Fast
            </span>
          </div>
          <div className="px-8 py-3.5 flex flex-col gap-0.5 min-w-[120px]">
            <span className="font-serif text-3xl font-normal text-stone-800">
              100%
            </span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-stone-400">
              Free Entry
            </span>
          </div>
        </div>
      </section>

      {/* Filter and Control Parameters Strip */}
      <div className="max-w-6xl mx-auto px-6 pb-8 flex flex-col gap-5">
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-2 px-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`border px-4 py-1.5 rounded-full text-md font-bold font-medium tracking-wide transition-all shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#8B6A44]/10 border-[#8B6A44]/30 text-[#8B6A44]"
                  : "bg-white border-stone-200 text-stone-500 hover:border-stone-300 hover:text-stone-700"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

        <div className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockSupportGroups
            .filter((group) => activeCategory === "All" || group.category === activeCategory)
            .map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>

      {/* Secondary Dynamic Support Callout Section */}
      <footer className="max-w-6xl mx-auto px-6">
        <div className="rounded-md border border-[#C8A882]/25 bg-[#C8A882]/10 p-8 text-center shadow-sm md:p-12">
          <h2 className="font-serif mb-3 text-3xl font-light tracking-tight text-stone-800 md:text-4xl">
            Seeking custom containment alignments?
          </h2>
          <p className="mx-auto mb-6 max-w-md text-base font-light leading-relaxed text-stone-500 md:text-lg">
            Connect directly with our counseling dispatch operations desk to
            match private group schedules or assign specific practitioners.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[#8B6A44] px-7 py-2.5 text-base font-medium tracking-wider text-white shadow-sm transition-all hover:bg-[#725637]"
            >
              Speak with a Coordinator
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
