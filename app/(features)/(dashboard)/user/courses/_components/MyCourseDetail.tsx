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
import { useEnrolledCoursesDetails } from "@/app/(features)/(portfolio)/courses/courses.services";

interface PageProps {
  id: string;
}

export default function MyCourseDetail({ id }: PageProps) {

  const { data: enrolledData, isLoading } = useEnrolledCoursesDetails(id)

  const [openChapterIds, setOpenChapterIds] = useState<number[]>(() => {
    if (!enrolledData?.course?.chapters?.[0]?.id) return [];
    return [enrolledData.course.chapters[0].id];
  });

  if (isLoading) return <div>Loading...</div>;
  if (!enrolledData) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 bg-[#fffaf6] px-4 text-center">
        <p className="text-xl font-medium text-[#2f251f]">Course not found</p>
        <p className="max-w-xs text-sm text-[#6f5c4f]">
          It looks like this course doesnt exist or you dont have access to it
          yet.
        </p>
        <Link
          href="/dashboard"
          className="mt-2 inline-block rounded-[8px] bg-[#8f6249] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#6f5c4f]"
        >
          Go Home
        </Link>
      </div>
    );
  }

  const course = enrolledData.course;
  const completedLessonIds = enrolledData?.completed_lesson_ids ?? [];
  const totalLessons = course.lesson_count;
  const completedCount = completedLessonIds.length;
  const progress =
    totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const enrolledAt = enrolledData.enrolled_at
    ? new Date(enrolledData.enrolled_at).toLocaleDateString()
    : "TBD";
  const isCompleted = progress === 100;

  const toggleChapter = (id: number) => {
    setOpenChapterIds((current) =>
      current.includes(id)
        ? current.filter((chapterId) => chapterId !== id)
        : [...current, id],
    );
  };

  // Find the next lesson to continue (first incomplete lesson)
  const nextLesson = course.chapters
    .flatMap((ch) => ch.lessons)
    .find((less) => !completedLessonIds.includes(less.id));

  return (
    <div className="min-h-screen bg-[#fffaf6] text-[#3f342c]">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-8 px-6 py-8 md:flex-row md:items-start">
        <main className="min-w-0 flex-1">
          <Link
            href="/user/courses"
            className="mb-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#8f6249] transition hover:text-[#744d39]"
          >
            <IconArrowLeft size={18} />
            Back to my courses
          </Link>

          {/* Hero */}
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#2f251f]/55 via-transparent to-transparent" />

            {/* Progress bar overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-white/20">
              <div
                className="h-full bg-[#8f6249] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="absolute bottom-5 left-5 flex items-center gap-2">
              <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#8f6249] shadow-sm backdrop-blur">
                {course.category.name}
              </span>
              {isCompleted && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2f9e44]/90 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur">
                  <IconCheck size={14} />
                  Completed
                </span>
              )}
            </div>
          </section>

          {/* Title & meta */}
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

          {/* Description */}
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
              {course.features.flatMap((feature) => {
                // If the item is a string that looks like a stringified JSON array, parse it
                if (typeof feature === "string" && feature.startsWith("[")) {
                  try {
                    return JSON.parse(feature) as string[];
                  } catch {
                    return feature;
                  }
                }
                return feature;
              }).map((feature, index) => (
                // Use an index-fused key fallback in case items are identical
                <li key={`${feature}-${index}`}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Course content */}
          <section className="mt-8">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="text-[22px] font-semibold text-[#2f251f]">
                Course Content
              </h2>
              <p className="text-[13px] text-[#7a6658]">
                {course.chapters.length} chapters · {completedCount}/
                {totalLessons} lessons completed
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {course.chapters.map((chapter) => {
                const isOpen = openChapterIds.includes(chapter.id);
                const chapterCompleted = chapter.lessons.every((l) =>
                  completedLessonIds.includes(l.id),
                );
                const chapterCompletedCount = chapter.lessons.filter((l) =>
                  completedLessonIds.includes(l.id),
                ).length;

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
                      <span
                        className={`flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-[13px] font-medium ${chapterCompleted
                          ? "bg-[#2f9e44] text-white"
                          : "bg-[#8f6249] text-white"
                          }`}
                      >
                        {chapterCompleted ? (
                          <IconCheck size={14} />
                        ) : (
                          chapter.number
                        )}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[14px] font-medium text-[#2f251f]">
                          {chapter.title}
                        </span>
                        <span className="mt-0.5 block text-[12px] text-[#7a6658]">
                          {chapterCompletedCount}/{chapter.lessons.length}{" "}
                          lessons completed
                        </span>
                      </span>
                      <span className="hidden text-[13px] text-[#7a6658] sm:block">
                        {chapterCompletedCount}/{chapter.lessons.length}
                      </span>
                      <IconChevronDown
                        size={18}
                        className={`text-[#8f6249] transition duration-200 ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {isOpen && (
                      <div
                        className="border-t border-[#eadfd4]"
                        style={{ borderTopWidth: "0.5px" }}
                      >
                        {chapter.lessons.length > 0 ? (
                          chapter.lessons.map((lesson) => {
                            const isLessonCompleted =
                              completedLessonIds.includes(lesson.id);
                            // Highlight the next incomplete lesson as "current"
                            const isCurrent = lesson.id === nextLesson?.id;

                            return (
                              <div
                                key={lesson.id}
                                className={`flex items-center gap-3 px-4 py-[11px] pl-[56px] transition ${isCurrent
                                  ? "bg-[#f8f0e8]"
                                  : "hover:bg-[#fdf6f0]"
                                  }`}
                              >
                                {isLessonCompleted ? (
                                  <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#2f9e44]">
                                    <IconCheck
                                      size={11}
                                      className="text-white"
                                    />
                                  </span>
                                ) : (
                                  <IconPlayerPlay
                                    size={16}
                                    className={`shrink-0 ${isCurrent
                                      ? "text-[#8f6249]"
                                      : "text-[#b8a090]"
                                      }`}
                                  />
                                )}
                                <div className="min-w-0 flex-1">
                                  <p
                                    className={`truncate text-[14px] ${isLessonCompleted
                                      ? "text-[#7a6658] line-through decoration-[#b8a090]"
                                      : isCurrent
                                        ? "font-medium text-[#2f251f]"
                                        : "text-[#3f342c]"
                                      }`}
                                  >
                                    {lesson.title}
                                  </p>
                                  <p className="truncate text-[12px] text-[#7a6658]">
                                    {lesson.subtitle}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  {isCurrent && (
                                    <span className="rounded-full bg-[#8f6249]/10 px-2 py-0.5 text-[11px] font-medium text-[#8f6249]">
                                      Current
                                    </span>
                                  )}
                                  <span className="rounded-full bg-[#f8f0e8] px-2.5 py-1 text-[12px] text-[#7a6658]">
                                    {lesson.duration}
                                  </span>
                                </div>
                              </div>
                            );
                          })
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

        {/* Sidebar */}
        <aside className="h-fit w-full rounded-[10px] border border-[#eadfd4] bg-white p-5 shadow-[0_18px_45px_rgba(63,52,44,0.08)] md:sticky md:top-4 md:w-[300px] md:shrink-0">
          {/* Progress ring / bar */}
          <div className="flex items-center gap-4">
            <div className="relative flex h-[64px] w-[64px] shrink-0 items-center justify-center">
              <svg className="absolute inset-0 -rotate-90" viewBox="0 0 64 64">
                <circle
                  cx="32"
                  cy="32"
                  r="26"
                  fill="none"
                  stroke="#eadfd4"
                  strokeWidth="6"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="26"
                  fill="none"
                  stroke={isCompleted ? "#2f9e44" : "#8f6249"}
                  strokeWidth="6"
                  strokeDasharray={`${2 * Math.PI * 26}`}
                  strokeDashoffset={`${2 * Math.PI * 26 * (1 - progress / 100)}`}
                  strokeLinecap="round"
                  className="transition-all duration-700"
                />
              </svg>
              <span className="text-[13px] font-semibold text-[#3f342c]">
                {progress}%
              </span>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[#2f251f]">
                {isCompleted ? "Course Complete!" : "Your Progress"}
              </p>
              <p className="mt-0.5 text-[12px] text-[#7a6658]">
                {completedCount} of {totalLessons} lessons done
              </p>
              <p className="mt-0.5 text-[11px] text-[#a08878]">
                Enrolled {enrolledAt}
              </p>
            </div>
          </div>

          <div className="my-5 border-t border-[#eadfd4]" />

          {/* Course details */}
          <div>
            <p className="text-[13px] font-medium text-[#3f342c]">
              Course details:
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

          <div className="my-5 border-t border-[#eadfd4]" />

          {/* Includes */}
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

          {/* CTA */}
          {isCompleted ? (
            <div className="mt-6 flex flex-col gap-2">
              <button
                type="button"
                className="w-full rounded-[8px] bg-[#2f9e44] p-3 text-[15px] font-medium text-white transition hover:bg-[#27883b]"
              >
                <span className="inline-flex items-center gap-2">
                  <IconCertificate size={16} />
                  View Certificate
                </span>
              </button>
              <button
                type="button"
                className="w-full rounded-[8px] border border-[#eadfd4] bg-white p-3 text-[14px] font-medium text-[#6f5c4f] transition hover:bg-[#f8f0e8]"
              >
                Review Course
              </button>
            </div>
          ) : (
            <Link
              href={`/user/courses/${course.slug}/learn`}
              className="mt-4 inline-flex items-center justify-center w-full rounded-[8px] bg-[#8f6249] p-3 text-[15px] font-medium text-white transition hover:bg-[#744d39]"
            >
              {nextLesson ? "Continue Learning" : "Start Course"}
            </Link>
          )}

          {!isCompleted && nextLesson && (
            <p className="mt-2 truncate text-center text-[11px] text-[#a08878]">
              Up next: {nextLesson.title}
            </p>
          )}
        </aside>
      </div>
    </div>
  );
}
