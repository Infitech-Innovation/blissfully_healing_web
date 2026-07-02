// app/retreats/[slug]/page.tsx
"use client";

import { RetreatDetailSkeleton } from "@/components/skeleton/RetreatDetails";
import { RetreatDetailView } from "@/features/public/retreats/RetreatDetails";
import { useRetreatDetails } from "@/services/businessservices/retreats.services";
import { useParams, notFound } from "next/navigation";

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