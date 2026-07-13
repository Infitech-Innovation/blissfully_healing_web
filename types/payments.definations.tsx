import { PaginatedResponse } from "./generic";

// definitions.ts
export type ProductType = "retreat" | "course" | "ebook";
export type PaymentStatus = "completed" | "processing" | "refunded";

export interface Transaction {
  id: number;
  user: number;
  product_type: ProductType;
  product_id: number;
  amount: string;
  currency: string;
  status: string;
  stripe_session_id: string;
  stripe_payment_intent: string;
  created_at: Date;
  updated_at: Date;
}

export interface PaymentPayload {
  product_type: string;
  product_id: number;
}


export type TransactionResponse = PaginatedResponse<Transaction>;