// "use client";

// import { useParams } from "next/navigation";
// import MyCourseDetail from "../_components/MyCourseDetail";
// import Link from "next/link";
// import { useCourseDetails } from "@/app/(features)/(portfolio)/courses/courses.services";

// export default function CourseDetailsPage() {
//   const params = useParams();
//   const slug = params.slug as string;

//   const { data, isLoading } = useCourseDetails(slug);
//   const course = Array.isArray(data) ? data[0] : data;

//   if (isLoading) return <div>Loading...</div>;
//   if (!course) {
//     return (
//       <div className="flex h-screen flex-col items-center justify-center gap-4 bg-[#fffaf6] px-4 text-center">
//         <p className="text-xl font-medium text-[#2f251f]">Course not found</p>
//         <p className="max-w-xs text-sm text-[#6f5c4f]">
//           It looks like this course doesnt exist or you dont have access to it
//           yet.
//         </p>
//         <Link
//           href="/dashboard"
//           className="mt-2 inline-block rounded-[8px] bg-[#8f6249] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#6f5c4f]"
//         >
//           Go Home
//         </Link>
//       </div>
//     );
//   }

//   return <MyCourseDetail course={course} />;
// }
