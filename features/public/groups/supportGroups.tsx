"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CalendarDays, HeartHandshake, Search, Users } from "lucide-react";
import { GroupCard } from "./GroupCard";
import { GroupSkeleton } from "../../../components/skeleton/GroupSkeleton";
import { SupportGrouplist } from "@/types/groups.definations";
import { useGroups } from "@/services/businessservices/groups.services";

const EMPTY_List: SupportGrouplist[] = [];
const ALL_CATEGORIES = { label: "All", value: "all" };

export default function SupportGroups() {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES.value);
  const { data: groupsData, isLoading } = useGroups();
  const [query, setQuery] = useState("");


  const groups = groupsData?.results ?? EMPTY_List;

  const categories = useMemo(
    () => {
      const categoryMap = new Map<string, string>();

      groups.forEach((group) => {
        const value = group.category?.slug || group.category?.name;
        const label = group.category?.name;

        if (value && label) {
          categoryMap.set(value, label);
        }
      });

      return [
        ALL_CATEGORIES,
        ...Array.from(categoryMap, ([value, label]) => ({ value, label })),
      ];
    },
    [groups]
  );

  const visibleGroups = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return groups.filter((group) => {
      const categoryValue = group.category?.slug || group.category?.name;
      const matchesCategory =
        activeCategory === ALL_CATEGORIES.value ||
        categoryValue === activeCategory;

      const matchesQuery =
        !normalizedQuery ||
        [
          group.title,
          group.category?.name,
          group.tags.map((tag) => tag.name).join(" "),
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query, groups]);

  if (isLoading) {
    return <GroupSkeleton />;
  }


  return (
    <main className="min-h-screen bg-[#fffaf6] text-[#2f251f]">
      <section className="border-b border-[#eadfd4] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8 lg:py-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6249]">
              Support Groups
            </p>
            <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight text-[#2f251f] sm:text-5xl lg:text-6xl">
              Find a steady circle for the season you are in.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#6f5c4f] sm:text-lg">
              Small, facilitated groups for anxiety, grief, burnout, parenting,
              neurodiversity, and everyday emotional support.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-[8px] border border-[#eadfd4] bg-[#fffaf6] p-4">
              <Users className="mb-3 h-5 w-5 text-[#8f6249]" />
              <p className="text-2xl font-semibold text-[#2f251f]">
                {groups.length}
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6f5c4f]">
                Open Circles
              </p>
            </div>
            <div className="rounded-[8px] border border-[#eadfd4] bg-[#fffaf6] p-4">
              <CalendarDays className="mb-3 h-5 w-5 text-[#8f6249]" />
              <p className="text-2xl font-semibold text-[#2f251f]">
                {groups.filter((g) => g.status_label === "FILLING_FAST").length}
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6f5c4f]">
                Filling Fast
              </p>
            </div>
            <div className="rounded-[8px] border border-[#eadfd4] bg-[#fffaf6] p-4">
              <HeartHandshake className="mb-3 h-5 w-5 text-[#8f6249]" />
              <p className="text-2xl font-semibold text-[#2f251f]">1:1</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6f5c4f]">
                Guided Care
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-[#2f251f]">
              Active Support Groups
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-[#6f5c4f]">
              Browse by focus area or search for the kind of support you need
              right now.
            </p>
          </div>

          <label className="relative block min-w-0 lg:w-[360px]">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9a6b4f]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search groups"
              className="h-12 w-full rounded-sm border border-[#eadfd4] bg-white pl-11 pr-4 text-sm text-[#2f251f] outline-none transition placeholder:text-[#b39c8c] focus:border-[#8f6249] focus:ring-4 focus:ring-[#8f6249]/10"
            />
          </label>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${activeCategory === cat.value
                ? "border-[#2f251f] bg-[#2f251f] text-[#fffaf6]"
                : "border-[#eadfd4] bg-white text-[#6f5c4f] hover:border-[#8f6249] hover:text-[#2f251f]"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {visibleGroups.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleGroups.map((group) => (
              <GroupCard key={group.id} group={group} />
            ))}
          </div>
        ) : (
          <div className="rounded-[8px] border border-dashed border-[#dbc7b7] bg-[#f8f0e8] px-6 py-14 text-center">
            <h3 className="text-xl font-semibold text-[#2f251f]">
              No groups found
            </h3>
            <p className="mt-3 text-[#6f5c4f]">
              Try another focus area or clear your search.
            </p>
          </div>
        )}

        <div className="mt-12 rounded-[8px] border border-[#eadfd4] bg-white p-8 shadow-[0_18px_45px_rgba(63,52,44,0.06)] md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6249]">
              Need Something Specific?
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[#2f251f]">
              We can help you choose the right group.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-[#6f5c4f]">
              Share what you are navigating and a coordinator will point you to
              a suitable circle or private support option.
            </p>
          </div>
          <div className="mt-6 shrink-0 md:mt-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-[#8f6249] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#744d39]"
            >
              Talk to a Coordinator
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
