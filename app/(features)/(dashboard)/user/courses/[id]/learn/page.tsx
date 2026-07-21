import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import CourseLearningPage from "@/features/private/courses/LearnCourse";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = createMetadata({
  title: "Learn Course",
  description: "Continue your private Blissfully Healing course lessons.",
  path: "/user/courses/learn",
  noIndex: true,
});

export default async function LearnPage({ params }: PageProps) {
  const { id } = await params;
  
  return <CourseLearningPage id={id} />;
}
