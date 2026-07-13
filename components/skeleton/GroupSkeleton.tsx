const shimmer = "animate-pulse rounded bg-[#eadfd4]";

function SkeletonBlock({ className }: { className: string }) {
  return <div className={`${shimmer} ${className}`} />;
}

function GroupCardSkeleton() {
  return (
    <article className="h-full rounded-[8px] border border-[#eadfd4] bg-white p-6 shadow-[0_18px_45px_rgba(63,52,44,0.08)]">
      <div className="mb-5 flex items-start justify-between gap-3">
        <SkeletonBlock className="h-12 w-12 rounded-[8px]" />
        <SkeletonBlock className="h-7 w-24 rounded-full" />
      </div>
      <SkeletonBlock className="mb-3 h-3 w-28" />
      <SkeletonBlock className="mb-3 h-6 w-4/5" />
      <SkeletonBlock className="mb-2 h-4 w-full" />
      <SkeletonBlock className="mb-5 h-4 w-2/3" />

      <div className="mb-5 grid gap-3 rounded-[6px] bg-[#fffaf6] p-4">
        <SkeletonBlock className="h-4 w-3/5" />
        <SkeletonBlock className="h-4 w-4/5" />
        <SkeletonBlock className="h-4 w-2/3" />
      </div>

      <div className="mb-5 space-y-2">
        <div className="flex items-center justify-between gap-4">
          <SkeletonBlock className="h-3 w-32" />
          <SkeletonBlock className="h-3 w-10" />
        </div>
        <SkeletonBlock className="h-1.5 w-full rounded-full" />
      </div>

      <div className="flex items-center justify-between border-t border-[#eadfd4] pt-5">
        <div className="space-y-2">
          <SkeletonBlock className="h-3 w-24" />
          <SkeletonBlock className="h-4 w-20" />
        </div>
        <SkeletonBlock className="h-10 w-24 rounded-sm" />
      </div>
    </article>
  );
}

export function GroupSkeleton() {
  return (
    <main
      className="min-h-screen bg-[#fffaf6] text-[#2f251f]"
      aria-busy="true"
    >
      <section className="border-b border-[#eadfd4] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8 lg:py-16">
          <div>
            <SkeletonBlock className="mb-4 h-3 w-40" />
            <SkeletonBlock className="mb-4 h-12 w-full max-w-3xl sm:h-14" />
            <SkeletonBlock className="h-5 w-full max-w-2xl" />
            <SkeletonBlock className="mt-3 h-5 w-4/5 max-w-xl" />
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className="rounded-[8px] border border-[#eadfd4] bg-[#fffaf6] p-4"
              >
                <SkeletonBlock className="mb-3 h-5 w-5 rounded-full" />
                <SkeletonBlock className="mb-3 h-8 w-14" />
                <SkeletonBlock className="h-3 w-24" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <SkeletonBlock className="mb-4 h-8 w-72" />
            <SkeletonBlock className="h-5 w-full max-w-xl" />
          </div>
          <SkeletonBlock className="h-12 w-full lg:w-[360px]" />
        </div>

        <div className="mb-8 flex gap-2 overflow-hidden pb-2">
          {[0, 1, 2, 3].map((item) => (
            <SkeletonBlock key={item} className="h-10 w-28 rounded-full" />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <GroupCardSkeleton key={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

function DetailPanelSkeleton() {
  return (
    <div className="rounded-[8px] border border-[#eadfd4] bg-white p-6 shadow-[0_18px_45px_rgba(63,52,44,0.06)] sm:p-8">
      <SkeletonBlock className="mb-5 h-8 w-56" />
      <div className="grid gap-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="rounded-[6px] bg-[#fffaf6] p-4">
            <SkeletonBlock className="h-5 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function GroupDetailSkeleton() {
  return (
    <main
      className="min-h-screen bg-[#fffaf6] pb-16 text-[#2f251f]"
      aria-busy="true"
    >
      <section className="border-b border-[#eadfd4] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
          <SkeletonBlock className="mb-8 h-5 w-44" />
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <div className="mb-5 flex gap-3">
                <SkeletonBlock className="h-8 w-32 rounded-full" />
                <SkeletonBlock className="h-8 w-28 rounded-full" />
              </div>
              <div className="flex items-start gap-4">
                <SkeletonBlock className="hidden h-14 w-14 rounded-[8px] sm:block" />
                <div className="flex-1">
                  <SkeletonBlock className="mb-4 h-12 w-full max-w-3xl sm:h-14" />
                  <SkeletonBlock className="h-5 w-full max-w-2xl" />
                  <SkeletonBlock className="mt-3 h-5 w-4/5 max-w-xl" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 rounded-[8px] border border-[#eadfd4] bg-[#fffaf6] p-4">
              <SkeletonBlock className="h-5 w-full" />
              <SkeletonBlock className="h-5 w-4/5" />
              <SkeletonBlock className="h-11 w-full rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8 lg:py-16">
        <section className="space-y-6">
          <DetailPanelSkeleton />

          <div className="grid gap-6 md:grid-cols-2">
            <DetailPanelSkeleton />
            <DetailPanelSkeleton />
          </div>

          <div className="rounded-[8px] border border-[#eadfd4] bg-white p-6 shadow-[0_18px_45px_rgba(63,52,44,0.06)] sm:p-8">
            <SkeletonBlock className="mb-5 h-3 w-28" />
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <SkeletonBlock className="h-16 w-16 rounded-full" />
              <div className="flex-1">
                <SkeletonBlock className="mb-3 h-8 w-56" />
                <SkeletonBlock className="mb-5 h-4 w-36" />
                <SkeletonBlock className="h-5 w-full max-w-2xl" />
                <SkeletonBlock className="mt-3 h-5 w-4/5 max-w-xl" />
              </div>
            </div>
          </div>
        </section>

        <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
          <div className="overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white shadow-[0_18px_45px_rgba(63,52,44,0.08)]">
            <div className="border-b border-[#eadfd4] bg-[#fffaf6] p-6">
              <SkeletonBlock className="mb-4 h-4 w-40" />
              <SkeletonBlock className="mb-4 h-9 w-28" />
              <SkeletonBlock className="h-1.5 w-full rounded-full" />
            </div>
            <div className="space-y-5 p-6">
              {[0, 1, 2, 3].map((item) => (
                <SkeletonBlock key={item} className="h-10 w-full" />
              ))}
              <div className="border-t border-[#eadfd4] pt-5">
                <SkeletonBlock className="mb-5 h-8 w-full" />
                <SkeletonBlock className="h-11 w-full rounded-sm" />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
