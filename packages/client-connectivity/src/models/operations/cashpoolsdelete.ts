/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type CashPoolsDeleteRequest = {
    poolId: string;
};

/** @internal */
export const CashPoolsDeleteRequest$inboundSchema: z.ZodType<
    CashPoolsDeleteRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    poolId: z.string(),
});

/** @internal */
export type CashPoolsDeleteRequest$Outbound = {
    poolId: string;
};

/** @internal */
export const CashPoolsDeleteRequest$outboundSchema: z.ZodType<
    CashPoolsDeleteRequest$Outbound,
    z.ZodTypeDef,
    CashPoolsDeleteRequest
> = z.object({
    poolId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashPoolsDeleteRequest$ {
    /** @deprecated use `CashPoolsDeleteRequest$inboundSchema` instead. */
    export const inboundSchema = CashPoolsDeleteRequest$inboundSchema;
    /** @deprecated use `CashPoolsDeleteRequest$outboundSchema` instead. */
    export const outboundSchema = CashPoolsDeleteRequest$outboundSchema;
    /** @deprecated use `CashPoolsDeleteRequest$Outbound` instead. */
    export type Outbound = CashPoolsDeleteRequest$Outbound;
}
