"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import Pagination from "@/components/custom/Pagination";
import CourseCard from "./CourseCard";
import CourseHero from "./CourseHero";
import { Course } from "@/types/course.definations";
import { useGetCourses } from "@/hooks/useCourses";

const EMPTY_COURSES: Course[] = [];

export default function CourseSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const { data: coursesData, isFetching } = useGetCourses(page);
  const courses = coursesData?.results ?? EMPTY_COURSES;
  const pageSize = Math.max(courses.length, 1);

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(courses.map((course) => course.category?.name || ""))
      ).filter(Boolean),
    ],
    [courses]
  );

  const visibleCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === "All" || course.category?.name === activeCategory;

      const matchesQuery =
        !normalizedQuery ||
        [
          course.title,
          course.short_description,
          course.category?.name,
          course.difficulty,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query, courses]);

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
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
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
              onClick={() => {
                setActiveCategory(category);
                setPage(1);
              }}
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

        <Pagination
          currentPage={page}
          totalItems={coursesData?.count ?? courses.length}
          pageSize={pageSize}
          onPageChange={setPage}
          disabled={isFetching}
        />
      </div>
    </section>
  );
}
