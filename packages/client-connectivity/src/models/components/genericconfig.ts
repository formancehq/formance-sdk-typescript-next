/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GenericConfig = {
    name: string;
    /**
     * The frequency at which the connector will try to fetch new BalanceTransaction objects from Stripe API.
     */
    pollingPeriod?: string | undefined;
    apiKey: string;
    endpoint: string;
};

/** @internal */
export const GenericConfig$inboundSchema: z.ZodType<GenericConfig, z.ZodTypeDef, unknown> =
    z.object({
        name: z.string(),
        pollingPeriod: z.string().default("120s"),
        apiKey: z.string(),
        endpoint: z.string(),
    });

/** @internal */
export type GenericConfig$Outbound = {
    name: string;
    pollingPeriod: string;
    apiKey: string;
    endpoint: string;
};

/** @internal */
export const GenericConfig$outboundSchema: z.ZodType<
    GenericConfig$Outbound,
    z.ZodTypeDef,
    GenericConfig
> = z.object({
    name: z.string(),
    pollingPeriod: z.string().default("120s"),
    apiKey: z.string(),
    endpoint: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenericConfig$ {
    /** @deprecated use `GenericConfig$inboundSchema` instead. */
    export const inboundSchema = GenericConfig$inboundSchema;
    /** @deprecated use `GenericConfig$outboundSchema` instead. */
    export const outboundSchema = GenericConfig$outboundSchema;
    /** @deprecated use `GenericConfig$Outbound` instead. */
    export type Outbound = GenericConfig$Outbound;
}
