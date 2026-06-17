"use client";

import {useParams } from "next/navigation";
import CourseDetail from "./CourseDetail";
import { useCourseDetails } from "../courses.services";

export default function CourseDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { data, isLoading } = useCourseDetails(slug);
  const course = Array.isArray(data) ? data[0] : data;

  if (isLoading) return <div>Loading...</div>;
  if (!course) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg text-[#6f5c4f]">Course not found</p>
      </div>
    );
  }

  return <CourseDetail course={course} />;
}
