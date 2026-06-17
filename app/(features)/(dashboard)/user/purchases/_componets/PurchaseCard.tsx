import { Receipt, BookOpen, GraduationCap, Compass } from "lucide-react";
import { Transaction } from "../definations";
import Link from "next/link";

type Purchaseprops = {
    purchase: Transaction[];
};

export default function PurchaseCard({ purchase }: Purchaseprops) {
    return (
        <div>
            {/* Desktop Transactions Ledger Table */}
            <div className="overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white shadow-[0_18px_45px_rgba(63,52,44,0.04)]">
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
                        <tbody className="divide-y divide-[#f8f0e8] text-[#2f251f]">
                            {purchase.map((txn) => {
                                const isPaid =
                                    txn.status?.toLowerCase() === "paid" ||
                                    txn.status?.toLowerCase() === "complete";

                                return (
                                    <tr
                                        key={txn.id}
                                        className="transition-colors hover:bg-[#fffaf6]/50"
                                    >
                                        {/* Item Details */}
                                        <td className="px-6 py-4 font-medium">
                                            <div className="font-serif text-base font-semibold text-[#2f251f] capitalize">
                                                {txn.product_type}
                                            </div>
                                        </td>

                                        {/* Category Column */}
                                        <td className="whitespace-nowrap px-6 py-4 text-xs">
                                            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#6f5c4f]">
                                                {txn.product_type === "retreat" && (
                                                    <Compass size={14} className="text-[#8f6249]" />
                                                )}
                                                {txn.product_type === "course" && (
                                                    <GraduationCap size={14} className="text-[#8f6249]" />
                                                )}
                                                {txn.product_type === "ebook" && (
                                                    <BookOpen size={14} className="text-[#8f6249]" />
                                                )}
                                                {txn.product_type}
                                            </span>
                                        </td>

                                        {/* Date */}
                                        <td className="whitespace-nowrap px-6 py-4 text-[#6f5c4f]">
                                            {txn.created_at
                                                ? new Date(txn.created_at).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })
                                                : "-"}
                                        </td>

                                        {/* Status Badge */}
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <span
                                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border ${isPaid
                                                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                                        : "bg-amber-50 text-amber-700 border-amber-200"
                                                    }`}
                                            >
                                                {txn.status || "Pending"}
                                            </span>
                                        </td>

                                        {/* Amount */}
                                        <td className="whitespace-nowrap px-6 py-4 text-right font-serif font-bold text-[#2f251f]">
                                            {txn.currency?.toUpperCase() || "KES"}{" "}
                                            {parseFloat(txn.amount || "0").toLocaleString("en-US", {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            })}
                                        </td>

                                        {/* Actions Trigger */}
                                        <td className="whitespace-nowrap px-6 py-4 text-center">
                                            <Link
                                                href={`/user/purchases/receipts/${txn.id}`}
                                                className="inline-flex h-8 w-8 items-center justify-center rounded-[4px] border border-[#eadfd4] bg-white text-[#6f5c4f] transition hover:border-[#8f6249] hover:text-[#8f6249]"
                                                title="View Receipt Details"
                                            >
                                                <Receipt size={14} />
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}

                            {purchase.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="px-6 py-16 text-center text-sm text-[#6f5c4f]"
                                    >
                                        No transaction statements matched your current filters.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
