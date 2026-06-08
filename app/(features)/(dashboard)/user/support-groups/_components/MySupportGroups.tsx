"use client";

import { useState } from "react";
import { mockGroups, mockUser } from "../data";
import Link from "next/link";
import { getTimeUntil } from "../utils";
import { GroupCard } from "./GroupCard";

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function MySupportGroupsDashboard() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const toggle = (id: number) => setExpandedId(expandedId === id ? null : id);

  return (
    <div className="space-y-10 px-4 py-8 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <div className="max-w-3xl space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Your healing{" "}
            <em className="font-serif text-amber-300 italic">circles</em>,
            &nbsp;{mockUser.name}.
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            Every session is an act of devotion to yourself.
          </p>
        </div>
      </header>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        <div className="rounded-md border border-white/10 bg-white/5 p-5 shadow-sm shadow-black/10">
          <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">
            Circles Joined
          </p>
          <p className="mt-3 text-3xl font-semibold text-black">
            {mockGroups.length}
          </p>
          <p className="mt-1 text-sm text-slate-400">active memberships</p>
        </div>

        <div className="rounded-md border border-white/10 bg-white/5 p-5 shadow-sm shadow-black/10">
          <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">
            Sessions Attended
          </p>
          <p className="mt-3 text-3xl font-semibold text-black">
            {mockGroups.reduce((a, g) => a + g.sessionsAttended, 0)}
          </p>
          <p className="mt-1 text-sm text-slate-400">this journey</p>
        </div>

        <div className="rounded-md border border-white/10 bg-white/5 p-5 shadow-sm shadow-black/10">
          <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">
            Next Session
          </p>
          <p className="mt-3 text-3xl font-semibold text-black">
            {getTimeUntil(mockGroups.map((g) => g.nextSession).sort()[0])}
          </p>
          <p className="mt-1 text-sm text-slate-400">Gentle Grief Circle</p>
        </div>

        <div className="rounded-md border border-white/10 bg-white/5 p-5 shadow-sm shadow-black/10">
          <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">
            Member Since
          </p>
          <p className="mt-3 text-3xl font-semibold text-black">Mar 2026</p>
          <p className="mt-1 text-sm text-slate-400">on your path</p>
        </div>
      </div>

      {mockGroups.map((g) => (
        <GroupCard
          key={g.id}
          group={g}
          isExpanded={expandedId === g.id}
          onToggle={() => toggle(g.id)}
        />
      ))}

      <div className="rounded-md bg-[#f8f0e8] border border-dashed border-white/10 p-6 shadow-sm shadow-black/10 sm:flex sm:items-center sm:justify-between sm:px-8">
        <div className="space-y-2">
          <p className="text-xl font-semibold text-black">
            Discover more healing circles
          </p>
          <p className="text-sm text-slate-400">
            New groups open every month — find your next safe space.
          </p>
        </div>
        <Link
          href="/support-groups"
          className="rounded-full border border-white/10 px-4 text-black-200 hover:bg-white/5"
        >
          Browse All Groups →
        </Link>
      </div>
    </div>
  );
}
