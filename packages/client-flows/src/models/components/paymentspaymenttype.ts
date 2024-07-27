/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const PaymentsPaymentType = {
    PayIn: "PAY-IN",
    Payout: "PAYOUT",
    Transfer: "TRANSFER",
    Other: "OTHER",
} as const;
export type PaymentsPaymentType = ClosedEnum<typeof PaymentsPaymentType>;

/** @internal */
export const PaymentsPaymentType$inboundSchema: z.ZodNativeEnum<typeof PaymentsPaymentType> =
    z.nativeEnum(PaymentsPaymentType);

/** @internal */
export const PaymentsPaymentType$outboundSchema: z.ZodNativeEnum<typeof PaymentsPaymentType> =
    PaymentsPaymentType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentsPaymentType$ {
    /** @deprecated use `PaymentsPaymentType$inboundSchema` instead. */
    export const inboundSchema = PaymentsPaymentType$inboundSchema;
    /** @deprecated use `PaymentsPaymentType$outboundSchema` instead. */
    export const outboundSchema = PaymentsPaymentType$outboundSchema;
}
