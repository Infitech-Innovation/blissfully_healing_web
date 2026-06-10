"use client";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { DeleteAccount } from "./delete_btn";

export function DangerousZone() {
  return (
    <div className="mt-10 border-t border-[#eadfd4] pt-8">
      <div className="rounded-[6px] border border-dashed border-[#eadfd4] bg-[#fffaf6] p-5">
        <div className="mb-4">
          <CardTitle className="font-serif text-sm font-bold uppercase tracking-wider text-[#2f251f]">
            Account Management Actions
          </CardTitle>
          <CardDescription className="text-xs text-[#744d39] mt-1 leading-relaxed">
            Deactivating or requesting complete data extraction cannot be reversed. Please ensure your path is finalized before deleting records.
          </CardDescription>
        </div>
        <DeleteAccount />
      </div>
    </div>
  );
}