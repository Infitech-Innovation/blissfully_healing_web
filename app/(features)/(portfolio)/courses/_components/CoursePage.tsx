"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import CourseCard from "./CourseCard";
import { Course } from "../definations";
import CourseHero from "./CourseHero";

const courses: Course[] = [
  {
    id: 1,
    slug: "foundations-of-emotional-healing",
    title: "Foundations of Emotional Healing",
    description:
      "A gentle introduction to understanding emotions, self-compassion, and nervous-system care.",
    category: "Healing",
    imageUrl:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
    level: "Beginner",
    duration: "4 weeks",
    lessons: 18,
    price: "KES 4,500",
  },
  {
    id: 2,
    slug: "mindful-grief-support",
    title: "Mindful Grief Support",
    description:
      "Supportive practices for processing loss, honoring memory, and rebuilding inner steadiness.",
    category: "Grief Care",
    imageUrl:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=80",
    level: "All levels",
    duration: "5 weeks",
    lessons: 22,
    price: "KES 5,500",
  },
  {
    id: 3,
    slug: "somatic-breathwork-for-calm",
    title: "Somatic Breathwork for Calm",
    description:
      "Breath, body awareness, and grounding tools for stress relief and emotional regulation.",
    category: "Somatics",
    imageUrl:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80",
    level: "Beginner",
    duration: "3 weeks",
    lessons: 14,
    price: "KES 3,800",
  },
  {
    id: 4,
    slug: "inner-child-restoration",
    title: "Inner Child Restoration",
    description:
      "Reflective lessons and guided practices for reconnecting with younger parts of yourself.",
    category: "Self Discovery",
    imageUrl:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=900&q=80",
    level: "Intermediate",
    duration: "6 weeks",
    lessons: 26,
    price: "KES 6,500",
  },
  {
    id: 5,
    slug: "journaling-for-clarity",
    title: "Journaling for Clarity",
    description:
      "Structured prompts and rituals to help you process thoughts, patterns, and decisions.",
    category: "Reflection",
    imageUrl:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    level: "All levels",
    duration: "2 weeks",
    lessons: 10,
    price: "KES 2,500",
  },
  {
    id: 6,
    slug: "sacred-boundaries",
    title: "Sacred Boundaries",
    description:
      "Learn how to name your needs, communicate clearly, and protect your peace with care.",
    category: "Relationships",
    imageUrl:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=900&q=80",
    level: "Intermediate",
    duration: "4 weeks",
    lessons: 16,
    price: "KES 4,800",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(courses.map((course) => course.category))),
];

export default function CourseSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const visibleCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === "All" || course.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        [course.title, course.description, course.category, course.level]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section className="bg-[#fffaf6]">
      <CourseHero />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-[#2f251f]">
              Course Library
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-[#6f5c4f]">
              Choose the support that meets you where you are today. Filter by
              focus area or search for a specific practice.
            </p>
          </div>

          <label className="relative block min-w-0 lg:w-[360px]">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9a6b4f]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search courses"
              className="h-12 w-full rounded-sm border border-[#eadfd4] bg-white pl-11 pr-4 text-sm text-[#2f251f] outline-none transition placeholder:text-[#b39c8c] focus:border-[#8f6249] focus:ring-4 focus:ring-[#8f6249]/10"
            />
          </label>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category
                  ? "border-[#2f251f] bg-[#2f251f] text-[#fffaf6]"
                  : "border-[#eadfd4] bg-white text-[#6f5c4f] hover:border-[#8f6249] hover:text-[#2f251f]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {visibleCourses.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-3">
            {visibleCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-dashed border-[#dbc7b7] bg-[#f8f0e8] px-6 py-14 text-center">
            <h3 className="text-xl font-semibold text-[#2f251f]">
              No courses found
            </h3>
            <p className="mt-3 text-[#6f5c4f]">
              Try another focus area or clear your search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
