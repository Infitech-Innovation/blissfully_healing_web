import { PaginatedResponse } from "@/types/generic";

export function getPaginationPageSize<T>(
  response: PaginatedResponse<T> | undefined,
  currentPage: number,
  fallbackLength: number,
) {
  const currentLength = Math.max(fallbackLength, 1);

  if (!response) return currentLength;
  if (response.next || currentPage === 1) return currentLength;
  if (!response.previous || currentPage <= 1) return currentLength;

  return Math.max(
    Math.ceil((response.count - currentLength) / (currentPage - 1)),
    currentLength,
    1,
  );
}
