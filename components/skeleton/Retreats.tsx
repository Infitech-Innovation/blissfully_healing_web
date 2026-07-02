export function RetreatSkeleton() {
  return (
    <section className="bg-[#fffaf6] px-6 py-24 animate-pulse">
      <div className="mx-auto max-w-7xl">
        {/* Header Layout */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            {/* Top tiny label */}
            <div className="mb-4 h-3 w-32 rounded bg-[#eadfd4]" />
            {/* Main title lines */}
            <div className="space-y-2">
              <div className="h-9 w-64 rounded bg-[#eadfd4] md:h-12 md:w-80" />
              <div className="h-9 w-48 rounded bg-[#eadfd4] md:h-12 md:w-60" />
            </div>
          </div>
          <div className="md:max-w-xs w-full space-y-3">
            {/* Description block */}
            <div className="h-4 w-full rounded bg-[#eadfd4]" />
            <div className="h-4 w-5/6 rounded bg-[#eadfd4]" />
            {/* Button placeholder */}
            <div className="pt-2">
              <div className="h-10 w-36 rounded-[8px] bg-[#eadfd4]" />
            </div>
          </div>
        </div>

        {/* Grid matching your 3-column layout */}
        <div className="grid gap-6 md:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <article
              key={index}
              className="rounded-[8px] border border-[#eadfd4]/60 bg-white p-4 shadow-[0_18px_45px_rgba(63,52,44,0.04)]"
            >
              {/* Image Container Aspect Ratio [4/3] */}
              <div className="relative mb-5 aspect-[4/3] w-full rounded-[6px] bg-[#f2e7dd]">
                {/* Badge inside image */}
                <div className="absolute left-4 top-4 h-6 w-20 rounded-full bg-white/80" />
              </div>

              {/* Card Title */}
              <div className="mb-3 h-6 w-3/4 rounded bg-[#eadfd4]" />

              {/* Card Description Lines */}
              <div className="mb-5 space-y-2">
                <div className="h-3.5 w-full rounded bg-[#eadfd4]" />
                <div className="h-3.5 w-5/6 rounded bg-[#eadfd4]" />
              </div>

              {/* Footer View Details Link */}
              <div className="h-4 w-24 rounded bg-[#eadfd4]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}