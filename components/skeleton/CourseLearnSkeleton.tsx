const shimmer = "animate-pulse rounded bg-[#eadfd4]";

function SkeletonBlock({ className }: { className: string }) {
  return <div className={`${shimmer} ${className}`} />;
}

function SidebarLessonSkeleton() {
  return (
    <div className="flex items-start gap-3 rounded-[4px] border border-transparent bg-white p-2.5">
      <SkeletonBlock className="mt-0.5 h-4 w-4 shrink-0 rounded-full" />
      <div className="min-w-0 flex-1">
        <SkeletonBlock className="h-3 w-4/5" />
        <SkeletonBlock className="mt-2 h-2.5 w-24" />
      </div>
    </div>
  );
}

export default function CourseLearnSkeleton() {
  return (
    <div
      className="min-h-screen bg-[#fffaf6] text-[#3f342c]"
      aria-busy="true"
      aria-label="Loading course learning page"
    >
      <header className="sticky top-0 z-40 border-b border-[#eadfd4] bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-4">
            <SkeletonBlock className="h-9 w-9 shrink-0 rounded-full" />
            <div className="min-w-0">
              <SkeletonBlock className="h-3 w-36" />
              <SkeletonBlock className="mt-2 h-4 w-64 max-w-[60vw]" />
            </div>
          </div>

          <SkeletonBlock className="hidden h-4 w-32 sm:block" />
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px] flex-col lg:min-h-[calc(100vh-64px)] lg:flex-row">
        <main className="flex-1 space-y-6 p-4 sm:p-6 lg:border-r lg:border-[#eadfd4] lg:p-8">
          <section className="relative overflow-hidden rounded-[8px] border border-[#eadfd4] bg-[#2f251f] shadow-[0_12px_35px_rgba(63,52,44,0.05)]">
            <div className="flex aspect-video w-full flex-col items-center justify-center bg-[#f8f0e8] p-8">
              <SkeletonBlock className="h-14 w-14 rounded-full" />
              <SkeletonBlock className="mt-5 h-6 w-72 max-w-full" />
              <SkeletonBlock className="mt-3 h-3 w-56 max-w-full" />
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex border-b border-[#eadfd4]">
              <div className="border-b-2 border-[#8f6249] px-4 pb-3">
                <SkeletonBlock className="h-3 w-24" />
              </div>
              <div className="px-4 pb-3">
                <SkeletonBlock className="h-3 w-36" />
              </div>
            </div>

            <div className="min-h-[180px] rounded-[8px] border border-[#eadfd4] bg-white p-5 shadow-sm sm:p-6">
              <SkeletonBlock className="h-5 w-48" />
              <div className="mt-5 space-y-3">
                <SkeletonBlock className="h-3.5 w-full" />
                <SkeletonBlock className="h-3.5 w-11/12" />
                <SkeletonBlock className="h-3.5 w-4/5" />
                <SkeletonBlock className="h-3.5 w-2/3" />
              </div>
            </div>
          </section>

          <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[#eadfd4] pt-4">
            <SkeletonBlock className="h-11 w-40 rounded-[4px]" />
            <SkeletonBlock className="h-11 w-32 rounded-[4px]" />
          </footer>
        </main>

        <aside className="max-h-[calc(100vh-64px)] w-full shrink-0 space-y-4 overflow-y-auto bg-white p-4 sm:p-6 lg:sticky lg:top-16 lg:w-[360px] lg:bg-white/40 lg:p-8">
          <div>
            <SkeletonBlock className="h-6 w-32" />
            <SkeletonBlock className="mt-2 h-3 w-56" />
          </div>

          <div className="space-y-6">
            {[0, 1, 2].map((chapter) => (
              <div key={chapter} className="space-y-2">
                <div className="flex items-center justify-between gap-3 border-b border-[#eadfd4]/60 pb-1.5">
                  <SkeletonBlock className="h-4 w-40" />
                  <SkeletonBlock className="h-3 w-8" />
                </div>

                <div className="space-y-1">
                  {[0, 1, 2].map((lesson) => (
                    <SidebarLessonSkeleton key={lesson} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
