import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";

import MyCourseDetail from "@/features/private/courses/MyCourseDetail";
// import { getCourses } from "@/services/endpoints/courses.endpoints";
interface PageProps {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = createMetadata({
  title: "My Course Details",
  description: "View your private Blissfully Healing course details.",
  path: "/user/courses/details",
  noIndex: true,
});

// export async function generateStaticParams() {
//   const { results } = await getCourses(1);

//   return results.map((course) => ({
//     id: course.id,
//   }));
// }

export default async function CourseDetailsPage({ params }: PageProps) {
  const { id: courseId } = await params;

  return <MyCourseDetail id={courseId} />;
}
