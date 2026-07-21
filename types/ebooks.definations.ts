import { PaginatedResponse } from "./generic";

// definitions.ts
export type EbookFormat = "PDF" | "EPUB" | "MOBI";
export interface EBookList {
  id: number;
  slug: string;
  title: string;
  author: string;
  category_label: string;
  cover_image: string;
  price: string;
  file_format: EbookFormat;
  file_pages: number;
  file_size_mb: string;
}

export interface EBook extends EBookList {
  short_description: string;
  modules: {
    id: number;
    text: string;
    order: number;
  }[];
  is_owned: boolean;
}

export interface OwnedEbooks {
  id: string;
  ebook: EBookList;
  status: "PENDING_PAYMENT" | "PENDING_CALL" | "CONFIRMED" | "CANCELLED";
  purchased_at: string;
}


export type EbookListResponse = PaginatedResponse<EBookList>;
export type OwnedEbookResponse = PaginatedResponse<OwnedEbooks>;
