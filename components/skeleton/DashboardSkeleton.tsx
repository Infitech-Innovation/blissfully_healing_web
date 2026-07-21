const shimmer = "animate-pulse rounded bg-[#efe8df]";

function SkeletonBlock({ className }: { className: string }) {
  return <div className={`${shimmer} ${className}`} />;
}

function SectionTitleSkeleton() {
  return (
    <div className="mb-4">
      <SkeletonBlock className="h-3 w-32" />
    </div>
  );
}

function StatsCardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white p-5 shadow-[0_18px_45px_rgba(63,52,44,0.04)]">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <SkeletonBlock className="mb-3 h-3 w-28" />
          <SkeletonBlock className="mb-3 h-10 w-16" />
          <SkeletonBlock className="h-3 w-full max-w-44" />
          <SkeletonBlock className="mt-2 h-3 w-4/5 max-w-36" />
        </div>
        <SkeletonBlock className="h-11 w-11 shrink-0 rounded-[6px]" />
      </div>
    </div>
  );
}

function LearningProgressSkeleton() {
  return (
    <div className="rounded-[8px] border border-[#eadfd4] bg-white shadow-[0_12px_30px_rgba(63,52,44,0.02)]">
      <div className="flex items-start justify-between gap-4 p-6 pb-4">
        <div>
          <SkeletonBlock className="mb-3 h-6 w-44" />
          <SkeletonBlock className="h-3 w-52" />
        </div>
        <SkeletonBlock className="h-7 w-24 rounded-[4px]" />
      </div>

      <div className="space-y-6 p-6 pt-0">
        <div className="flex items-center gap-4 rounded-[6px] border border-[#eadfd4] bg-[#fffaf6] p-4">
          <SkeletonBlock className="h-14 w-14 shrink-0 rounded-full" />
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex items-center justify-between gap-4">
              <SkeletonBlock className="h-4 w-36" />
              <SkeletonBlock className="h-4 w-12" />
            </div>
            <SkeletonBlock className="h-2 w-full rounded-full" />
          </div>
        </div>

        <div className="pt-2">
          <div className="mb-4 flex items-center justify-between gap-4">
            <SkeletonBlock className="h-3 w-32" />
            <SkeletonBlock className="h-3 w-16" />
          </div>

          <div className="space-y-4">
            {[0, 1, 2, 3].map((item) => (
              <div key={item} className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <SkeletonBlock className="h-4 w-2/5" />
                  <SkeletonBlock className="h-4 w-28" />
                </div>
                <SkeletonBlock className="h-1.5 w-full rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivitySkeleton() {
  return (
    <div className="rounded-[8px] border border-[#eadfd4] bg-white shadow-[0_12px_30px_rgba(63,52,44,0.02)]">
      <div className="p-6 pb-4">
        <SkeletonBlock className="mb-3 h-5 w-36" />
        <SkeletonBlock className="h-3 w-56" />
      </div>

      <div className="space-y-0 p-6 pt-0">
        {[0, 1, 2, 3, 4].map((item) => (
          <div key={item} className="relative flex gap-3 pb-5 last:pb-0">
            {item !== 4 && (
              <div className="absolute bottom-0 left-5 top-10 w-px bg-[#eadfd4]" />
            )}
            <SkeletonBlock className="relative z-10 h-10 w-10 shrink-0 rounded-full" />
            <div className="min-w-0 flex-1 pt-1.5">
              <SkeletonBlock className="mb-2 h-4 w-4/5" />
              <SkeletonBlock className="mb-2 h-3 w-3/5" />
              <SkeletonBlock className="h-3 w-24" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UpcomingEventsSkeleton() {
  return (
    <div className="rounded-[8px] border border-[#eadfd4] bg-white shadow-[0_12px_30px_rgba(63,52,44,0.02)]">
      <div className="p-6 pb-4">
        <SkeletonBlock className="mb-3 h-5 w-36" />
        <SkeletonBlock className="h-3 w-64 max-w-full" />
      </div>

      <div className="space-y-3 p-6 pt-0">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className="flex gap-3 rounded-[8px] border border-[#eadfd4] bg-[#fffaf6] p-4"
          >
            <SkeletonBlock className="h-10 w-10 shrink-0 rounded-[6px]" />
            <div className="min-w-0 flex-1">
              <div className="mb-2 flex items-start justify-between gap-3">
                <SkeletonBlock className="h-4 w-3/5" />
                <SkeletonBlock className="h-5 w-16 rounded-full" />
              </div>
              <SkeletonBlock className="mb-2 h-3 w-32" />
              <SkeletonBlock className="h-3 w-44" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AchievementsSkeleton() {
  return (
    <div className="rounded-[8px] border border-[#eadfd4] bg-[#fffaf6] shadow-[0_12px_30px_rgba(63,52,44,0.02)]">
      <div className="flex items-start justify-between gap-4 p-6 pb-4">
        <div>
          <SkeletonBlock className="mb-3 h-6 w-36" />
          <SkeletonBlock className="h-3 w-32" />
        </div>
        <SkeletonBlock className="h-7 w-16 rounded-[4px]" />
      </div>

      <div className="grid grid-cols-1 gap-3 p-6 pt-0 sm:grid-cols-2">
        {[0, 1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex gap-3 rounded-[6px] border border-[#eadfd4] bg-white p-4"
          >
            <SkeletonBlock className="h-10 w-10 shrink-0 rounded-[6px]" />
            <div className="min-w-0 flex-1">
              <SkeletonBlock className="mb-2 h-4 w-3/4" />
              <SkeletonBlock className="mb-2 h-3 w-full" />
              <SkeletonBlock className="h-3 w-20" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div
      className="min-h-screen bg-background"
      aria-busy="true"
      aria-label="Loading dashboard"
    >
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl dark:bg-blue-900/10" />
        <div className="absolute -left-40 top-1/2 h-80 w-80 rounded-full bg-emerald-100/30 blur-3xl dark:bg-emerald-900/10" />
        <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-amber-100/30 blur-3xl dark:bg-amber-900/10" />
      </div>

      <div className="relative mx-auto max-w-7xl space-y-6 px-4 py-6 sm:space-y-8 sm:px-6 sm:py-8 lg:px-8">
        <div className="overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white p-6 text-[#2f251f] shadow-[0_18px_45px_rgba(63,52,44,0.04)] sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              <SkeletonBlock className="h-7 w-40 rounded-[4px]" />
              <SkeletonBlock className="h-10 w-full max-w-md sm:h-11" />
              <SkeletonBlock className="h-4 w-full max-w-sm" />
              <SkeletonBlock className="h-4 w-56" />
            </div>

            <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-2.5">
              <SkeletonBlock className="h-16 w-16 rounded-full sm:h-20 sm:w-20" />
              <div className="space-y-2">
                <SkeletonBlock className="h-3 w-16" />
                <SkeletonBlock className="h-3 w-12" />
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <SkeletonBlock className="h-3 w-24" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[0, 1, 2, 3].map((item) => (
              <StatsCardSkeleton key={item} />
            ))}
          </div>
        </section>

        <section>
          <SectionTitleSkeleton />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <LearningProgressSkeleton />
            <ActivitySkeleton />
          </div>
        </section>

        <section>
          <SectionTitleSkeleton />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <UpcomingEventsSkeleton />
            <AchievementsSkeleton />
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashboardSkeleton;
