
const shimmer = "animate-pulse rounded bg-[#eadfd4]";

function SkeletonBlock({ className }: { className: string }) {
  return <div className={`${shimmer} ${className}`} />;
}

export default function MyRegisteredCourse() {
  return (
    <div
      className="min-h-screen bg-[#fffaf6] text-[#3f342c]"
      aria-busy="true"
      aria-label="Loading enrolled course details"
    >
      <div className="mx-auto flex max-w-[1100px] flex-col gap-8 px-6 py-8 md:flex-row md:items-start">
        <main className="min-w-0 flex-1">
          <SkeletonBlock className="mb-5 h-5 w-40" />

          <section className="relative aspect-[16/7] overflow-hidden rounded-[10px] border border-[#eadfd4] bg-[#f8f0e8] shadow-[0_18px_45px_rgba(63,52,44,0.08)]">
            <div className="absolute inset-0 animate-pulse bg-[#eadfd4]" />
            <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-white/30">
              <div className="h-full w-2/5 animate-pulse bg-[#8f6249]/50" />
            </div>
            <div className="absolute bottom-5 left-5 flex items-center gap-2">
              <div className="h-9 w-32 animate-pulse rounded-full bg-white/90" />
              <div className="h-9 w-28 animate-pulse rounded-full bg-white/75" />
            </div>
          </section>

          <section className="mt-6">
            <SkeletonBlock className="h-9 w-full max-w-xl" />
            <SkeletonBlock className="mt-3 h-4 w-full max-w-2xl" />
            <SkeletonBlock className="mt-2 h-4 w-5/6 max-w-xl" />

            <div className="mt-4 flex flex-wrap gap-2">
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  className="h-8 w-28 animate-pulse rounded-full border border-[#eadfd4] bg-white"
                />
              ))}
            </div>
          </section>

          <section className="mt-8">
            <SkeletonBlock className="h-7 w-52" />
            <div className="mt-3 space-y-2.5">
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-11/12" />
              <SkeletonBlock className="h-4 w-4/5" />
            </div>

            <SkeletonBlock className="mt-5 h-5 w-24" />
            <div className="mt-3 space-y-2">
              {[0, 1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#8f6249]/50" />
                  <SkeletonBlock className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <div className="mb-4 flex items-center justify-between gap-4">
              <SkeletonBlock className="h-7 w-44" />
              <SkeletonBlock className="h-4 w-48" />
            </div>

            <div className="flex flex-col gap-3">
              {[0, 1, 2].map((chapter) => (
                <article
                  key={chapter}
                  className="overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white shadow-sm"
                >
                  <div className="flex w-full items-center gap-3 bg-[#f8f0e8] px-4 py-[14px]">
                    <div className="h-[28px] w-[28px] shrink-0 animate-pulse rounded-full bg-[#8f6249]/50" />
                    <div className="min-w-0 flex-1">
                      <SkeletonBlock className="h-4 w-2/3" />
                      <SkeletonBlock className="mt-2 h-3 w-44" />
                    </div>
                    <SkeletonBlock className="hidden h-4 w-16 sm:block" />
                    <SkeletonBlock className="h-5 w-5 rounded-[4px]" />
                  </div>

                  {chapter === 0 && (
                    <div className="border-t border-[#eadfd4]">
                      {[0, 1, 2, 3].map((lesson) => (
                        <div
                          key={lesson}
                          className={`flex items-center gap-3 px-4 py-[11px] pl-[56px] ${
                            lesson === 1 ? "bg-[#f8f0e8]" : ""
                          }`}
                        >
                          <div
                            className={`h-[18px] w-[18px] shrink-0 animate-pulse rounded-full ${
                              lesson === 0 ? "bg-[#2f9e44]/60" : "bg-[#eadfd4]"
                            }`}
                          />
                          <div className="min-w-0 flex-1">
                            <SkeletonBlock className="h-4 w-3/5" />
                            <SkeletonBlock className="mt-2 h-3 w-2/5" />
                          </div>
                          <div className="flex items-center gap-2">
                            {lesson === 1 && (
                              <div className="h-5 w-16 animate-pulse rounded-full bg-[#8f6249]/10" />
                            )}
                            <div className="h-7 w-16 animate-pulse rounded-full bg-[#f8f0e8]" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        </main>

        <aside className="h-fit w-full rounded-[10px] border border-[#eadfd4] bg-white p-5 shadow-[0_18px_45px_rgba(63,52,44,0.08)] md:sticky md:top-4 md:w-[300px] md:shrink-0">
          <div className="flex items-center gap-4">
            <div className="relative flex h-[64px] w-[64px] shrink-0 items-center justify-center">
              <div className="absolute inset-0 animate-pulse rounded-full border-[6px] border-[#eadfd4]" />
              <div className="h-4 w-8 animate-pulse rounded bg-[#eadfd4]" />
            </div>
            <div className="min-w-0 flex-1">
              <SkeletonBlock className="h-4 w-32" />
              <SkeletonBlock className="mt-2 h-3 w-36" />
              <SkeletonBlock className="mt-2 h-3 w-28" />
            </div>
          </div>

          <div className="my-5 border-t border-[#eadfd4]" />

          <div>
            <SkeletonBlock className="h-4 w-28" />
            <div className="mt-4 flex flex-col gap-4">
              {[0, 1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <SkeletonBlock className="h-4 w-4 shrink-0 rounded-[4px]" />
                  <div>
                    <SkeletonBlock className="h-3 w-24" />
                    <SkeletonBlock className="mt-2 h-4 w-32" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="my-5 border-t border-[#eadfd4]" />

          <div>
            <SkeletonBlock className="h-4 w-36" />
            <div className="mt-4 flex flex-col gap-3">
              {[0, 1, 2].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <SkeletonBlock className="h-4 w-4 shrink-0 rounded-[4px]" />
                  <SkeletonBlock className="h-4 w-44" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 h-12 w-full animate-pulse rounded-[8px] bg-[#8f6249]/40" />
          <SkeletonBlock className="mx-auto mt-2 h-3 w-40" />
        </aside>
      </div>
    </div>
  );
}
