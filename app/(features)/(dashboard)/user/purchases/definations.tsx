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

// Mock personal purchase history matching your user setup
// export const transactionHistory: Transaction[] = [
//   {
//     id: "TXN-90214",
//     itemName: "Forest Renewal Retreat (Deposit & Setup)",
//     category: "retreat",
//     date: "Jun 02, 2026",
//     amount: "KES 38,000",
//     paymentMethod: "M-Pesa / Visa",
//     status: "completed",
//     receiptUrl: "#",
//   },
//   {
//     id: "TXN-88419",
//     itemName: "Somatic Grounding: Body Practices for Integration",
//     category: "ebook",
//     date: "May 14, 2026",
//     amount: "KES 2,400",
//     paymentMethod: "M-Pesa",
//     status: "completed",
//     receiptUrl: "#",
//   },
//   {
//     id: "TXN-85122",
//     itemName: "The Architecture of Emotional Spaciousness",
//     category: "ebook",
//     date: "Apr 02, 2026",
//     amount: "KES 1,850",
//     paymentMethod: "Visa",
//     status: "completed",
//     receiptUrl: "#",
//   },
//   {
//     id: "TXN-79401",
//     itemName: "Somatic Breath Architecture Certificate Track",
//     category: "course",
//     date: "Feb 28, 2026",
//     amount: "KES 14,500",
//     paymentMethod: "Bank Transfer",
//     status: "completed",
//     receiptUrl: "#",
//   },
// ];
