/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const TransferInitiationType = {
    Transfer: "TRANSFER",
    Payout: "PAYOUT",
} as const;
export type TransferInitiationType = ClosedEnum<typeof TransferInitiationType>;

/** @internal */
export const TransferInitiationType$inboundSchema: z.ZodNativeEnum<typeof TransferInitiationType> =
    z.nativeEnum(TransferInitiationType);

/** @internal */
export const TransferInitiationType$outboundSchema: z.ZodNativeEnum<typeof TransferInitiationType> =
    TransferInitiationType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransferInitiationType$ {
    /** @deprecated use `TransferInitiationType$inboundSchema` instead. */
    export const inboundSchema = TransferInitiationType$inboundSchema;
    /** @deprecated use `TransferInitiationType$outboundSchema` instead. */
    export const outboundSchema = TransferInitiationType$outboundSchema;
}
