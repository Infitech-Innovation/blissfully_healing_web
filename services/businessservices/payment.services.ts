import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { PaymentPayload,TransactionResponse } from "../../types/payments.definations";
import { createTransaction, getPaymentDetails, getPayments, verifyPayments } from "../endpoints/payment.endpoints";

export const paymentKeys = {
    all: ["payments"] as const,
    list: (page: number) => [...paymentKeys.all, "list", page] as const,
    detail: (id: number) => [...paymentKeys.all, "details", id] as const,
    verify: (sessionSlug: string) => [...paymentKeys.all, "verify", sessionSlug] as const,
};

/**
 * 1. Fetch all transactions hook
 */
export const usePayments = (page = 1) => {
    return useQuery<TransactionResponse, Error>({
        queryKey: paymentKeys.list(page),
        queryFn: () => getPayments(page),
        placeholderData: (previousData) => previousData,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    });
};

/**
 * 2. Fetch specific payment item details hook
 */
export const usePaymentDetails = (id: number) => {
    return useQuery({
        queryKey: paymentKeys.detail(id),
        queryFn: () => getPaymentDetails(id),
        enabled: !!id,
    });
};

/**
 * 3. Verify Stripe / Provider Checkout Session hook
 */
export const useVerifyPayment = (sessionSlug: string) => {
    return useQuery<{ status: string }, Error>({
        queryKey: paymentKeys.verify(sessionSlug),
        queryFn: () => verifyPayments(sessionSlug),
        enabled: !!sessionSlug,
        retry: 1,
    });
};

/**
 * 4. Create new transaction session mutation
 */
export const useCreateTransactionMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: PaymentPayload) => createTransaction(data),
        onSuccess: (newTransaction) => {
            queryClient.invalidateQueries({ queryKey: paymentKeys.all });

            // Seed newly returned detail caches instantly to remove loading states later
            if (newTransaction?.id) {
                queryClient.setQueryData(paymentKeys.detail(newTransaction.id), newTransaction);
            }
        },
    });
};
