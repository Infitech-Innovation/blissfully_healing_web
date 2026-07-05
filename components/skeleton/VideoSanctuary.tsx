export default function VideoSanctuarySkeleton() {
  return (
    <div className="space-y-10 px-4 py-8 sm:px-6 lg:px-8 bg-[#fffaf6] min-h-screen animate-pulse">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Strip Line */}
        <div className="mb-6 flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-stone-200" />
          <div className="h-5 w-48 rounded bg-stone-200" />
        </div>

        {/* Content Panel Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* LEFT COLUMN: Large Primary Player Skeleton Block */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative aspect-video w-full rounded-[8px] bg-stone-200" />
            <div className="h-7 w-3/4 rounded bg-stone-200 mt-2" />
            <div className="h-6 w-1/2 rounded bg-stone-200" />
            
            <div className="flex items-center justify-between border-b border-stone-200 pb-4 pt-1">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-stone-200" />
                <div className="space-y-1.5">
                  <div className="h-3.5 w-28 rounded bg-stone-200" />
                  <div className="h-3 w-16 rounded bg-stone-200" />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="h-8 w-20 rounded-full bg-stone-200" />
                <div className="h-8 w-20 rounded-full bg-stone-200" />
              </div>
            </div>

            {/* Description Card Layout Skeleton */}
            <div className="rounded-[8px] border border-stone-100 bg-white p-4 space-y-2">
              <div className="h-3.5 w-40 rounded bg-stone-200" />
              <div className="h-3 w-full rounded bg-stone-200" />
              <div className="h-3 w-5/6 rounded bg-stone-200" />
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Queue Sidebar Cards */}
          <div className="space-y-3">
            <div className="h-4 w-32 rounded bg-stone-200 px-1" />
            
            <div className="space-y-2.5">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="flex gap-3 p-2 rounded-[6px] bg-white border border-stone-100">
                  <div className="w-28 aspect-video rounded bg-stone-200 shrink-0" />
                  <div className="flex-1 space-y-2 py-1">
                    <div className="h-3 w-full rounded bg-stone-200" />
                    <div className="h-3 w-2/3 rounded bg-stone-200" />
                    <div className="h-2.5 w-1/3 rounded bg-stone-200 pt-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}