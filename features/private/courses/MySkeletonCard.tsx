export default function MyCourseCardSkeleton() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white p-0 shadow-[0_18px_45px_rgba(63,52,44,0.04)]">
      {/* Image Skeleton */}
      <div className="relative h-60 w-full animate-pulse bg-[#efe8df]" />

      {/* Content Skeleton */}
      <div className="flex flex-1 flex-col p-5">
        {/* Meta Row (Duration & Lessons) */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="h-4 w-20 animate-pulse rounded bg-[#efe8df]" />
          <div className="h-4 w-24 animate-pulse rounded bg-[#efe8df]" />
        </div>

        {/* Title Lines */}
        <div className="space-y-2">
          <div className="h-6 w-3/4 animate-pulse rounded bg-[#efe8df]" />
          <div className="h-6 w-1/2 animate-pulse rounded bg-[#efe8df]" />
        </div>

        {/* Bottom Section */}
        <div className="mt-auto flex flex-col gap-4 border-t border-[#eadfd4] pt-5">
          {/* Progress Bar Label Info */}
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="h-5 w-24 animate-pulse rounded bg-[#efe8df]" />
              <div className="h-4 w-28 animate-pulse rounded bg-[#efe8df]" />
            </div>
            {/* Progress Bar track */}
            <div className="mt-2.5 h-2 w-full animate-pulse rounded-full bg-[#efe8df]" />
          </div>

          {/* CTA Button Skeleton */}
          <div className="h-[40px] w-full animate-pulse rounded-sm bg-[#efe8df]" />
        </div>
      </div>
    </div>
  );
}