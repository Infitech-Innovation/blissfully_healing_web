"use client";

import { useState } from "react";
import Link from "next/link";
import { mockSupportGroups } from "@/app/(features)/(dashboard)/user/support-groups/data";
import { StatusBadge } from "./statusBadge";
import { GroupCard } from "./GroupCard";

const categories = [
  "All",
  ...new Set(mockSupportGroups.map((g) => g.category)),
];

export default function SupportGroupsDashboard() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);

  const selectedGroup = mockSupportGroups.find((g) => g.id === selectedGroupId);
  if (selectedGroup) {
    return (
      <main className="bg-stone-50 text-stone-800 min-h-screen antialiased selection:bg-stone-200/60 pb-24">
        {/* Navigation Breadcrumb Line */}
        <div className="max-w-5xl mx-auto px-6 pt-12">
          <button
            onClick={() => setSelectedGroupId(null)}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-stone-400 hover:text-stone-700 transition-colors focus:outline-none cursor-pointer"
          >
            <span>←</span> Back to Active Circles
          </button>
        </div>

        {/* Main Columns Structural Grid */}
        <div className="max-w-5xl mx-auto px-6 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Left Columns Content Hub */}
          <section className="lg:col-span-2 space-y-6">
            {/* Header Identity Card Panel */}
            <header className="bg-white border border-stone-200/70 p-8 rounded-2xl shadow-sm">
              <span
                className="text-xs font-bold tracking-widest uppercase block mb-3"
                style={{ color: selectedGroup.secondaryColor }}
              >
                {selectedGroup.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-light text-stone-900 leading-tight mb-2">
                {selectedGroup.name}
              </h1>
              <p className="font-serif italic text-base text-stone-500 mb-6">
                {selectedGroup.tagline}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedGroup.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium tracking-wider uppercase text-stone-500 bg-stone-50 border border-stone-200/50 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Comprehensive Information Content Block */}
            <div className="bg-white border border-stone-200/70 p-8 rounded-2xl shadow-sm space-y-6">
              <h2 className="font-serif text-xl font-medium text-stone-900">
                About this Circle
              </h2>
              <p className="text-stone-600 font-light leading-relaxed whitespace-pre-line text-sm sm:text-base">
                {selectedGroup.description}
              </p>

              {/* Dynamic Curated Array Mapping from custom parameters */}
              <div className="border-t border-stone-100 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-bold tracking-wider uppercase text-stone-400 mb-3">
                    Upcoming Iterative Topics
                  </h3>
                  <ul className="space-y-2">
                    {selectedGroup.upcomingTopics.map((topic, index) => (
                      <li
                        key={index}
                        className="text-xs font-light text-stone-600 flex items-start gap-2"
                      >
                        <span className="text-[#8B6A44]">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-wider uppercase text-stone-400 mb-3">
                    Shared Circle Resources
                  </h3>
                  <ul className="space-y-2">
                    {selectedGroup.resources.map((res, index) => (
                      <li
                        key={index}
                        className="text-xs font-light text-stone-600 flex items-start gap-2"
                      >
                        <span>📂</span>
                        <span className="underline decoration-stone-200 hover:text-stone-900 transition-colors cursor-pointer">
                          {res}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Intentional Core Safe Space Values Footer */}
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xs font-bold tracking-wider uppercase text-stone-400 mb-4">
                  Intentional Group Guidelines
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-600 font-light">
                  <div className="flex items-start gap-2.5">
                    <span>⏱</span>
                    <p>
                      <span className="font-medium text-stone-800 block">
                        Optional Dialogues
                      </span>
                      Speak out only when your heart feels ready to deliver.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span>🔒</span>
                    <p>
                      <span className="font-medium text-stone-800 block">
                        Protected Confidentiality
                      </span>
                      What is processed in this screen module stays safe within.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Practitioner Bio Information Layout Row */}
            <div className="bg-white border border-stone-200/70 p-8 rounded-2xl shadow-sm">
              <h2 className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-6">
                Expert Practitioner
              </h2>
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div
                  className="w-14 h-14 rounded-full border flex items-center justify-center text-sm font-medium text-stone-700 tracking-wider shrink-0"
                  style={{
                    backgroundColor: `${selectedGroup.color}20`,
                    borderColor: `${selectedGroup.color}45`,
                  }}
                >
                  {selectedGroup.facilitator
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="space-y-2">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-stone-900">
                      {selectedGroup.facilitator}
                    </h3>
                    <p className="text-xs text-stone-400 font-medium">
                      {selectedGroup.facilitatorTitle}
                    </p>
                  </div>
                  <p className="text-xs text-stone-500 font-light leading-relaxed">
                    Qualified tracking specialist regulating safe emotional
                    containment workflows. Managing equity elements, balancing
                    individual pacing timelines, and provisioning specialized
                    therapeutic frameworks across every 90-minute gathering
                    block.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Right Sidebar Element Registry */}
          <aside className="space-y-6 lg:sticky lg:top-8">
            <div className="bg-white border border-stone-200/70 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-stone-100 bg-stone-50/50 flex justify-between items-center">
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-stone-400">
                    Seat Occupancy
                  </p>
                  <p className="text-xs text-stone-600 font-medium mt-0.5">
                    {selectedGroup.members} / {selectedGroup.maxMembers}{" "}
                    Registered
                  </p>
                </div>
                <StatusBadge status={selectedGroup.status} />
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs border-b border-stone-50 pb-2">
                    <span className="text-stone-400">Delivery System:</span>
                    <span className="font-medium text-stone-700">
                      {selectedGroup.format} ({selectedGroup.duration})
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-b border-stone-50 pb-2">
                    <span className="text-stone-400">Frequency Schedule:</span>
                    <span className="font-medium text-stone-700">
                      {selectedGroup.schedule}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-b border-stone-50 pb-2">
                    <span className="text-stone-400">Time Segment:</span>
                    <span className="font-medium text-stone-700">
                      {selectedGroup.time}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-b border-stone-50 pb-2">
                    <span className="text-stone-400">
                      Next Live Connection:
                    </span>
                    <span className="font-semibold text-stone-800">
                      {selectedGroup.nextSession}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-b border-stone-50 pb-2">
                    <span className="text-stone-400">My Cohort Progress:</span>
                    <span className="font-medium text-stone-700">
                      {selectedGroup.sessionsAttended} of{" "}
                      {selectedGroup.totalSessions} Sessions
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-stone-400">Audience Scope:</span>
                    <span className="font-medium text-stone-600 bg-stone-50 border border-stone-100 px-2.5 py-0.5 rounded-md text-[11px]">
                      {selectedGroup.level}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-stone-100 my-2" />

                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-stone-400">
                    Subscription Cost:
                  </span>
                  <span className="text-lg font-serif font-medium text-stone-800 capitalize">
                    {selectedGroup.price === "free"
                      ? "Complimentary"
                      : selectedGroup.price}
                  </span>
                </div>

                <Link
                  href={`/support-groups/${selectedGroup.id}/register`}
                  className="w-full block text-center py-3 rounded-xl text-xs font-medium tracking-wider text-white hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0 transition-all shadow-sm"
                  style={{ backgroundColor: selectedGroup.secondaryColor }}
                >
                  Secure Circle Seat →
                </Link>
              </div>
            </div>

            <p className="text-[11px] text-stone-400 text-center leading-relaxed px-4">
              Looking for alternative schedule templates?{" "}
              <Link href="/contact" className="underline hover:text-stone-600">
                Contact coordination service metrics
              </Link>
              .
            </p>
          </aside>
        </div>
      </main>
    );
  }

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

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-stone-900 leading-tight max-w-4xl mx-auto mb-6">
          Shared processing for
          <br />
          human{" "}
          <em className="italic text-[#8B6A44] font-normal">restoration</em>.
        </h1>
        <p className="max-w-xl mx-auto text-sm sm:text-base font-light leading-relaxed text-stone-500 mb-10">
          Intimate, counselor-facilitated digital safe spaces designed to offer
          deep listening containment parameters for local communal processing
          paths.
        </p>

        {/* Global Dataset Metric Counter Widgets */}
        <div className="inline-flex flex-col sm:flex-row bg-white/70 backdrop-blur-md border border-stone-200/60 rounded-2xl sm:rounded-full overflow-hidden shadow-sm divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
          <div className="px-8 py-3.5 flex flex-col gap-0.5 min-w-[120px]">
            <span className="font-serif text-2xl font-normal text-stone-800">
              {mockSupportGroups.length}
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-stone-400">
              Total Circles
            </span>
          </div>
          <div className="px-8 py-3.5 flex flex-col gap-0.5 min-w-[120px]">
            <span className="font-serif text-2xl font-normal text-stone-800">
              {mockSupportGroups.filter((g) => g.status === "filling").length}
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-stone-400">
              Closing Fast
            </span>
          </div>
          <div className="px-8 py-3.5 flex flex-col gap-0.5 min-w-[120px]">
            <span className="font-serif text-2xl font-normal text-stone-800">
              100%
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-stone-400">
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
              className={`border px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all shrink-0 cursor-pointer ${
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
          {mockSupportGroups.map((group) => (
            <GroupCard
              key={group.id}
              group={group}
              onSelect={(id) => setSelectedGroupId(id)}
            />
          ))}
        </div>

      {/* Secondary Dynamic Support Callout Section */}
      <footer className="max-w-6xl mx-auto px-6">
        <div className="bg-[#C8A882]/10 border border-[#C8A882]/25 rounded-3xl p-8 md:p-12 text-center shadow-sm">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-800 tracking-tight mb-3">
            Seeking custom containment alignments?
          </h2>
          <p className="text-xs text-stone-500 max-w-md mx-auto mb-6 font-light leading-relaxed">
            Connect directly with our counseling dispatch operations desk to
            match private group schedules or assign specific practitioners.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#8B6A44] hover:bg-[#725637] text-white px-7 py-2.5 rounded-xl text-xs font-medium tracking-wider transition-all shadow-sm"
            >
              Speak with a Coordinator
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
