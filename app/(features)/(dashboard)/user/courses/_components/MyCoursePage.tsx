"use client";

import { courses } from "@/app/(features)/(portfolio)/courses/courseData";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import MyCourseCard from "./MyCourseCard";

export default function MyCoursePage() {
    const [query, setQuery] = useState("");

    const visibleCourses = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        return courses.filter((course) => {
            const matchesQuery =
                !normalizedQuery ||
                [
                    course.title,
                    course.shortDescription,
                    course.category,
                    course.difficulty,
                ]
                    .join(" ")
                    .toLowerCase()
                    .includes(normalizedQuery);

            return matchesQuery;
        });
    }, [query]);

    return (
        <section className="bg-[#fffaf6]">
            <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8 lg:py-4">
                <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div>
                        <h2 className="text-3xl font-semibold text-[#2f251f]">
                            My Course Library
                        </h2>
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

                {visibleCourses.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-3">
                        {visibleCourses.map((course) => (
                            < MyCourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-[28px] border border-dashed border-[#dbc7b7] bg-[#f8f0e8] px-6 py-14 text-center">
                        <h3 className="text-xl font-semibold text-[#2f251f]">
                            No courses found, Please Subscribe to the courses.
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
