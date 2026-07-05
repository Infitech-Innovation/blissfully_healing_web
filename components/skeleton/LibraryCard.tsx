export default function LibrarySkeleton() {
    // Renders a grid matching your lg:grid-cols-2 layout
    return (
        <div>
            {/* E-Books Detailed Deck Grid Skeleton */}
            <div className="grid gap-10 lg:grid-cols-2">
                {[...Array(4)].map((_, index) => (
                    <article
                        key={index}
                        className="flex flex-col overflow-hidden rounded-[8px] border border-[#eadfd4]/60 bg-white p-6 shadow-[0_18px_45px_rgba(63,52,44,0.06)] dynamic-pulse animate-pulse"
                    >
                        {/* Purchase Header Bar Skeleton */}
                        <div className="mb-5 flex items-center justify-between border-b border-[#f8f0e8] pb-4">
                            {/* Verified Tag Skeleton */}
                            <div className="h-6 w-32 rounded bg-gray-200" />
                            {/* Price Tag Skeleton */}
                            <div className="h-6 w-16 rounded bg-gray-200" />
                        </div>

                        {/* Layout Content Frame Skeleton */}
                        <div className="flex flex-col gap-6 sm:flex-row">
                            {/* Book Cover Container Skeleton */}
                            <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-[6px] bg-gray-200 sm:w-40" />

                            {/* Primary Book Metadata Skeleton */}
                            <div className="flex flex-1 flex-col justify-between">
                                <div>
                                    {/* Title Line 1 */}
                                    <div className="mb-2 h-5 w-11/12 rounded bg-gray-200" />
                                    {/* Title Line 2 (Optional Line Clamp space) */}
                                    <div className="mb-3 h-5 w-2/3 rounded bg-gray-200" />
                                    {/* Author */}
                                    <div className="h-4 w-1/2 rounded bg-gray-200 italic" />
                                </div>

                                {/* Core Metrics Grid Skeleton */}
                                <div className="mt-4 grid grid-cols-3 gap-2 rounded-[6px] bg-[#fffaf6] p-3">
                                    <div className="flex flex-col items-center gap-1 border-r border-[#eadfd4]/60">
                                        <div className="h-2.5 w-10 rounded bg-gray-200" />
                                        <div className="h-4 w-12 rounded bg-gray-200" />
                                    </div>
                                    <div className="flex flex-col items-center gap-1 border-r border-[#eadfd4]/60">
                                        <div className="h-2.5 w-10 rounded bg-gray-200" />
                                        <div className="h-4 w-14 rounded bg-gray-200" />
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="h-2.5 w-10 rounded bg-gray-200" />
                                        <div className="h-4 w-12 rounded bg-gray-200" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Collateral Module: Core Index Breakdown Skeleton */}
                        <div className="mt-6 border-t border-[#f8f0e8] pt-5">
                            <div className="mb-3 h-3 w-36 rounded bg-gray-200" />
                        </div>

                        {/* Global Interactive Downloads Skeleton */}
                        <div className="mt-auto pt-4">
                            <div className="h-10 w-full rounded-[8px] bg-gray-200" />
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}