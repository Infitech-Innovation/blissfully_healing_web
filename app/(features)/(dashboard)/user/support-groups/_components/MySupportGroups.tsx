"use client";

import { useState } from "react";
import { mockSupportGroups, } from "../data";
import Link from "next/link";
import { getTimeUntil } from "../utils";
import { GroupCard } from "./GroupCard";
import { mockUser } from "../../../dashboard/definations";

export default function MySupportGroupsDashboard() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const toggle = (id: number) => setExpandedId(expandedId === id ? null : id);

  return (
    <div className="space-y-10 px-4 py-8 sm:px-6 lg:px-8 bg-[#fffaf6] min-h-screen text-[#2f251f]">
      {/* Header Block */}
      <header className="space-y-4">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6249]">
            Somatic Sanctuary
          </p>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-[#2f251f] sm:text-5xl">
            Your healing{" "}
            <em className="font-serif text-[#8f6249] italic">circles</em>,
            &nbsp;{mockUser.name}.
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-[#6f5c4f]">
            Every session is an act of devotion to yourself.
          </p>
        </div>
      </header>

      {/* Stats Deck Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Stat 1 */}
        <div className="rounded-[8px] border border-[#eadfd4] bg-white p-5 shadow-[0_12px_30px_rgba(63,52,44,0.04)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#6f5c4f]">
            Circles Joined
          </p>
          <p className="mt-3 font-serif text-3xl font-semibold text-[#2f251f]">
            {mockSupportGroups.length}
          </p>
          <p className="mt-1 text-xs text-[#b39c8c]">active memberships</p>
        </div>

        {/* Stat 2 */}
        <div className="rounded-[8px] border border-[#eadfd4] bg-white p-5 shadow-[0_12px_30px_rgba(63,52,44,0.04)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#6f5c4f]">
            Sessions Attended
          </p>
          <p className="mt-3 font-serif text-3xl font-semibold text-[#2f251f]">
            {mockSupportGroups.reduce((a, g) => a + g.sessionsAttended, 0)}
          </p>
          <p className="mt-1 text-xs text-[#b39c8c]">this journey</p>
        </div>

        {/* Stat 3 */}
        <div className="rounded-[8px] border border-[#eadfd4] bg-white p-5 shadow-[0_12px_30px_rgba(63,52,44,0.04)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#6f5c4f]">
            Next Session
          </p>
          <p className="mt-3 font-serif text-3xl font-semibold text-[#8f6249]">
            {getTimeUntil(mockSupportGroups.map((g) => g.nextSession).sort()[0])}
          </p>
          <p className="mt-1 text-xs text-[#b39c8c] truncate">Somatic Integration</p>
        </div>

        {/* Stat 4 */}
        <div className="rounded-[8px] border border-[#eadfd4] bg-white p-5 shadow-[0_12px_30px_rgba(63,52,44,0.04)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#6f5c4f]">
            Member Since
          </p>
          <p className="mt-3 font-serif text-3xl font-semibold text-[#2f251f]">Mar 2026</p>
          <p className="mt-1 text-xs text-[#b39c8c]">on your path</p>
        </div>
      </div>

      {/* Group Cards Mapping */}
      <div className="space-y-4">
        {mockSupportGroups.map((g) => (
          <GroupCard
            key={g.id}
            group={g}
            isExpanded={expandedId === g.id}
            onToggle={() => toggle(g.id)}
          />
        ))}
      </div>

      {/* CTA Footer Wrapper */}
      <div className="rounded-[8px] bg-white border border-dashed border-[#eadfd4] p-6 shadow-[0_12px_30px_rgba(63,52,44,0.02)] sm:flex sm:items-center sm:justify-between sm:px-8">
        <div className="space-y-1 mb-4 sm:mb-0">
          <p className="font-serif text-xl font-semibold text-[#2f251f]">
            Discover more healing circles
          </p>
          <p className="text-xs text-[#6f5c4f]">
            New groups open every month — find your next safe space.
          </p>
        </div>
        <Link
          href="/support-groups"
          className="inline-block rounded-[8px] border border-[#eadfd4] bg-[#fffaf6] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#6f5c4f] transition hover:border-[#8f6249] hover:text-[#8f6249]"
        >
          Browse All Groups →
        </Link>
      </div>
    </div>
  );
}