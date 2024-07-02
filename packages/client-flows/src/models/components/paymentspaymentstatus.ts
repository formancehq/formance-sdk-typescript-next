/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const PaymentsPaymentStatus = {
    Pending: "PENDING",
    Succeeded: "SUCCEEDED",
    Cancelled: "CANCELLED",
    Failed: "FAILED",
    Expired: "EXPIRED",
    Refunded: "REFUNDED",
    RefundedFailure: "REFUNDED_FAILURE",
    Dispute: "DISPUTE",
    DisputeWon: "DISPUTE_WON",
    DisputeLost: "DISPUTE_LOST",
    Other: "OTHER",
} as const;
export type PaymentsPaymentStatus = ClosedEnum<typeof PaymentsPaymentStatus>;

/** @internal */
export namespace PaymentsPaymentStatus$ {
    export const inboundSchema: z.ZodNativeEnum<typeof PaymentsPaymentStatus> =
        z.nativeEnum(PaymentsPaymentStatus);
    export const outboundSchema: z.ZodNativeEnum<typeof PaymentsPaymentStatus> = inboundSchema;
}