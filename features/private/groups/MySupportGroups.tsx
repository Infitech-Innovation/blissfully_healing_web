"use client";

import { useState } from "react";
import Link from "next/link";
import { getTimeUntil } from "@/utils/utils";
import { useAuthStore } from "@/store/useAuthStore";
import { MyGroupMembership } from "@/types/groups.definations";
import { useMyGroups } from "@/services/businessservices/groups.services";
import { GroupCard } from "./GroupCard";
import MyJoinedGroup from "@/components/skeleton/MyJoinedGroup";

const EMPTY_LIST: MyGroupMembership[] = [];

export default function MySupportGroupsDashboard() {
  const user = useAuthStore((state) => state.user);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggle = (id: number) =>
    setExpandedId((prev) => (prev === id ? null : id));

  const { data: myGroupResponse, isLoading } = useMyGroups();

  const memberships = myGroupResponse?.results ?? EMPTY_LIST;

  // Extract the groups from the memberships
  const groups = memberships.map((membership) => ({
    ...membership.group,
    membershipStatus: membership.status,
    joinedAt: membership.joined_at,
  }));

  console.log("groups length", groups.length)

  // Sort by nearest upcoming session
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingGroups = groups.filter((group) => {
    if (!group.next_session_date) return false;

    const sessionDate = new Date(group.next_session_date);
    sessionDate.setHours(0, 0, 0, 0);

    return sessionDate >= today;
  });

  const sortedGroups = upcomingGroups.sort((a, b) => {
    return (
      new Date(a.next_session_date!).getTime() -
      new Date(b.next_session_date!).getTime()
    );
  });

  const nextGroup = sortedGroups[0];

  const nextSessionDate = nextGroup?.next_session_date ?? null;
  const nextGroupTitle = nextGroup?.title ?? "No upcoming circles";

  // const nextGroup = sortedGroups[0];
  // const nextSessionDate = nextGroup?.next_session_date ?? null;
  // const nextGroupTitle = nextGroup?.title ?? "No upcoming circles";

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fffaf6] text-[#2f251f]">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#eadfd4]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-[#d4c4b5]/15 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 lg:px-12">
        {/* Header */}
        <header className="space-y-5">
          <div className="max-w-3xl space-y-4">
            <div className="relative inline-block">
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#8f6249]">
                Somatic Sanctuary
              </p>
              <div className="absolute -bottom-1 left-0 h-[2px] w-12 rounded-full bg-gradient-to-r from-[#8f6249] to-transparent" />
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-[#2f251f] sm:text-5xl lg:text-[3.5rem]">
              Your healing <em className="italic text-[#8f6249]">circles</em>,
              &nbsp;{user?.full_name}.
            </h1>

            <p className="max-w-2xl text-sm leading-[1.8] text-[#6f5c4f]">
              Every session is an act of devotion to yourself. These circles
              hold space for your journey—each one a step toward wholeness.
            </p>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Joined */}
          <div className="relative overflow-hidden rounded-[12px] border border-[#eadfd4] bg-white p-6 shadow-[0_4px_24px_rgba(63,52,44,0.04)]">
            <div className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 rounded-bl-full bg-[#fffaf6]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8f6249]">
              Circles Joined
            </p>
            <p className="mt-4 font-serif text-4xl font-semibold">
              {groups.length}
            </p>
            <p className="mt-2 text-xs text-[#b39c8c]">
              active memberships
            </p>
          </div>

          {/* Sessions */}
          <div className="relative overflow-hidden rounded-[12px] border border-[#eadfd4] bg-white p-6 shadow-[0_4px_24px_rgba(63,52,44,0.04)]">
            <div className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 rounded-bl-full bg-[#fffaf6]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8f6249]">
              Sessions Attended
            </p>
            <p className="mt-4 font-serif text-4xl font-semibold">0</p>
            <p className="mt-2 text-xs text-[#b39c8c]">this journey</p>
          </div>

          {/* Next Session */}
          <div className="relative overflow-hidden rounded-[12px] border border-[#d4c4b5]/60 bg-gradient-to-br from-[#faf5f0] via-white to-[#fff8f0] p-6 shadow-[0_8px_32px_rgba(143,98,73,0.08)]">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8f6249]">
              Next Session
            </p>

            <p className="mt-4 font-serif text-4xl font-semibold text-[#8f6249]">
              {nextSessionDate ? getTimeUntil(nextSessionDate) : "N/A"}
            </p>

            <p className="mt-2 truncate text-xs font-medium text-[#8f6249]/70">
              {nextGroupTitle}
            </p>
          </div>

          {/* Member Since */}
          <div className="relative overflow-hidden rounded-[12px] border border-[#eadfd4] bg-white p-6 shadow-[0_4px_24px_rgba(63,52,44,0.04)]">
            <div className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 rounded-bl-full bg-[#fffaf6]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8f6249]">
              Member Since
            </p>

            <p className="mt-4 font-serif text-2xl font-semibold">
              {memberships.length
                ? new Date(memberships[0].joined_at).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    year: "numeric",
                  }
                )
                : "--"}
            </p>

            <p className="mt-2 text-xs text-[#b39c8c]">on your path</p>
          </div>
        </div>

        {/* Groups */}
        <div className="space-y-3">
          {isLoading ? (
            <MyJoinedGroup />
          ) : (groups?.length ?? 0) > 0 ? (
            groups.map((group) => (
              <GroupCard
                key={group.id}
                group={group}
                isExpanded={expandedId === group.id}
                onToggle={() => toggle(group.id)}
              />
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-[#eadfd4] bg-white p-12 text-center">
              <h3 className="font-serif text-2xl font-semibold">
                No support groups yet
              </h3>

              <p className="mt-2 text-sm text-[#6f5c4f]">
                Join your first healing circle to begin your journey.
              </p>

              <Link
                href="/support-groups"
                className="mt-6 inline-flex rounded-lg bg-[#8f6249] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#6f4a36]"
              >
                Browse Support Groups
              </Link>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-[14px] border border-dashed border-[#d4c4b5]/70 bg-gradient-to-br from-white via-[#fffaf6] to-white p-8 shadow-[0_8px_40px_rgba(63,52,44,0.04)] sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-xl font-semibold sm:text-2xl">
              Discover more healing circles
            </p>

            <p className="mt-2 max-w-md text-sm text-[#6f5c4f]">
              New groups open every month—find your next safe space for
              growth, connection, and transformation.
            </p>
          </div>

          <Link
            href="/support-groups"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#eadfd4] bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8f6249] transition hover:border-[#8f6249] sm:mt-0"
          >
            Browse All Groups
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
