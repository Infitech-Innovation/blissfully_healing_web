"use client";
import { EnrolledCourse } from "@/app/(features)/(portfolio)/courses/definations";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  course: EnrolledCourse;
}

export default function MyCourseCard({ course }: Props) {
  console.log("my coures", course);

  const coursedetail = course.course;
  const percent = course.progress;
  const completed = coursedetail.lesson_count
    ? Math.round((percent / 100) * coursedetail.lesson_count)
    : null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white shadow-[0_18px_45px_rgba(63,52,44,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(63,52,44,0.14)]">
      <div className="relative h-60 overflow-hidden bg-[#f8f0e8]">
        <Image
          src={coursedetail.image}
          alt={coursedetail.title}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2f251f]/50 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#8f6249] shadow-sm backdrop-blur">
          {coursedetail.category.name}
        </div>
        <div className="absolute bottom-4 left-4 rounded-full bg-[#2f251f]/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
          {coursedetail.difficulty}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-center justify-between gap-3 text-sm text-[#7a6658]">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-[#8f6249]" />
            {coursedetail.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BookOpen className="h-4 w-4 text-[#8f6249]" />
            {coursedetail.lesson_count} lessons
          </span>
        </div>

        <h3 className="text-xl font-semibold leading-snug text-[#2f251f]">
          {coursedetail.title}
        </h3>

        <div className="mt-auto flex flex-col gap-4 border-t border-[#eadfd4] pt-5">
          <div>
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold text-[#2f251f]">
                {percent}% Progress
              </p>
              <p className="text-sm text-[#7a6658]">
                {completed ?? "-"} of {coursedetail.lesson_count} lessons
              </p>
            </div>

            <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-[#efe8df]">
              <div
                className="h-full rounded-full bg-[#8f6249] transition-all duration-300"
                style={{ width: `${Math.min(100, Math.max(0, percent))}%` }}
              />
            </div>
          </div>

          <Link
            href={`/user/courses/${course.id}`}
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#8f6249] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#744d39]"
          >
            Continue Learning
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
