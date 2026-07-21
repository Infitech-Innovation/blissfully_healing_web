const shimmer = "animate-pulse rounded bg-[#efe8df]";

function SkeletonBlock({ className }: { className: string }) {
  return <div className={`${shimmer} ${className}`} />;
}

function JoinedGroupCardSkeleton() {
  return (
    <div className="relative mb-4 overflow-hidden rounded-[12px] border border-[#eadfd4] bg-white shadow-[0_4px_20px_rgba(63,52,44,0.04)]">
      <div className="absolute left-0 top-0 h-[3px] w-full bg-[#eadfd4]" />

      <div className="relative flex cursor-default flex-col items-start justify-between gap-4 p-5 sm:p-6 lg:flex-row lg:items-center">
        <div className="flex w-full min-w-0 gap-6 lg:w-auto">
          <SkeletonBlock className="h-14 w-14 shrink-0 rounded-[10px]" />

          <div className="min-w-0 flex-1">
            <SkeletonBlock className="mb-2 h-3 w-32" />
            <SkeletonBlock className="mb-2 h-7 w-full max-w-sm" />
            <SkeletonBlock className="h-3 w-44" />
          </div>
        </div>

        <div className="flex w-full items-center justify-between gap-5 lg:w-auto">
          <div className="space-y-2 text-right">
            <SkeletonBlock className="ml-auto h-3 w-24" />
            <SkeletonBlock className="ml-auto h-4 w-28" />
          </div>

          <SkeletonBlock className="h-3 w-3 rounded-full" />
          <SkeletonBlock className="h-5 w-5 rounded-[4px]" />
        </div>
      </div>

      <div className="relative grid gap-4 border-t border-[#eadfd4]/60 bg-gradient-to-b from-[#fffaf6] to-white px-6 py-5 sm:grid-cols-4">
        {[0, 1, 2, 3].map((item) => (
          <div
            key={item}
            className="relative flex flex-col gap-2 border-[#eadfd4]/50 pr-4 sm:border-r sm:last:border-r-0 sm:last:pr-0"
          >
            <SkeletonBlock className="h-3 w-20" />
            <SkeletonBlock className="h-4 w-28 max-w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MyJoinedGroup() {
  return (
    <div aria-busy="true" aria-label="Loading joined groups">
      {[0, 1, 2].map((item) => (
        <JoinedGroupCardSkeleton key={item} />
      ))}
    </div>
  );
}
