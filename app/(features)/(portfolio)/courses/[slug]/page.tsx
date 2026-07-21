"use client";

import CourseDetailsSkeleton from "@/components/skeleton/CourseDetailsSkeleton";
import CourseDetail from "@/features/public/courses/CourseDetail";
import { useCourseDetails } from "@/hooks/useCourses";
// import { getCourses } from "@/services/endpoints/courses.endpoints";
import { useParams } from "next/navigation";

// export async function generateStaticParams() {
//   const { results } = await getCourses(1);

//   return results.map((course) => ({
//     slug: course.slug,
//   }));
// }

export default function CourseDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { data, isLoading } = useCourseDetails(slug);
  const course = Array.isArray(data) ? data[0] : data;

  if (isLoading) return <CourseDetailsSkeleton />;
  if (!course) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg text-[#6f5c4f]">Course not found</p>
      </div>
    );
  }

  return <CourseDetail course={course} />;
}
