/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ModulrConfig = {
    name: string;
    apiKey: string;
    apiSecret: string;
    endpoint?: string | undefined;
    /**
     * The frequency at which the connector will try to fetch new BalanceTransaction objects from Stripe API.
     */
    pollingPeriod?: string | undefined;
};

/** @internal */
export const ModulrConfig$inboundSchema: z.ZodType<ModulrConfig, z.ZodTypeDef, unknown> = z.object({
    name: z.string(),
    apiKey: z.string(),
    apiSecret: z.string(),
    endpoint: z.string().optional(),
    pollingPeriod: z.string().default("120s"),
});

/** @internal */
export type ModulrConfig$Outbound = {
    name: string;
    apiKey: string;
    apiSecret: string;
    endpoint?: string | undefined;
    pollingPeriod: string;
};

/** @internal */
export const ModulrConfig$outboundSchema: z.ZodType<
    ModulrConfig$Outbound,
    z.ZodTypeDef,
    ModulrConfig
> = z.object({
    name: z.string(),
    apiKey: z.string(),
    apiSecret: z.string(),
    endpoint: z.string().optional(),
    pollingPeriod: z.string().default("120s"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModulrConfig$ {
    /** @deprecated use `ModulrConfig$inboundSchema` instead. */
    export const inboundSchema = ModulrConfig$inboundSchema;
    /** @deprecated use `ModulrConfig$outboundSchema` instead. */
    export const outboundSchema = ModulrConfig$outboundSchema;
    /** @deprecated use `ModulrConfig$Outbound` instead. */
    export type Outbound = ModulrConfig$Outbound;
}
