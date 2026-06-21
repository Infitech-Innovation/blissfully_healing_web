
import MyCourseDetail from "../_components/MyCourseDetail";
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CourseDetailsPage({ params }: PageProps) {
  const { id: courseId } = await params;

  return <MyCourseDetail id={courseId} />;
}
