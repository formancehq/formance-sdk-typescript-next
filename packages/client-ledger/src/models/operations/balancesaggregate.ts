/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type BalancesAggregateRequest = {
    ledger: string;
    pit?: Date | undefined;
    useInsertionDate?: boolean | undefined;
    query: { [k: string]: any };
};

/**
 * The request has succeeded.
 */
export type BalancesAggregateResponseBody = {
    data: { [k: string]: any };
};

/** @internal */
export const BalancesAggregateRequest$inboundSchema: z.ZodType<
    BalancesAggregateRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    ledger: z.string(),
    pit: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
    useInsertionDate: z.boolean().optional(),
    query: z.record(z.any()),
});

/** @internal */
export type BalancesAggregateRequest$Outbound = {
    ledger: string;
    pit?: string | undefined;
    useInsertionDate?: boolean | undefined;
    query: { [k: string]: any };
};

/** @internal */
export const BalancesAggregateRequest$outboundSchema: z.ZodType<
    BalancesAggregateRequest$Outbound,
    z.ZodTypeDef,
    BalancesAggregateRequest
> = z.object({
    ledger: z.string(),
    pit: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
    useInsertionDate: z.boolean().optional(),
    query: z.record(z.any()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BalancesAggregateRequest$ {
    /** @deprecated use `BalancesAggregateRequest$inboundSchema` instead. */
    export const inboundSchema = BalancesAggregateRequest$inboundSchema;
    /** @deprecated use `BalancesAggregateRequest$outboundSchema` instead. */
    export const outboundSchema = BalancesAggregateRequest$outboundSchema;
    /** @deprecated use `BalancesAggregateRequest$Outbound` instead. */
    export type Outbound = BalancesAggregateRequest$Outbound;
}

/** @internal */
export const BalancesAggregateResponseBody$inboundSchema: z.ZodType<
    BalancesAggregateResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: z.record(z.any()),
});

/** @internal */
export type BalancesAggregateResponseBody$Outbound = {
    data: { [k: string]: any };
};

/** @internal */
export const BalancesAggregateResponseBody$outboundSchema: z.ZodType<
    BalancesAggregateResponseBody$Outbound,
    z.ZodTypeDef,
    BalancesAggregateResponseBody
> = z.object({
    data: z.record(z.any()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BalancesAggregateResponseBody$ {
    /** @deprecated use `BalancesAggregateResponseBody$inboundSchema` instead. */
    export const inboundSchema = BalancesAggregateResponseBody$inboundSchema;
    /** @deprecated use `BalancesAggregateResponseBody$outboundSchema` instead. */
    export const outboundSchema = BalancesAggregateResponseBody$outboundSchema;
    /** @deprecated use `BalancesAggregateResponseBody$Outbound` instead. */
    export type Outbound = BalancesAggregateResponseBody$Outbound;
}
