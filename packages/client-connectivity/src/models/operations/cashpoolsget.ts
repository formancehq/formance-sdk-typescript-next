/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type CashPoolsGetRequest = {
    poolId: string;
};

/**
 * The request has succeeded.
 */
export type CashPoolsGetResponseBody = {
    data: components.CashPool;
};

/** @internal */
export const CashPoolsGetRequest$inboundSchema: z.ZodType<
    CashPoolsGetRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    poolId: z.string(),
});

/** @internal */
export type CashPoolsGetRequest$Outbound = {
    poolId: string;
};

/** @internal */
export const CashPoolsGetRequest$outboundSchema: z.ZodType<
    CashPoolsGetRequest$Outbound,
    z.ZodTypeDef,
    CashPoolsGetRequest
> = z.object({
    poolId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashPoolsGetRequest$ {
    /** @deprecated use `CashPoolsGetRequest$inboundSchema` instead. */
    export const inboundSchema = CashPoolsGetRequest$inboundSchema;
    /** @deprecated use `CashPoolsGetRequest$outboundSchema` instead. */
    export const outboundSchema = CashPoolsGetRequest$outboundSchema;
    /** @deprecated use `CashPoolsGetRequest$Outbound` instead. */
    export type Outbound = CashPoolsGetRequest$Outbound;
}

/** @internal */
export const CashPoolsGetResponseBody$inboundSchema: z.ZodType<
    CashPoolsGetResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: components.CashPool$inboundSchema,
});

/** @internal */
export type CashPoolsGetResponseBody$Outbound = {
    data: components.CashPool$Outbound;
};

/** @internal */
export const CashPoolsGetResponseBody$outboundSchema: z.ZodType<
    CashPoolsGetResponseBody$Outbound,
    z.ZodTypeDef,
    CashPoolsGetResponseBody
> = z.object({
    data: components.CashPool$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashPoolsGetResponseBody$ {
    /** @deprecated use `CashPoolsGetResponseBody$inboundSchema` instead. */
    export const inboundSchema = CashPoolsGetResponseBody$inboundSchema;
    /** @deprecated use `CashPoolsGetResponseBody$outboundSchema` instead. */
    export const outboundSchema = CashPoolsGetResponseBody$outboundSchema;
    /** @deprecated use `CashPoolsGetResponseBody$Outbound` instead. */
    export type Outbound = CashPoolsGetResponseBody$Outbound;
}
