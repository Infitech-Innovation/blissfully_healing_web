import styles from "./blogs.module.css";

const skeletonCategories = ["w-24", "w-20", "w-28", "w-24"];
const skeletonCards = [1, 2, 3];

function SkeletonBlock({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-md bg-[#e7d9cb] ${className}`}
    />
  );
}

function MobileBlogSkeletonCard() {
  return (
    <div className="flex flex-col rounded-2xl border border-[#ede5db] bg-white p-4">
      <SkeletonBlock className="h-[240px] rounded-lg sm:h-[260px]" />
      <div className="flex flex-1 flex-col gap-4 p-6">
        <SkeletonBlock className="h-7 w-11/12" />
        <SkeletonBlock className="h-7 w-8/12" />
        <div className="space-y-2">
          <SkeletonBlock className="h-3.5 w-full" />
          <SkeletonBlock className="h-3.5 w-10/12" />
          <SkeletonBlock className="h-3.5 w-7/12" />
        </div>
        <SkeletonBlock className="mt-1 h-4 w-24" />
      </div>
    </div>
  );
}

function DesktopBlogSkeletonCard() {
  return (
    <div className="flex flex-row rounded-2xl border border-[#ede5db] bg-white p-4">
      <SkeletonBlock className="h-[240px] w-[420px] shrink-0 rounded-lg" />
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 p-7">
        <div className="space-y-3">
          <SkeletonBlock className="h-8 w-11/12" />
          <SkeletonBlock className="h-8 w-7/12" />
        </div>
        <div className="space-y-2">
          <SkeletonBlock className="h-3.5 w-full" />
          <SkeletonBlock className="h-3.5 w-11/12" />
          <SkeletonBlock className="h-3.5 w-8/12" />
        </div>
        <SkeletonBlock className="h-4 w-24" />
      </div>
    </div>
  );
}

export function BlogSectionSkeleton() {
  return (
    <section
      className={`${styles.blogSection} min-h-screen bg-[#faf5ef] py-10 lg:py-14`}
      aria-label="Loading blogs"
      aria-busy="true"
    >
      <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
        <div className="mb-10 lg:mb-12">
          <h2 className={styles.bannerTitle}>
            Insights for{" "}
            <span className={styles.bannerTitleSubText}>Mindful Living</span>
          </h2>
        </div>

        <div className="lg:hidden">
          <div className="mb-6">
            <p className="mb-3 text-2xl font-semibold uppercase tracking-widest text-[#2d1a0e]">
              Explore Topics
            </p>
            <div className="flex flex-wrap gap-2">
              {skeletonCategories.map((width, index) => (
                <SkeletonBlock
                  key={`${width}-${index}`}
                  className={`h-8 rounded-full ${width}`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {skeletonCards.slice(0, 2).map((item) => (
              <MobileBlogSkeletonCard key={item} />
            ))}
          </div>
        </div>

        <div className="hidden items-start gap-10 lg:flex">
          <aside className="sticky top-24 w-52 shrink-0 self-start">
            <p className="mb-5 text-lg font-semibold uppercase tracking-widest text-[#2d1a0e]">
              Explore Topics
            </p>
            <div className="flex flex-col gap-2">
              {skeletonCategories.map((width, index) => (
                <SkeletonBlock
                  key={`${width}-${index}`}
                  className={`h-11 rounded-xl ${width}`}
                />
              ))}
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-4">
              {skeletonCards.map((item) => (
                <DesktopBlogSkeletonCard key={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
