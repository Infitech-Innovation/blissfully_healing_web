// app/retreats/[slug]/page.tsx
"use client";

import { RetreatDetailSkeleton } from "@/components/skeleton/RetreatDetails";
import { RetreatDetailView } from "@/features/public/retreats/RetreatDetails";
import { useRetreatDetails } from "@/hooks/useRetreats";
// import { getRetreats } from "@/services/endpoints/retreats.endpoints";
import { useParams, notFound } from "next/navigation";

// export async function generateStaticParams() {
//   const { results } = await getRetreats(1);

//   return results.map((retreat) => ({
//     slug: retreat.slug,
//   }));
// }

export default function RetreatDetailPage() {
  const { slug } = useParams() as { slug: string };
  const { data: retreat, isLoading, error } = useRetreatDetails(slug);

  if (isLoading) {
    return <RetreatDetailSkeleton />;
  }

  if (error || !retreat) {
    notFound();
  }

  return <RetreatDetailView retreat={retreat} />;
}