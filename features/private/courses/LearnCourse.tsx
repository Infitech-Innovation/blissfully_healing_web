"use client";

import { useMemo, useState } from "react";
import {
  IconArrowLeft,
  IconBook,
  IconCheck,
  IconChevronRight,
  IconLoader,
  IconSquareCheck,
  IconVolume2,
} from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  useEnrolledCoursesDetails,
  useMarkLessonComplete,
} from "@/hooks/useCourses";
import { Chapter, Lesson, LessonBlocks } from "@/types/course.definations";
import CourseLearnSkeleton from "@/components/skeleton/CourseLearnSkeleton";

interface PageProps {
  id: string;
}

function getLessonType(lesson: Lesson) {
  const blocks = lesson.blocks ?? [];

  if (blocks.some((block) => block.video_url)) return "video";
  if (blocks.some((block) => block.audio_file)) return "audio";

  return "text";
}

function getPrimaryBlock(lesson: Lesson, type: string) {
  const blocks = lesson.blocks ?? [];

  if (type === "video") {
    return blocks.find((block) => block.video_url);
  }

  if (type === "audio") {
    return blocks.find((block) => block.audio_file);
  }

  return blocks.find((block) => block.text_content) ?? blocks[0];
}

function getTextBlocks(blocks: LessonBlocks[]) {
  return blocks
    .filter((block) => block.text_content)
    .sort((a, b) => a.order - b.order);
}

