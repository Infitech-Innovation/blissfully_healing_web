"use client";

import { ArrowRight, BookOpen, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Course } from "../definations";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white shadow-[0_18px_45px_rgba(63,52,44,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(63,52,44,0.14)]">
      <div className="relative h-60 overflow-hidden bg-[#f8f0e8] ">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2f251f]/50 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#8f6249] shadow-sm backdrop-blur">
          {course.category.name}
        </div>
        <div className="absolute bottom-4 left-4 rounded-full bg-[#2f251f]/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
          {course.difficulty}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-center justify-between gap-3 text-sm text-[#7a6658]">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-[#8f6249]" />
            {course.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BookOpen className="h-4 w-4 text-[#8f6249]" />
            {course.lesson_count} lessons
          </span>
        </div>

        <h3 className="text-xl font-semibold leading-snug text-[#2f251f]">
          {course.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6f5c4f]">
          {course.short_description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-[#eadfd4] pt-5">
          <p className="font-semibold text-[#2f251f]">KES {course.price}</p>
          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center gap-2 rounded-sm bg-[#8f6249] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#744d39]"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
