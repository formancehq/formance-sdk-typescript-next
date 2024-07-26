/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type MoneycorpConfig = {
    name: string;
    /**
     * The frequency at which the connector will try to fetch new BalanceTransaction objects from Stripe API.
     */
    pollingPeriod?: string | undefined;
    clientID: string;
    apiKey: string;
    endpoint: string;
};

/** @internal */
export const MoneycorpConfig$inboundSchema: z.ZodType<MoneycorpConfig, z.ZodTypeDef, unknown> =
    z.object({
        name: z.string(),
        pollingPeriod: z.string().default("120s"),
        clientID: z.string(),
        apiKey: z.string(),
        endpoint: z.string(),
    });

/** @internal */
export type MoneycorpConfig$Outbound = {
    name: string;
    pollingPeriod: string;
    clientID: string;
    apiKey: string;
    endpoint: string;
};

/** @internal */
export const MoneycorpConfig$outboundSchema: z.ZodType<
    MoneycorpConfig$Outbound,
    z.ZodTypeDef,
    MoneycorpConfig
> = z.object({
    name: z.string(),
    pollingPeriod: z.string().default("120s"),
    clientID: z.string(),
    apiKey: z.string(),
    endpoint: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MoneycorpConfig$ {
    /** @deprecated use `MoneycorpConfig$inboundSchema` instead. */
    export const inboundSchema = MoneycorpConfig$inboundSchema;
    /** @deprecated use `MoneycorpConfig$outboundSchema` instead. */
    export const outboundSchema = MoneycorpConfig$outboundSchema;
    /** @deprecated use `MoneycorpConfig$Outbound` instead. */
    export type Outbound = MoneycorpConfig$Outbound;
}
