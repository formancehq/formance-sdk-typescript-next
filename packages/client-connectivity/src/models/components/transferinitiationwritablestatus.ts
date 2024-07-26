/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const TransferInitiationWritableStatus = {
    WaitingForValidation: "WAITING_FOR_VALIDATION",
    Processing: "PROCESSING",
    Processed: "PROCESSED",
    Failed: "FAILED",
    Rejected: "REJECTED",
    Validated: "VALIDATED",
} as const;
export type TransferInitiationWritableStatus = ClosedEnum<typeof TransferInitiationWritableStatus>;

/** @internal */
export const TransferInitiationWritableStatus$inboundSchema: z.ZodNativeEnum<
    typeof TransferInitiationWritableStatus
> = z.nativeEnum(TransferInitiationWritableStatus);

/** @internal */
export const TransferInitiationWritableStatus$outboundSchema: z.ZodNativeEnum<
    typeof TransferInitiationWritableStatus
> = TransferInitiationWritableStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransferInitiationWritableStatus$ {
    /** @deprecated use `TransferInitiationWritableStatus$inboundSchema` instead. */
    export const inboundSchema = TransferInitiationWritableStatus$inboundSchema;
    /** @deprecated use `TransferInitiationWritableStatus$outboundSchema` instead. */
    export const outboundSchema = TransferInitiationWritableStatus$outboundSchema;
}