export default function CourseLearningPage({ id }: PageProps) {
  const { data: enrolledData, isLoading } = useEnrolledCoursesDetails(id);
  const markCompleteMutation = useMarkLessonComplete();

  const course = enrolledData?.course;
  const allLessons = useMemo(
    () => course?.chapters.flatMap((chapter: Chapter) => chapter.lessons) ?? [],
    [course],
  );

  const [currentLessonId, setCurrentLessonId] = useState<number | null>(null);
  const [optimisticCompletedIds, setOptimisticCompletedIds] = useState<number[]>(
    [],
  );
  const [activeTab, setActiveTab] = useState<"media" | "reflections">("media");

  const completedIds = useMemo(() => {
    const serverCompletedIds = enrolledData?.completed_lesson_ids ?? [];

    return Array.from(
      new Set([...serverCompletedIds, ...optimisticCompletedIds]),
    );
  }, [enrolledData?.completed_lesson_ids, optimisticCompletedIds]);

  if (isLoading) return <CourseLearnSkeleton />;

  if (!course || allLessons.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fffaf6] px-4 text-center text-sm text-[#7a6658]">
        No active learning lessons are available for this course yet.
      </div>
    );
  }

  const defaultLesson =
    allLessons.find((lesson: Lesson) => !completedIds.includes(lesson.id)) ??
    allLessons[0];

  const activeLesson =
    allLessons.find((lesson: Lesson) => lesson.id === currentLessonId) ??
    defaultLesson;

  const currentChapter = course.chapters.find((chapter: Chapter) =>
    chapter.lessons.some((lesson: Lesson) => lesson.id === activeLesson.id),
  );

  const lessonType = getLessonType(activeLesson);
  const primaryBlock = getPrimaryBlock(activeLesson, lessonType);
  const textBlocks = getTextBlocks(activeLesson.blocks ?? []);
  const isCurrentLessonComplete = completedIds.includes(activeLesson.id);

  const handleMarkComplete = () => {
    if (isCurrentLessonComplete || markCompleteMutation.isPending) return;

    markCompleteMutation.mutate(
      { slug: course.slug, id: activeLesson.id },
      {
        onSuccess: () => {
          setOptimisticCompletedIds((previous) =>
            previous.includes(activeLesson.id)
              ? previous
              : [...previous, activeLesson.id],
          );
        },
      },
    );
  };

  const handleNextLesson = () => {
    const currentIndex = allLessons.findIndex(
      (lesson: Lesson) => lesson.id === activeLesson.id,
    );

    if (currentIndex < allLessons.length - 1) {
      setCurrentLessonId(allLessons[currentIndex + 1].id);
      setActiveTab("media");
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaf6] text-[#3f342c] antialiased">
      <header className="sticky top-0 z-40 border-b border-[#eadfd4] bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-4">
            <Link
              href={`/user/courses/${id}`}
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-[#eadfd4] bg-white text-[#6f5c4f] transition hover:border-[#8f6249] hover:text-[#8f6249]"
            >
              <IconArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-0.5"
              />
            </Link>
            <div className="min-w-0">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#8f6249]">
                {course.title}
              </span>
              <h1 className="truncate font-serif text-[15px] font-medium text-[#2f251f]">
                Ch {currentChapter?.number}. {currentChapter?.title} &middot;{" "}
                {activeLesson.title}
              </h1>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {markCompleteMutation.isPending && (
              <IconLoader size={16} className="animate-spin text-[#b28b67]" />
            )}
            <span className="hidden text-xs text-[#7a6658] sm:inline">
              {completedIds.length} of {allLessons.length} Completed
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px] flex-col lg:min-h-[calc(100vh-64px)] lg:flex-row">
        <main className="flex-1 space-y-6 p-4 sm:p-6 lg:border-r lg:border-[#eadfd4] lg:p-8">
          <section className="relative overflow-hidden rounded-[8px] border border-[#eadfd4] bg-[#2f251f] shadow-[0_12px_35px_rgba(63,52,44,0.05)]">
            {lessonType === "video" && primaryBlock?.video_url && (
              <div className="aspect-video w-full bg-black">
                <iframe
                  src={primaryBlock.video_url}
                  title={activeLesson.title}
                  className="h-full w-full border-0 object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {lessonType === "audio" && primaryBlock?.audio_file && (
              <div className="flex aspect-video w-full flex-col items-center justify-center bg-gradient-to-br from-[#3f342c] to-[#2f251f] p-6 text-center text-white">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#eadfd4]">
                  <IconVolume2 size={28} />
                </div>
                <h3 className="font-serif text-lg font-medium tracking-wide">
                  {activeLesson.title}
                </h3>
                <p className="mt-1 max-w-sm text-xs text-[#b28b67]">
                  {activeLesson.subtitle}
                </p>
                <audio
                  controls
                  src={primaryBlock.audio_file}
                  className="mt-8 w-full max-w-md"
                >
                  <track kind="captions" />
                </audio>
              </div>
            )}

            {lessonType === "text" && (
              <div className="flex aspect-video w-full flex-col items-center justify-center bg-[#f8f0e8] p-8 text-center text-[#3f342c]">
                <IconBook size={36} className="mb-3 text-[#8f6249]" />
                <h3 className="max-w-md font-serif text-xl font-semibold leading-snug text-[#2f251f]">
                  {activeLesson.title}
                </h3>
                <p className="mt-2 max-w-xs text-xs leading-relaxed text-[#7a6658]">
                  {activeLesson.subtitle ||
                    "This lesson contains written learning material below."}
                </p>
              </div>
            )}
          </section>

          <section className="space-y-4">
            <div className="flex border-b border-[#eadfd4]">
              {[
                { id: "media", label: "Lesson Notes" },
                { id: "reflections", label: "Reflection Guidelines" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setActiveTab(tab.id as "media" | "reflections")
                  }
                  className={cn(
                    "-mb-px border-b-2 px-4 pb-3 text-xs font-bold uppercase tracking-wider transition-all duration-200",
                    activeTab === tab.id
                      ? "border-[#8f6249] text-[#8f6249]"
                      : "border-transparent text-[#7a6658] hover:text-[#2f251f]",
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="min-h-[180px] rounded-[8px] border border-[#eadfd4] bg-white p-5 shadow-sm sm:p-6">
              {activeTab === "media" ? (
                <article className="space-y-4 text-xs leading-[1.75] text-[#5c4d42] sm:text-sm">
                  <h3 className="font-serif text-base font-semibold text-[#2f251f]">
                    {activeLesson.title} Overview
                  </h3>
                  {textBlocks.length > 0 ? (
                    textBlocks.map((block) => (
                      <p key={block.id}>{block.text_content}</p>
                    ))
                  ) : (
                    <p>
                      Use the lesson player above to work through this module.
                      Notes for this lesson will appear here when available.
                    </p>
                  )}
                </article>
              ) : (
                <article className="space-y-3 text-xs text-[#5c4d42] sm:text-sm">
                  <h3 className="font-serif text-base font-semibold text-[#2f251f]">
                    Internal Check Questions
                  </h3>
                  <ul className="list-decimal space-y-1.5 pl-5 marker:font-bold marker:text-[#8f6249]">
                    <li>What changed in your attention during this lesson?</li>
                    <li>What practice or idea feels useful to revisit?</li>
                  </ul>
                </article>
              )}
            </div>
          </section>

          <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[#eadfd4] pt-4">
            <button
              type="button"
              onClick={handleMarkComplete}
              disabled={isCurrentLessonComplete || markCompleteMutation.isPending}
              className={cn(
                "inline-flex min-h-11 items-center gap-2 rounded-[4px] px-5 text-xs font-bold uppercase tracking-wider transition-all disabled:cursor-not-allowed",
                isCurrentLessonComplete
                  ? "border border-[#2f9e44] bg-[#2f9e44]/10 text-[#2f9e44]"
                  : "bg-[#8f6249] text-white shadow-sm hover:bg-[#3f342c] disabled:opacity-60",
              )}
            >
              {markCompleteMutation.isPending ? (
                <IconLoader size={16} className="animate-spin" />
              ) : (
                <IconSquareCheck size={16} />
              )}
              {isCurrentLessonComplete ? "Marked Complete" : "Mark Complete"}
            </button>

            <button
              type="button"
              onClick={handleNextLesson}
              disabled={activeLesson.id === allLessons[allLessons.length - 1]?.id}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-[4px] border border-[#eadfd4] bg-white px-4 text-xs font-bold uppercase tracking-wider text-[#3f342c] transition hover:bg-[#f8f0e8] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <span>Next Lesson</span>
              <IconChevronRight size={14} />
            </button>
          </footer>
        </main>

        <aside className="max-h-[calc(100vh-64px)] w-full shrink-0 space-y-4 overflow-y-auto bg-white p-4 sm:p-6 lg:sticky lg:top-16 lg:w-[360px] lg:bg-white/40 lg:p-8">
          <div>
            <h2 className="font-serif text-lg font-semibold text-[#2f251f]">
              Curriculum
            </h2>
            <p className="mt-0.5 text-[11px] text-[#7a6658]">
              Track your progress through this course.
            </p>
          </div>

          <div className="space-y-6">
            {course.chapters.map((chapter: Chapter) => (
              <div key={chapter.id} className="space-y-2">
                <div className="flex items-center justify-between gap-3 border-b border-[#eadfd4]/60 pb-1.5">
                  <span className="truncate font-serif text-xs font-semibold text-[#2f251f]">
                    Ch {chapter.number}. {chapter.title}
                  </span>
                  <span className="shrink-0 font-mono text-[10px] font-bold text-[#b28b67]">
                    {
                      chapter.lessons.filter((lesson: Lesson) =>
                        completedIds.includes(lesson.id),
                      ).length
                    }
                    /{chapter.lessons.length}
                  </span>
                </div>

                <div className="space-y-1">
                  {chapter.lessons.map((lesson: Lesson) => {
                    const isSelected = lesson.id === activeLesson.id;
                    const isDone = completedIds.includes(lesson.id);
                    const typeLabel = getLessonType(lesson);

                    return (
                      <button
                        key={lesson.id}
                        type="button"
                        onClick={() => {
                          setCurrentLessonId(lesson.id);
                          setActiveTab("media");
                        }}
                        className={cn(
                          "group flex w-full items-start gap-3 rounded-[4px] border p-2.5 text-left text-xs transition-all",
                          isSelected
                            ? "border-[#eadfd4] bg-[#f8f0e8] text-[#2f251f]"
                            : "border-transparent bg-white text-[#3f342c] hover:bg-[#fffaf6]",
                        )}
                      >
                        <div className="mt-0.5 shrink-0">
                          {isDone ? (
                            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#2f9e44] text-white">
                              <IconCheck size={10} strokeWidth={3} />
                            </div>
                          ) : (
                            <div
                              className={cn(
                                "flex h-4 w-4 items-center justify-center rounded-full border text-[9px] font-bold uppercase",
                                isSelected
                                  ? "border-[#8f6249] bg-white text-[#8f6249]"
                                  : "border-[#b8a090] text-[#b8a090]",
                              )}
                            >
                              {typeLabel[0]}
                            </div>
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p
                            className={cn(
                              "truncate font-medium leading-tight",
                              isSelected && "font-semibold text-[#8f6249]",
                              isDone &&
                                "text-[#7a6658] line-through opacity-75 decoration-[#b8a090]/40",
                            )}
                          >
                            {lesson.title}
                          </p>
                          <span className="mt-0.5 block text-[10px] capitalize text-[#7a6658]">
                            {lesson.duration} &middot; {typeLabel} module
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
