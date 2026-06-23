import { api } from "@/lib/axios";
import { PaymentPayload, Transaction } from "../../types/payments.definations";

const PAYMENTS_URL = "/payments/";

export const createTransaction = async (
    data: PaymentPayload) => {
    const response = await api.post(`${PAYMENTS_URL}create-checkout-session/`, data)
    return response.data
}

export const getPayments = async (): Promise<Transaction[]> => {
    const response = await api.get(`${PAYMENTS_URL}`);
    return response.data;
};

export const getPaymentDetails = async (id: number) => {
    const response = await api.get(`${PAYMENTS_URL}${id}`);
    return response.data
}

// export const verifyPayments = async (session: string) => {
//     const response = await api.get(`${PAYMENTS_URL}verify/${session}`);
//     return response.data
// }

export const verifyPayments = async (session: string): Promise<{ status: string }> => {
    const response = await api.get<{ status: string }>(`${PAYMENTS_URL}verify/${session}`);
    return response.data;
};