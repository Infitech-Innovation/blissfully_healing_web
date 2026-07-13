"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PageItem = number | "left-ellipsis" | "right-ellipsis";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
  disabled?: boolean;
}

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

const getPageItems = (
  currentPage: number,
  totalPages: number,
  siblingCount: number
): PageItem[] => {
  const totalVisibleSlots = siblingCount * 2 + 5;

  if (totalPages <= totalVisibleSlots) {
    return range(1, totalPages);
  }

  const leftSibling = Math.max(currentPage - siblingCount, 1);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages);
  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < totalPages - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftRange = range(1, 3 + siblingCount * 2);
    return [...leftRange, "right-ellipsis", totalPages];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightRange = range(totalPages - (2 + siblingCount * 2), totalPages);
    return [1, "left-ellipsis", ...rightRange];
  }

  const middleRange = range(leftSibling, rightSibling);
  return [1, "left-ellipsis", ...middleRange, "right-ellipsis", totalPages];
};

export default function Pagination({
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
  siblingCount = 1,
  className,
  disabled = false,
}: PaginationProps) {
  const safePageSize = Math.max(pageSize, 1);
  const totalPages = Math.ceil(totalItems / safePageSize);

  if (totalPages <= 1) return null;

  const pageItems = getPageItems(currentPage, totalPages, siblingCount);
  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const goToPage = (page: number) => {
    if (disabled || page < 1 || page > totalPages || page === currentPage) {
      return;
    }

    onPageChange(page);
  };

  return (
    <nav
      className={cn("mt-10 flex items-center justify-center gap-2", className)}
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={() => goToPage(currentPage - 1)}
        disabled={disabled || !canGoPrevious}
        aria-label="Previous page"
        className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#eadfd4] bg-white text-[#6f5c4f] transition hover:border-[#8f6249] hover:text-[#2f251f] disabled:pointer-events-none disabled:opacity-45"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <div className="flex items-center gap-1">
        {pageItems.map((item) =>
          typeof item === "number" ? (
            <button
              key={item}
              type="button"
              onClick={() => goToPage(item)}
              disabled={disabled}
              aria-current={item === currentPage ? "page" : undefined}
              className={cn(
                "h-10 min-w-10 rounded-[8px] border px-3 text-sm font-semibold transition disabled:pointer-events-none disabled:opacity-45",
                item === currentPage
                  ? "border-[#2f251f] bg-[#2f251f] text-[#fffaf6]"
                  : "border-[#eadfd4] bg-white text-[#6f5c4f] hover:border-[#8f6249] hover:text-[#2f251f]"
              )}
            >
              {item}
            </button>
          ) : (
            <span
              key={item}
              className="flex h-10 min-w-8 items-center justify-center text-sm font-semibold text-[#9a8576]"
              aria-hidden="true"
            >
              ...
            </span>
          )
        )}
      </div>

      <button
        type="button"
        onClick={() => goToPage(currentPage + 1)}
        disabled={disabled || !canGoNext}
        aria-label="Next page"
        className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#eadfd4] bg-white text-[#6f5c4f] transition hover:border-[#8f6249] hover:text-[#2f251f] disabled:pointer-events-none disabled:opacity-45"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
