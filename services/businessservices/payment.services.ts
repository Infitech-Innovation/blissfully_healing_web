import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { PaymentPayload, Transaction } from "../../types/payments.definations";
import { createTransaction, getPaymentDetails, getPayments, verifyPayments } from "../endpoints/payment.endpoints";

/**
 * 1. Fetch all transactions hook
 */
export const usePayments = () => {
    return useQuery<Transaction[], Error>({
        queryKey: ["payments"],
        queryFn: getPayments,
    });
};

/**
 * 2. Fetch specific payment item details hook
 */
export const usePaymentDetails = (id: number) => {
    return useQuery({
        queryKey: ["payments", "details", id],
        queryFn: () => getPaymentDetails(id),
        enabled: !!id,
    });
};

/**
 * 3. Verify Stripe / Provider Checkout Session hook
 */
export const useVerifyPayment = (sessionSlug: string) => {
    return useQuery<{ status: string }, Error>({
        queryKey: ["payments", "verify", sessionSlug],
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
            queryClient.invalidateQueries({ queryKey: ["payments"] });

            // Seed newly returned detail caches instantly to remove loading states later
            if (newTransaction?.id) {
                queryClient.setQueryData(["payments", "details", newTransaction.id], newTransaction);
            }
        },
    });
};