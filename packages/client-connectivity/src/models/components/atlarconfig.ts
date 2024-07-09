/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type AtlarConfig = {
    name: string;
    /**
     * The frequency at which the connector will try to fetch new BalanceTransaction objects from Stripe API.
     */
    pollingPeriod?: string | undefined;
    /**
     * The base URL the client uses for making requests towards the Atlar API.
     */
    baseUrl?: string | undefined;
    /**
     * The frequency at which the connector tries to fetch the status of payment initiations from the Atlar API.
     */
    transferInitiationStatusPollingPeriod?: string | undefined;
    /**
     * The access key used by the connector for authorizing requests to the Atlar API. You can obtain it along with the associated secret from the Atlar dashboard.
     */
    accessKey: string;
    /**
     * The secret used by the connector for authorizing requests to the Atlar API. You can obtain it along with the associated access key from the Atlar dashboard.
     */
    secret: string;
    /**
     * Number of items to fetch when querying paginated APIs.
     */
    pageSize?: number | undefined;
};

/** @internal */
export const AtlarConfig$inboundSchema: z.ZodType<AtlarConfig, z.ZodTypeDef, unknown> = z.object({
    name: z.string(),
    pollingPeriod: z.string().default("120s"),
    baseUrl: z.string().default("https://api.atlar.com"),
    transferInitiationStatusPollingPeriod: z.string().default("120s"),
    accessKey: z.string(),
    secret: z.string(),
    pageSize: z.number().int().default(25),
});

/** @internal */
export type AtlarConfig$Outbound = {
    name: string;
    pollingPeriod: string;
    baseUrl: string;
    transferInitiationStatusPollingPeriod: string;
    accessKey: string;
    secret: string;
    pageSize: number;
};

/** @internal */
export const AtlarConfig$outboundSchema: z.ZodType<
    AtlarConfig$Outbound,
    z.ZodTypeDef,
    AtlarConfig
> = z.object({
    name: z.string(),
    pollingPeriod: z.string().default("120s"),
    baseUrl: z.string().default("https://api.atlar.com"),
    transferInitiationStatusPollingPeriod: z.string().default("120s"),
    accessKey: z.string(),
    secret: z.string(),
    pageSize: z.number().int().default(25),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtlarConfig$ {
    /** @deprecated use `AtlarConfig$inboundSchema` instead. */
    export const inboundSchema = AtlarConfig$inboundSchema;
    /** @deprecated use `AtlarConfig$outboundSchema` instead. */
    export const outboundSchema = AtlarConfig$outboundSchema;
    /** @deprecated use `AtlarConfig$Outbound` instead. */
    export type Outbound = AtlarConfig$Outbound;
}
