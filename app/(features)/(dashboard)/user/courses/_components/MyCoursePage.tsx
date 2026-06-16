"use client";

import { courses } from "@/app/(features)/(portfolio)/courses/courseData";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import MyCourseCard from "./MyCourseCard";
import Link from "next/link";

export default function MyCoursePage() {
    const [query, setQuery] = useState("");

    const visibleCourses = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        return courses.filter((course) => {
            const matchesQuery =
                !normalizedQuery ||
                [
                    course.title,
                    course.short_description,
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
                <div className="mb-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end border-b border-[#eadfd4] pb-8">
                    {/* Left Side: Title & Description Column */}
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6249]">
                                Somatic Study Space
                            </p>
                            <h2 className="font-serif text-4xl font-semibold leading-tight text-[#2f251f] md:text-5xl">
                                My Enrolled
                                <br />
                                Courses & Programs
                            </h2>
                        </div>

                        <div className="md:max-w-xs">
                            <p className="mb-4 text-sm leading-7 text-[#6f5c4f]">
                                Deepen your practice. Access your interactive video modules,
                                integration workbooks, and live cohort schedules.
                            </p>
                            <Link
                                href="/courses"
                                className="inline-block rounded-[8px] border border-[#eadfd4] bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#6f5c4f] transition hover:border-[#8f6249] hover:text-[#8f6249]"
                            >
                                Explore Curriculum
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Right Side: Search Input Container */}
                <div className="w-full lg:w-[360px] mb-4  ml-auto">
                    <label className="relative block w-full">
                        <Search className="pointer-events-none absolute left-4 top-1/2  h-4 w-4 -translate-y-1/2 text-[#9a6b4f]" />
                        <input
                            type="text"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Search courses & lessons..."
                            className="h-12 w-full rounded-[8px] border border-[#eadfd4] bg-white pl-11 pr-4 text-sm text-[#2f251f] outline-none transition placeholder:text-[#b39c8c] focus:border-[#8f6249] focus:ring-4 focus:ring-[#8f6249]/10"
                        />
                    </label>
                </div>

                {visibleCourses.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-3">
                        {visibleCourses.map((course) => (
                            <MyCourseCard key={course.id} course={course} />
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
