"use client";

import { useState } from "react";
import {
  IconArrowLeft,
  IconCheck,
  IconPlayerPlay,
  IconPlayerPause,
  IconVolume2,
  IconBook,
  IconChevronRight,
  IconSquareCheck,
  IconLoader,
} from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  EnrolledCourse,
  Chapter,
  Lesson,
} from "@/app/(features)/(portfolio)/courses/definations";

interface WorkspacePlayerProps {
  course: EnrolledCourse;
}

export default function CourseLearningPage({ course }: WorkspacePlayerProps) {
  // Flattening lessons safely by enforcing strict mapping types
  const allLessons = course.chapters.flatMap((ch: Chapter) => ch.lessons);

  const [currentLessonId, setCurrentLessonId] = useState<string>(
    course.lastAccessedLessonId || allLessons[0]?.id || "",
  );
  const [completedIds, setCompletedIds] = useState<string[]>(
    course.completedLessonIds || [],
  );
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeTab, setActiveTab] = useState<"media" | "reflections">("media");
  const [isSyncing, setIsSyncing] = useState(false);

  // Finding structural current active lesson metrics mapping to your type cleanly
  const activeLesson = allLessons.find((l: Lesson) => l.id === currentLessonId);

  const currentChapter = course.chapters.find((ch: Chapter) =>
    ch.lessons.some((l: Lesson) => l.id === currentLessonId),
  );

  if (!activeLesson) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fffaf6] text-sm text-[#7a6658]">
        No active structural learning tracks initialized.
      </div>
    );
  }

  // Fallback pattern logic assessing variant types organically if not explicitly assigned
  const lessonType =
    activeLesson.contentType || (activeLesson.videoUrl ? "video" : "text");

  const handleToggleComplete = async (lessonId: string) => {
    setIsSyncing(true);
    setTimeout(() => {
      setCompletedIds((prev) =>
        prev.includes(lessonId)
          ? prev.filter((id) => id !== lessonId)
          : [...prev, lessonId],
      );
      setIsSyncing(false);
    }, 400);
  };

  const handleNextLesson = () => {
    const currentIndex = allLessons.findIndex(
      (l: Lesson) => l.id === currentLessonId,
    );
    if (currentIndex < allLessons.length - 1) {
      setCurrentLessonId(allLessons[currentIndex + 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaf6] text-[#3f342c] antialiased">
      {/* 1. Header Control Ribbon */}
      <header className="sticky top-0 z-40 border-b border-[#eadfd4] bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4 min-w-0">
            <Link
              href={`/user/courses`}
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

          <div className="flex items-center gap-2 shrink-0">
            {isSyncing && (
              <IconLoader size={16} className="animate-spin text-[#b28b67]" />
            )}
            <span className="hidden text-xs text-[#7a6658] sm:inline">
              {completedIds.length} of {allLessons.length} Completed
            </span>
          </div>
        </div>
      </header>

      {/* 2. Unified Layout Pane Container */}
      <div className="mx-auto flex max-w-[1400px] flex-col lg:flex-row min-h-[calc(100vh-64px)]">
        {/* LEFT PANE: Multimedia Display Engine Canvas */}
        <main className="flex-1 lg:border-r lg:border-[#eadfd4] p-4 sm:p-6 lg:p-8 space-y-6">
          <section className="relative overflow-hidden rounded-[8px] border border-[#eadfd4] bg-[#2f251f] shadow-[0_12px_35px_rgba(63,52,44,0.05)]">
            {/* VARIANT A: Video Component Viewport Rendering */}
            {lessonType === "video" && (
              <div className="aspect-video w-full bg-black">
                <iframe
                  src={
                    activeLesson.videoUrl ||
                    "https://www.youtube.com/embed/dQw4w9WgXcQ"
                  }
                  title={activeLesson.title}
                  className="h-full w-full object-cover border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {/* VARIANT B: Somatic Audio Component Deck Module */}
            {lessonType === "audio" && (
              <div className="flex aspect-video w-full flex-col items-center justify-center bg-gradient-to-br from-[#3f342c] to-[#2f251f] p-6 text-center text-white">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#eadfd4]">
                  <IconVolume2 size={28} />
                </div>
                <h3 className="font-serif text-lg font-medium tracking-wide">
                  {activeLesson.title}
                </h3>
                <p className="mt-1 text-xs text-[#b28b67] max-w-sm">
                  {activeLesson.subtitle}
                </p>

                <div className="mt-8 flex items-center gap-4 rounded-full bg-white/10 px-6 py-3 backdrop-blur border border-white/5">
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8f6249] text-white transition hover:scale-105"
                  >
                    {isPlayingAudio ? (
                      <IconPlayerPause size={18} fill="currentColor" />
                    ) : (
                      <IconPlayerPlay
                        size={18}
                        className="ml-0.5"
                        fill="currentColor"
                      />
                    )}
                  </button>
                  <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full bg-[#eadfd4] transition-all",
                        isPlayingAudio ? "w-1/2 duration-[10000ms]" : "w-1/12",
                      )}
                    />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider opacity-80">
                    {activeLesson.duration}
                  </span>
                </div>
              </div>
            )}

            {/* VARIANT C: Pure Text Context Sheet Panel Frame */}
            {lessonType === "text" && (
              <div className="flex aspect-video w-full flex-col items-center justify-center bg-[#f8f0e8] p-8 text-center text-[#3f342c]">
                <IconBook size={36} className="text-[#8f6249] mb-3" />
                <h3 className="font-serif text-xl font-semibold text-[#2f251f] max-w-md leading-snug">
                  {activeLesson.title}
                </h3>
                <p className="mt-2 text-xs text-[#7a6658] max-w-xs leading-relaxed">
                  {activeLesson.subtitle ||
                    "This lesson contains analytical ledger components outlined below."}
                </p>
              </div>
            )}
          </section>

          {/* Context Tab Headers Workspace */}
          <section className="space-y-4">
            <div className="flex border-b border-[#eadfd4]">
              {[
                { id: "media", label: "Module Context & Ledger Notes" },
                { id: "reflections", label: "Somatic Reflection Guidelines" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =>
                    setActiveTab(tab.id as "media" | "reflections")
                  }
                  className={cn(
                    "border-b-2 px-4 pb-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 -mb-px",
                    activeTab === tab.id
                      ? "border-[#8f6249] text-[#8f6249]"
                      : "border-transparent text-[#7a6658] hover:text-[#2f251f]",
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-[8px] border border-[#eadfd4] p-5 sm:p-6 shadow-sm min-h-[180px]">
              {activeTab === "media" ? (
                <article className="prose max-w-none text-xs sm:text-sm text-[#5c4d42] leading-[1.75] space-y-4">
                  <h3 className="font-serif text-base font-semibold text-[#2f251f]">
                    {activeLesson.title} Overview
                  </h3>
                  <p>
                    {activeLesson.textContent ||
                      "Welcome to this intentional module section. Ensure your alignment posture is upright, open, and free of friction arrays before stepping your perception into the materials."}
                  </p>
                </article>
              ) : (
                <article className="text-xs sm:text-sm text-[#5c4d42] space-y-3">
                  <h3 className="font-serif text-base font-semibold text-[#2f251f]">
                    Internal Check Questions
                  </h3>
                  <ul className="list-decimal pl-5 space-y-1.5 marker:text-[#8f6249] marker:font-bold">
                    <li>
                      Where did you identify sudden shifts or blocks in
                      attention patterns?
                    </li>
                    <li>
                      What physical sensations emerged when encountering these
                      core paradigms?
                    </li>
                  </ul>
                </article>
              )}
            </div>
          </section>

          {/* Action Navigation Footer Control Blocks */}
          <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[#eadfd4] pt-4">
            <button
              onClick={() => handleToggleComplete(currentLessonId)}
              className={cn(
                "inline-flex items-center gap-2 min-h-11 rounded-[4px] px-5 text-xs font-bold uppercase tracking-wider transition-all",
                completedIds.includes(currentLessonId)
                  ? "bg-[#2f9e44]/10 border border-[#2f9e44] text-[#2f9e44] hover:bg-[#2f9e44]/15"
                  : "bg-[#8f6249] text-white hover:bg-[#3f342c] shadow-sm",
              )}
            >
              <IconSquareCheck size={16} />
              {completedIds.includes(currentLessonId)
                ? "Marked Complete"
                : "Complete & Synchronize"}
            </button>

            <button
              onClick={handleNextLesson}
              disabled={
                currentLessonId === allLessons[allLessons.length - 1]?.id
              }
              className="inline-flex items-center gap-1.5 min-h-11 border border-[#eadfd4] bg-white rounded-[4px] px-4 text-xs font-bold uppercase tracking-wider text-[#3f342c] transition hover:bg-[#f8f0e8] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span>Next Lesson</span>
              <IconChevronRight size={14} />
            </button>
          </footer>
        </main>

        {/* RIGHT PANE: Curriculum Sidebar Directory */}
        <aside className="w-full lg:w-[360px] bg-white lg:bg-white/40 shrink-0 p-4 sm:p-6 lg:p-8 space-y-4 overflow-y-auto max-h-[calc(100vh-64px)] lg:sticky lg:top-16">
          <div>
            <h2 className="font-serif text-lg font-semibold text-[#2f251f]">
              Curriculum Ledger
            </h2>
            <p className="text-[11px] text-[#7a6658] mt-0.5">
              Track your interactive course itinerary milestones.
            </p>
          </div>

          <div className="space-y-6">
            {course.chapters.map((chapter: Chapter) => (
              <div key={chapter.id} className="space-y-2">
                <div className="flex items-center justify-between gap-3 border-b border-[#eadfd4]/60 pb-1.5">
                  <span className="font-serif text-xs font-semibold text-[#2f251f] truncate">
                    Ch {chapter.number}. {chapter.title}
                  </span>
                  <span className="text-[10px] font-mono text-[#b28b67] shrink-0 font-bold">
                    {
                      chapter.lessons.filter((l: Lesson) =>
                        completedIds.includes(l.id),
                      ).length
                    }
                    /{chapter.lessons.length}
                  </span>
                </div>

                <div className="space-y-1">
                  {chapter.lessons.map((lesson: Lesson) => {
                    const isSelected = lesson.id === currentLessonId;
                    const isDone = completedIds.includes(lesson.id);
                    const typeLabel =
                      lesson.contentType ||
                      (lesson.videoUrl ? "video" : "text");

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          setCurrentLessonId(lesson.id);
                          setIsPlayingAudio(false);
                        }}
                        className={cn(
                          "w-full text-left flex items-start gap-3 p-2.5 rounded-[4px] border transition-all text-xs group",
                          isSelected
                            ? "bg-[#f8f0e8] border-[#eadfd4] text-[#2f251f]"
                            : "bg-white border-transparent text-[#3f342c] hover:bg-[#fffaf6]",
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
                                "text-[#7a6658] opacity-75 line-through decoration-[#b8a090]/40",
                            )}
                          >
                            {lesson.title}
                          </p>
                          <span className="text-[10px] text-[#7a6658] block mt-0.5">
                            {lesson.duration} &middot;{" "}
                            <span className="capitalize">
                              {typeLabel} Module
                            </span>
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
