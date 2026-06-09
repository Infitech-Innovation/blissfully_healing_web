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
                                <th className="px-6 py-4">Method</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Amount</th>
                                <th className="px-6 py-4 text-center">Receipt</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#f8f0e8] text-[#2f251f]">
                            {purchase.map((txn) => (
                                <tr
                                    key={txn.id}
                                    className="transition-colors hover:bg-[#fffaf6]/50"
                                >
                                    {/* Item Details */}
                                    <td className="px-6 py-4 font-medium">
                                        <div className="font-serif text-base font-semibold text-[#2f251f]">
                                            {txn.itemName}
                                        </div>
                                        <div className="text-[11px] font-mono tracking-tight text-[#b39c8c] mt-0.5">
                                            {txn.id}
                                        </div>
                                    </td>

                                    {/* Category Column */}
                                    <td className="whitespace-nowrap px-6 py-4 text-xs">
                                        <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#6f5c4f]">
                                            {txn.category === "retreat" && (
                                                <Compass size={14} className="text-[#8f6249]" />
                                            )}
                                            {txn.category === "course" && (
                                                <GraduationCap size={14} className="text-[#8f6249]" />
                                            )}
                                            {txn.category === "ebook" && (
                                                <BookOpen size={14} className="text-[#8f6249]" />
                                            )}
                                            {txn.category}
                                        </span>
                                    </td>

                                    {/* Date */}
                                    <td className="whitespace-nowrap px-6 py-4 text-[#6f5c4f]">
                                        {txn.date}
                                    </td>

                                    {/* Method */}
                                    <td className="whitespace-nowrap px-6 py-4 text-xs text-[#6f5c4f]">
                                        {txn.paymentMethod}
                                    </td>

                                    {/* Status Badge */}
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 border border-emerald-200">
                                            {txn.status}
                                        </span>
                                    </td>

                                    {/* Amount */}
                                    <td className="whitespace-nowrap px-6 py-4 text-right font-serif font-bold text-[#2f251f]">
                                        {txn.amount}
                                    </td>

                                    {/* Actions Trigger */}
                                    <td className="whitespace-nowrap px-6 py-4 text-center">
                                        <Link
                                            href={txn.receiptUrl || "#"}
                                            className="inline-flex h-8 w-8 items-center justify-center rounded-[4px] border border-[#eadfd4] bg-white text-[#6f5c4f] transition hover:border-[#8f6249] hover:text-[#8f6249]"
                                            title="Download Receipt Document"
                                        >
                                            <Receipt size={14} />
                                        </Link>
                                    </td>
                                </tr>
                            ))}

                            {purchase.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={7}
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
