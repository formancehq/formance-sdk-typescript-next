/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type CashPoolsBalancesRequest = {
    poolId: string;
    at: Date;
};

export type CashPoolsBalancesData = {
    balances: Array<components.PoolBalance>;
};

/**
 * The request has succeeded.
 */
export type CashPoolsBalancesResponseBody = {
    data: CashPoolsBalancesData;
};

/** @internal */
export const CashPoolsBalancesRequest$inboundSchema: z.ZodType<
    CashPoolsBalancesRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    poolId: z.string(),
    at: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
});

/** @internal */
export type CashPoolsBalancesRequest$Outbound = {
    poolId: string;
    at: string;
};

/** @internal */
export const CashPoolsBalancesRequest$outboundSchema: z.ZodType<
    CashPoolsBalancesRequest$Outbound,
    z.ZodTypeDef,
    CashPoolsBalancesRequest
> = z.object({
    poolId: z.string(),
    at: z.date().transform((v) => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashPoolsBalancesRequest$ {
    /** @deprecated use `CashPoolsBalancesRequest$inboundSchema` instead. */
    export const inboundSchema = CashPoolsBalancesRequest$inboundSchema;
    /** @deprecated use `CashPoolsBalancesRequest$outboundSchema` instead. */
    export const outboundSchema = CashPoolsBalancesRequest$outboundSchema;
    /** @deprecated use `CashPoolsBalancesRequest$Outbound` instead. */
    export type Outbound = CashPoolsBalancesRequest$Outbound;
}

/** @internal */
export const CashPoolsBalancesData$inboundSchema: z.ZodType<
    CashPoolsBalancesData,
    z.ZodTypeDef,
    unknown
> = z.object({
    balances: z.array(components.PoolBalance$inboundSchema),
});

/** @internal */
export type CashPoolsBalancesData$Outbound = {
    balances: Array<components.PoolBalance$Outbound>;
};

/** @internal */
export const CashPoolsBalancesData$outboundSchema: z.ZodType<
    CashPoolsBalancesData$Outbound,
    z.ZodTypeDef,
    CashPoolsBalancesData
> = z.object({
    balances: z.array(components.PoolBalance$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashPoolsBalancesData$ {
    /** @deprecated use `CashPoolsBalancesData$inboundSchema` instead. */
    export const inboundSchema = CashPoolsBalancesData$inboundSchema;
    /** @deprecated use `CashPoolsBalancesData$outboundSchema` instead. */
    export const outboundSchema = CashPoolsBalancesData$outboundSchema;
    /** @deprecated use `CashPoolsBalancesData$Outbound` instead. */
    export type Outbound = CashPoolsBalancesData$Outbound;
}

/** @internal */
export const CashPoolsBalancesResponseBody$inboundSchema: z.ZodType<
    CashPoolsBalancesResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: z.lazy(() => CashPoolsBalancesData$inboundSchema),
});

/** @internal */
export type CashPoolsBalancesResponseBody$Outbound = {
    data: CashPoolsBalancesData$Outbound;
};

/** @internal */
export const CashPoolsBalancesResponseBody$outboundSchema: z.ZodType<
    CashPoolsBalancesResponseBody$Outbound,
    z.ZodTypeDef,
    CashPoolsBalancesResponseBody
> = z.object({
    data: z.lazy(() => CashPoolsBalancesData$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashPoolsBalancesResponseBody$ {
    /** @deprecated use `CashPoolsBalancesResponseBody$inboundSchema` instead. */
    export const inboundSchema = CashPoolsBalancesResponseBody$inboundSchema;
    /** @deprecated use `CashPoolsBalancesResponseBody$outboundSchema` instead. */
    export const outboundSchema = CashPoolsBalancesResponseBody$outboundSchema;
    /** @deprecated use `CashPoolsBalancesResponseBody$Outbound` instead. */
    export type Outbound = CashPoolsBalancesResponseBody$Outbound;
}
