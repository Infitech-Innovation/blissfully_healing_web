"use client";

import { useParams } from "next/navigation";
import MyCourseDetail from "../_components/MyCourseDetail";
import { courses } from "@/app/(features)/(portfolio)/courses/courseData";

export default function EnrolledCoursePage() {
  const params = useParams();
  const slug = params.slug as string;

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg text-[#6f5c4f]">Course not found</p>
      </div>
    );
  }

  return <MyCourseDetail course={course} />;
}
