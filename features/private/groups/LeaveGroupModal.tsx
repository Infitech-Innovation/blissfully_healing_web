"use client";

import { Loader2, LogOut } from "lucide-react";

interface Props {
  name: string;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function LeaveGroupModal({
  name,
  onConfirm,
  onCancel,
  isLoading = false,
}: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={(event) => {
        if (event.target === event.currentTarget) onCancel();
      }}
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <LogOut className="h-7 w-7 text-red-600" />
        </div>

        <h3 className="mb-2 text-xl font-bold text-gray-800">Leave Group</h3>

        <p className="mb-6 text-sm leading-relaxed text-gray-500">
          Are you sure you want to leave{" "}
          <span className="font-semibold text-gray-700">&quot;{name}&quot;</span>?
        </p>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 rounded-xl border border-gray-300 py-2.5 font-medium text-gray-700 transition hover:bg-gray-50"
          >
            No, Stay
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 py-2.5 font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Leaving...
              </>
            ) : (
              "Yes, Leave"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
