"use client";

import CourseDetail from "@/features/public/courses/CourseDetail";
import { useCourseDetails } from "@/services/businessservices/courses.services";
import {useParams } from "next/navigation";

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
