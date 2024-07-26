/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type StripeConfig = {
    name: string;
    /**
     * The frequency at which the connector will try to fetch new BalanceTransaction objects from Stripe API.
     */
    pollingPeriod?: string | undefined;
    apiKey: string;
    pageSize?: number | undefined;
};

/** @internal */
export const StripeConfig$inboundSchema: z.ZodType<StripeConfig, z.ZodTypeDef, unknown> = z.object({
    name: z.string(),
    pollingPeriod: z.string().default("120s"),
    apiKey: z.string(),
    pageSize: z.number().int().default(10),
});

/** @internal */
export type StripeConfig$Outbound = {
    name: string;
    pollingPeriod: string;
    apiKey: string;
    pageSize: number;
};

/** @internal */
export const StripeConfig$outboundSchema: z.ZodType<
    StripeConfig$Outbound,
    z.ZodTypeDef,
    StripeConfig
> = z.object({
    name: z.string(),
    pollingPeriod: z.string().default("120s"),
    apiKey: z.string(),
    pageSize: z.number().int().default(10),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StripeConfig$ {
    /** @deprecated use `StripeConfig$inboundSchema` instead. */
    export const inboundSchema = StripeConfig$inboundSchema;
    /** @deprecated use `StripeConfig$outboundSchema` instead. */
    export const outboundSchema = StripeConfig$outboundSchema;
    /** @deprecated use `StripeConfig$Outbound` instead. */
    export type Outbound = StripeConfig$Outbound;
}
