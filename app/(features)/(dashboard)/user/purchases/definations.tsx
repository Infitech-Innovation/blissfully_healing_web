// definitions.ts
export type TransactionType = "retreat" | "course" | "ebook";
export type PaymentStatus = "completed" | "processing" | "refunded";

export interface Transaction {
  id: string;
  itemName: string;
  category: TransactionType;
  date: string;
  amount: string;
  paymentMethod: string;
  receiptUrl?: string;
  status: PaymentStatus;
}


// Mock personal purchase history matching your user setup
export const transactionHistory: Transaction[] = [
    {
        id: "TXN-90214",
        itemName: "Forest Renewal Retreat (Deposit & Setup)",
        category: "retreat",
        date: "Jun 02, 2026",
        amount: "KES 38,000",
        paymentMethod: "M-Pesa / Visa",
        status: "completed",
        receiptUrl: "#",
    },
    {
        id: "TXN-88419",
        itemName: "Somatic Grounding: Body Practices for Integration",
        category: "ebook",
        date: "May 14, 2026",
        amount: "KES 2,400",
        paymentMethod: "M-Pesa",
        status: "completed",
        receiptUrl: "#",
    },
    {
        id: "TXN-85122",
        itemName: "The Architecture of Emotional Spaciousness",
        category: "ebook",
        date: "Apr 02, 2026",
        amount: "KES 1,850",
        paymentMethod: "Visa",
        status: "completed",
        receiptUrl: "#",
    },
    {
        id: "TXN-79401",
        itemName: "Somatic Breath Architecture Certificate Track",
        category: "course",
        date: "Feb 28, 2026",
        amount: "KES 14,500",
        paymentMethod: "Bank Transfer",
        status: "completed",
        receiptUrl: "#",
    },
];
