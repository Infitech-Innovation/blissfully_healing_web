
import MyCourseDetail from "@/features/private/courses/MyCourseDetail";
// import { getCourses } from "@/services/endpoints/courses.endpoints";
interface PageProps {
  params: Promise<{ id: string }>;
}

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
