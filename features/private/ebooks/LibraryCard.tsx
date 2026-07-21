"use client";

import {
  Calendar,
  FileText,
  Tag,
  Loader2,
  ArrowDownToLine,
} from "lucide-react";
import Image from "next/image";
import { OwnedEbooks } from "@/types/ebooks.definations";
import { formatDate } from "@/utils/utils";
import { useDownloadEbookMutation } from "@/hooks/useEbooks";

type LibraryProps = {
  library: OwnedEbooks;
};

export default function LibraryCard({ library }: LibraryProps) {
  const book = library.ebook;
  const bookData = library;

  const { mutateAsync: downloadFile, isPending } = useDownloadEbookMutation();

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop click bleeding
    try {
      const response = await downloadFile(book.slug);
      const rawData = response?.data || response;

      // Match Blob content types mapping dynamically based on configuration parameters
      const contentType = book.file_format?.toLowerCase() === "epub" ? "application/epub+zip" : "application/pdf";
      const fileExtension = book.file_format?.toLowerCase() === "epub" ? "epub" : "pdf";

      const blob = new Blob([rawData], { type: contentType });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${book.title || "ebook"}.${fileExtension}`);
      document.body.appendChild(link);

      link.click();

      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download digital asset:", error);
      alert("Unable to download file. Please check your connection and try again.");
    }
  };

  return (
    <div>
      <div>
        <article
          key={book.slug}
          className="group flex flex-col overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white p-6 shadow-[0_18px_45px_rgba(63,52,44,0.06)] transition duration-300 hover:shadow-[0_28px_70px_rgba(63,52,44,0.12)]"
        >
          {/* Purchase Header Bar */}
          <div className="mb-5 flex items-center justify-between border-b border-[#f8f0e8] pb-4 text-xs text-[#6f5c4f]">
            <span className="flex items-center gap-1.5 font-medium text-[#2f251f]">
              <Calendar size={14} className="text-[#8f6249]" />
              Acquired {formatDate(bookData.purchased_at)}
            </span>
            {book.price === "0.00" ? (
              <span className="flex items-center gap-1.5 font-bold text-xl text-[#0F766E]">
                <Tag size={20} className="text-[#0F766E]" />
                Free
              </span>
            ) : (
              <span className="flex items-center gap-1.5 font-bold text-xl text-[#2f251f]">
                <Tag size={20} className="text-[#8f6249]" />
                KES {book.price}
              </span>
            )
            }
          </div>

          {/* Layout Content Frame */}
          <div className="flex flex-col gap-6 sm:flex-row">
            {/* Book Cover Container */}
            <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-[6px] bg-[#f8f0e8] shadow-md sm:w-40">
              <Image
                src={book.cover_image}
                alt={book.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
                width={300}
                height={400}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2f251f]/20 to-transparent" />
              <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-[#8f6249] shadow-sm">
                {book.category_label}
              </span>
            </div>

            {/* Primary Book Metadata */}
            <div className="flex flex-1 flex-col justify-between gap-4">
              <div>
                <h3 className="mb-1 font-serif text-xl font-semibold text-[#2f251f] line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-xs italic text-[#8f6249]">
                  by {book.author}
                </p>
              </div>

              {/* Core Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 rounded-[6px] bg-[#fffaf6] p-3 text-center text-[11px] text-[#6f5c4f] py-6">
                <div className="border-r border-[#eadfd4]/60">
                  <span className="block text-[9px] uppercase tracking-wider text-gray-400">
                    Format
                  </span>
                  <span className="font-semibold text-[#2f251f] flex items-center justify-center gap-1 mt-0.5 uppercase">
                    <FileText size={11} className="text-[#8f6249]" />
                    {book.file_format}
                  </span>
                </div>
                <div className="border-r border-[#eadfd4]/60">
                  <span className="block text-[9px] uppercase tracking-wider text-gray-400">
                    Extent
                  </span>
                  <span className="font-semibold text-[#2f251f] block mt-0.5">
                    {book.file_pages} Pages
                  </span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-gray-400">
                    Size
                  </span>
                  <span className="font-semibold text-[#2f251f] block mt-0.5">
                    {book.file_size_mb} MB
                  </span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-col gap-2 sm:flex-row mt-auto">
                {/* Download File Trigger */}
                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={isPending}
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-[6px] bg-[#8f6249] px-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#2f251f] disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Downloading...
                    </>
                  ) : (
                    <>
                      <ArrowDownToLine size={14} />
                      Download
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>
        </article>
      </div>
    </div>
  );
}