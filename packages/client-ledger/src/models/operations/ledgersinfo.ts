/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type LedgersInfoRequest = {
    ledger: string;
};

/**
 * The request has succeeded.
 */
export type LedgersInfoResponseBody = {
    data: components.LedgerInfo;
};

/** @internal */
export const LedgersInfoRequest$inboundSchema: z.ZodType<
    LedgersInfoRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    ledger: z.string(),
});

/** @internal */
export type LedgersInfoRequest$Outbound = {
    ledger: string;
};

/** @internal */
export const LedgersInfoRequest$outboundSchema: z.ZodType<
    LedgersInfoRequest$Outbound,
    z.ZodTypeDef,
    LedgersInfoRequest
> = z.object({
    ledger: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LedgersInfoRequest$ {
    /** @deprecated use `LedgersInfoRequest$inboundSchema` instead. */
    export const inboundSchema = LedgersInfoRequest$inboundSchema;
    /** @deprecated use `LedgersInfoRequest$outboundSchema` instead. */
    export const outboundSchema = LedgersInfoRequest$outboundSchema;
    /** @deprecated use `LedgersInfoRequest$Outbound` instead. */
    export type Outbound = LedgersInfoRequest$Outbound;
}

/** @internal */
export const LedgersInfoResponseBody$inboundSchema: z.ZodType<
    LedgersInfoResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: components.LedgerInfo$inboundSchema,
});

/** @internal */
export type LedgersInfoResponseBody$Outbound = {
    data: components.LedgerInfo$Outbound;
};

/** @internal */
export const LedgersInfoResponseBody$outboundSchema: z.ZodType<
    LedgersInfoResponseBody$Outbound,
    z.ZodTypeDef,
    LedgersInfoResponseBody
> = z.object({
    data: components.LedgerInfo$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LedgersInfoResponseBody$ {
    /** @deprecated use `LedgersInfoResponseBody$inboundSchema` instead. */
    export const inboundSchema = LedgersInfoResponseBody$inboundSchema;
    /** @deprecated use `LedgersInfoResponseBody$outboundSchema` instead. */
    export const outboundSchema = LedgersInfoResponseBody$outboundSchema;
    /** @deprecated use `LedgersInfoResponseBody$Outbound` instead. */
    export type Outbound = LedgersInfoResponseBody$Outbound;
}
