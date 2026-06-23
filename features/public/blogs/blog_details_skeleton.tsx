function SkeletonBlock({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-md bg-[#e7d9cb] ${className}`}
    />
  );
}

function SidebarCardSkeleton({ author = false }: { author?: boolean }) {
  return (
    <div className="rounded-xl border border-[#e8d9cc] bg-white p-6">
      <SkeletonBlock className="mb-5 h-6 w-24" />

      {author ? (
        <div className="flex items-center gap-3">
          <SkeletonBlock className="h-11 w-11 rounded-full" />
          <div className="min-w-0 flex-1 space-y-2">
            <SkeletonBlock className="h-4 w-28" />
            <SkeletonBlock className="h-3 w-36" />
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          {[1, 2, 3].map((item) => (
            <div key={item}>
              <SkeletonBlock className="mb-2 h-3 w-24" />
              <SkeletonBlock className="h-4 w-32" />
              {item < 3 ? <hr className="mt-4 border-[#e8d9cc]" /> : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function BlogDetailsSkeleton() {
  return (
    <main
      className="min-h-screen bg-[#f9f5f0] text-[#2c1a10]"
      aria-label="Loading blog details"
      aria-busy="true"
    >
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-12 md:grid-cols-[260px_1fr] md:gap-16 md:px-10 md:py-16">
        <aside className="space-y-5 md:sticky md:top-24 md:self-start">
          <SidebarCardSkeleton />
          <SidebarCardSkeleton author />
        </aside>

        <article className="max-w-none">
          <div className="mb-8 space-y-4">
            <SkeletonBlock className="h-12 w-full max-w-3xl rounded-lg md:h-14" />
            <SkeletonBlock className="h-12 w-10/12 max-w-2xl rounded-lg md:h-14" />
          </div>

          <div className="mb-8 space-y-3">
            <SkeletonBlock className="h-5 w-full" />
            <SkeletonBlock className="h-5 w-11/12" />
            <SkeletonBlock className="h-5 w-8/12" />
          </div>

          <SkeletonBlock className="mb-8 aspect-[16/8] w-full rounded-[22px]" />

          <div className="space-y-3">
            <SkeletonBlock className="h-5 w-full" />
            <SkeletonBlock className="h-5 w-full" />
            <SkeletonBlock className="h-5 w-10/12" />
            <SkeletonBlock className="h-5 w-11/12" />
            <SkeletonBlock className="h-5 w-7/12" />
          </div>

          <div className="my-8 rounded-r-2xl border-l-4 border-l-[#b28b67] bg-[#fffaf6] px-6 py-5">
            <SkeletonBlock className="mb-3 h-5 w-11/12" />
            <SkeletonBlock className="h-5 w-8/12" />
          </div>

          <div className="space-y-3">
            <SkeletonBlock className="h-5 w-full" />
            <SkeletonBlock className="h-5 w-9/12" />
            <SkeletonBlock className="h-5 w-10/12" />
          </div>
        </article>
      </section>
    </main>
  );
}
