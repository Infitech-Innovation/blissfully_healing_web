export function RetreatDetailSkeleton() {
    return (
        <div className="min-h-screen bg-[#fffaf6] text-[#3f342c] animate-pulse">
            <main className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-12">
                <div className="mb-6 h-5 w-32 rounded bg-[#eadfd4]" />
                <div className="h-[520px] w-full rounded-[8px] bg-[#eadfd4]" />
                <div className="grid gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_340px]">
                    <div className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-3">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-28 rounded-[8px] bg-[#eadfd4]" />
                            ))}
                        </div>
                        <div className="h-6 w-1/4 rounded bg-[#eadfd4]" />
                        <div className="h-12 w-3/4 rounded bg-[#eadfd4]" />
                        <div className="h-24 w-full rounded bg-[#eadfd4]" />
                    </div>
                    <div className="h-96 rounded-[8px] bg-[#eadfd4]" />
                </div>
            </main>
        </div>
    );
}
