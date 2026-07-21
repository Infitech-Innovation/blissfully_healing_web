import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/app/seo";
import { getCoursesDetails } from "@/services/courses.endpoints";

type CourseLayoutProps = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: CourseLayoutProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const course = await getCoursesDetails(slug);

    return createMetadata({
      title: course.title,
      description: course.short_description || course.full_description || "Explore this Blissfully Healing course.",
      path: `/courses/${slug}`,
      image: course.image || "/opengraph-image.jpg",
    });
  } catch {
    return createMetadata({
      title: "Course Details",
      description: "Explore this Blissfully Healing course.",
      path: `/courses/${slug}`,
    });
  }
}

export default function CourseDetailsLayout({ children }: CourseLayoutProps) {
  return children;
}
