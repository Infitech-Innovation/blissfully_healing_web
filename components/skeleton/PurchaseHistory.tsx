export default function PurchaseCardSkeleton() {
    // Renders 4 placeholder rows to mimic a populated list while loading
    const skeletonRows = Array.from({ length: 6 });

    return (
        <div>
            {/* Desktop Transactions Ledger Table Placeholder */}
            <div className="overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white shadow-[0_18px_45px_rgba(63,52,44,0.04)] animate-pulse">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left text-sm">
                        <thead>
                            <tr className="border-b border-[#eadfd4] bg-[#fffaf6] text-[10px] font-bold uppercase tracking-widest text-[#6f5c4f]">
                                <th className="px-6 py-4">Reference Item</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Purchase Date</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Amount</th>
                                <th className="px-6 py-4 text-center">Receipt</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#f8f0e8]">
                            {skeletonRows.map((_, index) => (
                                <tr key={index} className="bg-white">
                                    {/* Item Details */}
                                    <td className="px-6 py-4">
                                        <div className="h-5 w-32 rounded bg-gray-200/80" />
                                    </td>

                                    {/* Category Column */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1.5">
                                            <div className="h-3.5 w-3.5 rounded-full bg-gray-200/80" />
                                            <div className="h-3 w-16 rounded bg-gray-200/80" />
                                        </div>
                                    </td>

                                    {/* Date */}
                                    <td className="px-6 py-4">
                                        <div className="h-4 w-20 rounded bg-gray-200/60" />
                                    </td>

                                    {/* Status Badge */}
                                    <td className="px-6 py-4">
                                        <div className="h-5 w-16 rounded-full bg-gray-200/70" />
                                    </td>

                                    {/* Amount */}
                                    <td className="px-6 py-4 text-right">
                                        <div className="ml-auto h-4 w-24 rounded bg-gray-200/80" />
                                    </td>

                                    {/* Actions Trigger */}
                                    <td className="px-6 py-4 text-center">
                                        <div className="inline-block h-8 w-8 rounded-[4px] bg-gray-200/60" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}