export default function EbookDetailSkeleton() {
  return (
    <div className="min-h-screen bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl animate-pulse motion-reduce:animate-none">
        
        {/* Navigation Breadcrumb Bar Skeleton */}
        <div className="mb-8 h-4 w-32 rounded bg-[#29241b]" />

        {/* Layout Main Deck Split Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* Left Column: Visual Book Profile Cover Sticky Anchor */}
          <div className="md:col-span-1">
            <div className="sticky top-28 flex flex-col items-center">
              <div className="relative aspect-[3/4] w-full max-w-[280px] rounded-[8px] bg-[#29241b] md:max-w-none" />
            </div>
          </div>

          {/* Right Column: Information Cards */}
          <div className="flex flex-col md:col-span-2">
            <div className="flex flex-1 flex-col rounded-[8px] border border-[#c7a05d] bg-[#0a0908] p-6 shadow-[0_18px_45px_rgba(63,52,44,0.06)] sm:p-8">
              
              {/* Top Banner Asset Identifiers */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#c7a05d]/30 pb-5">
                <div className="flex-1 space-y-2">
                  {/* Title Lines */}
                  <div className="h-7 w-3/4 rounded bg-[#29241b] sm:h-8" />
                  <div className="h-7 w-1/2 rounded bg-[#29241b] sm:h-8 md:hidden" /> {/* responsive title fallback wrap */}
                  {/* Author */}
                  <div className="h-4 w-1/4 rounded bg-[#29241b]" />
                </div>
                {/* Cost/Pricing Tier */}
                <div className="h-8 w-24 rounded bg-[#29241b]" />
              </div>

              {/* Core Physical File Metrics Deck */}
              <div className="mb-8 grid grid-cols-3 gap-2 rounded-[6px] bg-[#0a0908] p-4">
                <div className="flex flex-col items-center gap-1.5 border-r border-[#c7a05d]/60">
                  <div className="h-3 w-12 rounded bg-[#29241b]" />
                  <div className="h-4 w-16 rounded bg-[#29241b]" />
                </div>
                <div className="flex flex-col items-center gap-1.5 border-r border-[#c7a05d]/60">
                  <div className="h-3 w-10 rounded bg-[#29241b]" />
                  <div className="h-4 w-14 rounded bg-[#29241b]" />
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="h-3 w-12 rounded bg-[#29241b]" />
                  <div className="h-4 w-14 rounded bg-[#29241b]" />
                </div>
              </div>

              {/* Book Summary Description Segment */}
              <div className="mb-8 space-y-2.5">
                <div className="h-3 w-28 rounded bg-[#29241b]" />
                <div className="h-4 w-full rounded bg-[#29241b]" />
                <div className="h-4 w-full rounded bg-[#29241b]" />
                <div className="h-4 w-4/5 rounded bg-[#29241b]" />
              </div>

              {/* Interactive Modules Checklists Grid */}
              <div className="mb-8 border-t border-[#c7a05d]/30 pt-6">
                <div className="mb-4 h-4 w-48 rounded bg-[#29241b]" />
                <div className="grid gap-3 sm:grid-cols-2">
                  {/* Array Placeholder Loops (showing 4 mock module items) */}
                  {[...Array(4)].map((_, idx) => (
                    <div key={idx} className="h-12 rounded-[6px] bg-[#201b13]" />
                  ))}
                </div>
              </div>

              {/* Primary Conversions Call To Action Bar */}
              <div className="mt-auto border-t border-[#c7a05d]/30 pt-6">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="h-11 flex-1 rounded-[8px] bg-[#29241b]" />
                  <div className="h-11 flex-1 rounded-[8px] bg-[#29241b]" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}