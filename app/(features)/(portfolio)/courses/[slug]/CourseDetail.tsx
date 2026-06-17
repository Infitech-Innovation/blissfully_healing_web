"use client";

import { useState } from "react";
import {
  IconArrowLeft,
  IconBook2,
  IconCategory,
  IconCertificate,
  IconCheck,
  IconChevronDown,
  IconClockHour4,
  IconDeviceMobile,
  IconPlayerPlay,
  IconSchool,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Course } from "../definations";
import EnrollButton from "@/components/checkoutBtn";

export default function CourseDetail({ course }: { course: Course }) {
  const [openChapterIds, setOpenChapterIds] = useState<number[]>(() =>
    course.chapters?.[0]?.id ? [course.chapters[0].id] : [],
  );

  const totalLessons = course.lesson_count;

  const toggleChapter = (id: number) => {
    setOpenChapterIds((current) =>
      current.includes(id)
        ? current.filter((chapterId) => chapterId !== id)
        : [...current, id],
    );
  };

  return (
    <div className="min-h-screen bg-[#fffaf6] text-[#3f342c]">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-8 px-6 py-8 md:flex-row md:items-start">
        <main className="min-w-0 flex-1">
          <Link
            href="/courses"
            className="mb-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#8f6249] transition hover:text-[#744d39]"
          >
            <IconArrowLeft size={18} />
            Back to courses
          </Link>

          <section className="relative aspect-[16/7] overflow-hidden rounded-[10px] border border-[#eadfd4] bg-[#f8f0e8] shadow-[0_18px_45px_rgba(63,52,44,0.08)]">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 760px, 100vw"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2f251f]/45 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#8f6249] shadow-sm backdrop-blur">
              {course.category.name}
            </div>
          </section>

          <section className="mt-6">
            <h1 className="text-[30px] font-semibold leading-tight text-[#2f251f]">
              {course.title}
            </h1>
            <p className="mt-3 text-[16px] leading-7 text-[#6f5c4f]">
              {course.short_description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { icon: IconSchool, label: course.difficulty },
                { icon: IconCategory, label: course.category.name },
                { icon: IconClockHour4, label: course.duration },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#eadfd4] bg-white px-3 py-1.5 text-[13px] text-[#6f5c4f]"
                >
                  <tag.icon size={14} className="text-[#8f6249]" />
                  {tag.label}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-[22px] font-semibold text-[#2f251f]">
              Course Description
            </h2>
            <p className="mt-3 text-[16px] leading-[1.75] text-[#6f5c4f]">
              {course.full_description}
            </p>
            <p className="mt-5 text-[16px] font-semibold text-[#3f342c]">
              Features:
            </p>
            <ul className="mt-3 flex list-disc flex-col gap-[6px] pl-5 text-[15px] text-[#6f5c4f] marker:text-[#8f6249]">
              {course.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="text-[22px] font-semibold text-[#2f251f]">
                Course Content
              </h2>
              <p className="text-[13px] text-[#7a6658]">
                {course.chapters.length} chapters · {totalLessons} lessons
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {course.chapters.map((chapter) => {
                const isOpen = openChapterIds.includes(chapter.id);

                return (
                  <article
                    key={chapter.id}
                    className="overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white shadow-sm"
                    style={{ borderWidth: "0.5px" }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleChapter(chapter.id)}
                      className="flex w-full items-center gap-3 bg-[#f8f0e8] px-4 py-[14px] text-left"
                    >
                      <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#8f6249] text-[13px] font-medium text-white">
                        {chapter.number}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[14px] font-medium text-[#2f251f]">
                          {chapter.title}
                        </span>
                        <span className="mt-0.5 block text-[12px] text-[#7a6658]">
                          {chapter.lessons.length} lessons in this chapter
                        </span>
                      </span>
                      <span className="hidden text-[13px] text-[#7a6658] sm:block">
                        {chapter.lessons.length} lessons
                      </span>
                      <IconChevronDown
                        size={18}
                        className={`text-[#8f6249] transition duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div
                        className="border-t border-[#eadfd4]"
                        style={{ borderTopWidth: "0.5px" }}
                      >
                        {chapter.lessons.length > 0 ? (
                          chapter.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="flex items-center gap-3 px-4 py-[11px] pl-[56px]"
                            >
                              <IconPlayerPlay
                                size={16}
                                className="shrink-0 text-[#8f6249]"
                              />
                              <div className="min-w-0 flex-1">
                                <p className="truncate text-[14px] text-[#3f342c]">
                                  {lesson.title}
                                </p>
                                <p className="truncate text-[12px] text-[#7a6658]">
                                  {lesson.subtitle}
                                </p>
                              </div>
                              <span className="rounded-full bg-[#f8f0e8] px-2.5 py-1 text-[12px] text-[#7a6658]">
                                {lesson.duration}
                              </span>
                            </div>
                          ))
                        ) : (
                          <p className="px-4 py-4 pl-[56px] text-[13px] text-[#7a6658]">
                            No lessons yet
                          </p>
                        )}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        </main>

        <aside className="h-fit w-full rounded-[10px] border border-[#eadfd4] bg-white p-5 shadow-[0_18px_45px_rgba(63,52,44,0.08)] md:sticky md:top-4 md:w-[300px] md:shrink-0">
          <div className="flex items-center justify-between">
            <p className="text-[15px] text-[#7a6658]">Price</p>
            <p className="text-[22px] font-medium text-[#8f6249]">
              KES {course.price}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-[13px] font-medium text-[#3f342c]">
              What you&apos;ll get:
            </p>
            <div className="mt-4 flex flex-col gap-4">
              {[
                {
                  icon: IconClockHour4,
                  label: "Course Duration",
                  value: course.duration,
                },
                {
                  icon: IconSchool,
                  label: "Difficulty Level",
                  value: course.difficulty,
                },
                {
                  icon: IconCategory,
                  label: "Category",
                  value: course.category.name,
                },
                {
                  icon: IconBook2,
                  label: "Total Lessons",
                  value: `${totalLessons} lessons`,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon size={16} className="shrink-0 text-[#8f6249]" />
                  <div>
                    <p className="text-[12px] text-[#7a6658]">{item.label}</p>
                    <p className="text-[13px] font-medium text-[#3f342c]">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="my-6 border-t border-[#eadfd4]" />

          <div>
            <p className="text-[13px] font-medium text-[#3f342c]">
              This course includes:
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {[
                { icon: IconCheck, text: "Full lifetime access" },
                {
                  icon: IconDeviceMobile,
                  text: "Access on mobile and desktop",
                },
                { icon: IconCertificate, text: "Certificate of completion" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-[13px] text-[#6f5c4f]"
                >
                  <item.icon size={16} className="shrink-0 text-[#8f6249]" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <EnrollButton id={course.id} type="course" btnName="Enroll Now" />
          <p className="mt-3 text-center text-[12px] text-[#7a6658]">
            30-day money-back guarantee
          </p>
        </aside>
      </div>
    </div>
  );
}
