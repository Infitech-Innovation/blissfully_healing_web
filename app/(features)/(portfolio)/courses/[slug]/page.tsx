import { notFound } from "next/navigation";
import { courses } from "../courseData";
import CourseDetail from "./CourseDetail";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return {
      title: "Course Details | Blissfully Healing",
    };
  }

  return {
    title: `${course.title} | Blissfully Healing`,
    description: course.shortDescription,
  };
}

export default async function CourseDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  return <CourseDetail course={course} />;
}
