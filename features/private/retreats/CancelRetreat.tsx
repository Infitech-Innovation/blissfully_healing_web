"use client";

import { Loader2, X } from "lucide-react";

interface Props {
    name: string;
    title?: string;
    description?: string;
    onConfirm: () => void;
    onCancel: () => void;
    isLoading?: boolean;
}

export default function CancelRetreatModal({
    name,
    title = "Cancel Retreat",
    onConfirm,
    onCancel,
    isLoading = false,
}: Props) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={(e) => {
                if (e.target === e.currentTarget) onCancel();
            }}
        >
            <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                    <X className="h-7 w-7 text-red-600" />
                </div>

                <h3 className="mb-2 text-xl font-bold text-gray-800">{title}</h3>

                <p className="mb-6 text-sm leading-relaxed text-gray-500">
                    Are you sure you want to cancel{" "}
                    <span className="font-semibold text-gray-700">“{name}”</span>?
                </p>

                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="flex-1 rounded-xl border border-gray-300 py-2.5 font-medium text-gray-700 transition hover:bg-gray-50"
                    >
                        No, Keep It
                    </button>
                    <button
                        type="button"
                        onClick={onConfirm}
                        disabled={isLoading}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 py-2.5 font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 size={16} className="animate-spin" />
                                Cancelling...
                            </>
                        ) : (
                            "Yes, Cancel"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}