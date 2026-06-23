"use client";

import { useState } from "react";
import Link from "next/link";
import { GroupCard } from "./GroupCard";
import { mockSupportGroups } from "../data";
import { getTimeUntil } from "../utils";
import { mockUser } from "../definations";

export default function MySupportGroupsDashboard() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const toggle = (id: number) => setExpandedId(expandedId === id ? null : id);

  // Programmatic Adjustment: Sort and extract the nearest upcoming session cleanly
  const sortedGroups = [...mockSupportGroups].sort(
    (a, b) => a.nextSession.getTime() - b.nextSession.getTime()
  );

  const nextGroup = sortedGroups[0];
  const nextSessionDate = nextGroup ? nextGroup.nextSession : null;
  const nextGroupTitle = nextGroup ? nextGroup.name : "No upcoming circles";

  return (
    <div className="min-h-screen bg-[#fffaf6] text-[#2f251f] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#eadfd4]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 translate-x-1/2 h-[400px] w-[400px] rounded-full bg-[#d4c4b5]/15 blur-[100px]" />
      </div>

      <div className="relative space-y-10 px-4 py-10 sm:px-6 lg:px-12 max-w-6xl mx-auto">
        {/* Header Block */}
        <header className="space-y-5 relative">
          <div className="max-w-3xl space-y-4">
            <div className="relative inline-block">
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#8f6249]">
                Somatic Sanctuary
              </p>
              <div className="absolute -bottom-1 left-0 h-[2px] w-12 bg-gradient-to-r from-[#8f6249] to-transparent rounded-full" />
            </div>

            <h1 className="font-serif text-4xl font-semibold tracking-tight text-[#2f251f] sm:text-5xl lg:text-[3.5rem] leading-[1.1]">
              Your healing{" "}
              <em className="font-serif text-[#8f6249] italic">circles</em>,
              &nbsp;{mockUser.name}.
            </h1>

            <p className="max-w-2xl text-sm leading-[1.8] text-[#6f5c4f]">
              Every session is an act of devotion to yourself. These circles
              hold space for your journey—each one a step toward wholeness.
            </p>
          </div>
        </header>

        {/* Stats Deck Grid */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stat 1 */}
          <div className="group relative rounded-[12px] border border-[#eadfd4] bg-white p-6 shadow-[0_4px_24px_rgba(63,52,44,0.04)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(63,52,44,0.08)] hover:border-[#d4c4b5] overflow-hidden">
            <div className="absolute top-0 right-0 h-20 w-20 rounded-bl-full bg-[#fffaf6] translate-x-6 -translate-y-6" />
            <p className="relative text-[10px] font-bold uppercase tracking-[0.28em] text-[#8f6249]">
              Circles Joined
            </p>
            <p className="relative mt-4 font-serif text-4xl font-semibold text-[#2f251f]">
              {mockSupportGroups.length}
            </p>
            <p className="relative mt-2 text-xs text-[#b39c8c]">
              active memberships
            </p>
          </div>

          {/* Stat 2 */}
          <div className="group relative rounded-[12px] border border-[#eadfd4] bg-white p-6 shadow-[0_4px_24px_rgba(63,52,44,0.04)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(63,52,44,0.08)] hover:border-[#d4c4b5] overflow-hidden">
            <div className="absolute top-0 right-0 h-20 w-20 rounded-bl-full bg-[#fffaf6] translate-x-6 -translate-y-6" />
            <p className="relative text-[10px] font-bold uppercase tracking-[0.28em] text-[#8f6249]">
              Sessions Attended
            </p>
            <p className="relative mt-4 font-serif text-4xl font-semibold text-[#2f251f]">
              {mockSupportGroups.reduce((a, g) => a + g.sessionsAttended, 0)}
            </p>
            <p className="relative mt-2 text-xs text-[#b39c8c]">this journey</p>
          </div>

          {/* Stat 3 - Highlighted */}
          <div className="group relative rounded-[12px] bg-gradient-to-br from-[#faf5f0] via-white to-[#fff8f0] border border-[#d4c4b5]/60 p-6 shadow-[0_8px_32px_rgba(143,98,73,0.08)] transition-all duration-300 hover:shadow-[0_16px_48px_rgba(143,98,73,0.12)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8f6249]/[0.02] to-transparent" />
            <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-gradient-to-bl from-[#8f6249]/10 to-transparent translate-x-8 -translate-y-8" />
            <p className="relative text-[10px] font-bold uppercase tracking-[0.28em] text-[#8f6249]">
              Next Session
            </p>
            <p className="relative mt-4 font-serif text-4xl font-semibold text-[#8f6249]">
              {nextSessionDate ? getTimeUntil(nextSessionDate) : "N/A"}
            </p>
            <p className="relative mt-2 text-xs text-[#8f6249]/70 truncate font-medium">
              {nextGroupTitle}
            </p>
          </div>

          {/* Stat 4 */}
          <div className="group relative rounded-[12px] border border-[#eadfd4] bg-white p-6 shadow-[0_4px_24px_rgba(63,52,44,0.04)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(63,52,44,0.08)] hover:border-[#d4c4b5] overflow-hidden">
            <div className="absolute top-0 right-0 h-20 w-20 rounded-bl-full bg-[#fffaf6] translate-x-6 -translate-y-6" />
            <p className="relative text-[10px] font-bold uppercase tracking-[0.28em] text-[#8f6249]">
              Member Since
            </p>
            <p className="relative mt-4 font-serif text-4xl font-semibold text-[#2f251f]">
              Mar 2026
            </p>
            <p className="relative mt-2 text-xs text-[#b39c8c]">on your path</p>
          </div>
        </div>

        {/* Group Cards Mapping */}
        <div className="space-y-3">
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
        <div className="group relative rounded-[14px] bg-gradient-to-br from-white via-[#fffaf6] to-white border border-dashed border-[#d4c4b5]/70 p-8 shadow-[0_8px_40px_rgba(63,52,44,0.04)] transition-all duration-500 hover:shadow-[0_16px_56px_rgba(63,52,44,0.08)] hover:border-[#8f6249]/40 sm:flex sm:items-center sm:justify-between sm:px-10 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-[#8f6249]/10 blur-2xl" />
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 h-24 w-24 rounded-full bg-[#eadfd4]/40 blur-2xl" />
          </div>

          <div className="relative space-y-2 mb-5 sm:mb-0">
            <p className="font-serif text-xl sm:text-2xl font-semibold text-[#2f251f]">
              Discover more healing circles
            </p>
            <p className="text-xs sm:text-sm text-[#6f5c4f] max-w-md leading-relaxed">
              New groups open every month — find your next safe space for
              growth, connection, and transformation.
            </p>
          </div>

          <Link
            href="/support-groups"
            className="relative inline-flex items-center gap-2 rounded-[10px] border border-[#eadfd4]/80 bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8f6249] transition-all duration-300 hover:border-[#8f6249] hover:text-[#6f4a36] hover:bg-[#fffaf6] hover:shadow-lg group/link"
          >
            <span>Browse All Groups</span>
            <span className="text-lg transition-transform duration-200 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}