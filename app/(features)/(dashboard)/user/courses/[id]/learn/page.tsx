import CourseLearningPage from "@/features/private/courses/LearnCourse";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function LearnPage({ params }: PageProps) {
  const { id } = await params;
  
  return <CourseLearningPage id={id} />;
}
