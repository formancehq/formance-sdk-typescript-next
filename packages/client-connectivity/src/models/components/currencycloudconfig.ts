/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type CurrencyCloudConfig = {
    name: string;
    apiKey: string;
    loginID: string;
    /**
     * The frequency at which the connector will try to fetch new BalanceTransaction objects from Stripe API.
     */
    pollingPeriod?: string | undefined;
    /**
     * The endpoint to use for the API
     */
    endpoint?: string | undefined;
};

/** @internal */
export const CurrencyCloudConfig$inboundSchema: z.ZodType<
    CurrencyCloudConfig,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    apiKey: z.string(),
    loginID: z.string(),
    pollingPeriod: z.string().default("120s"),
    endpoint: z.string().default("https://devapi.currencycloud.com"),
});

/** @internal */
export type CurrencyCloudConfig$Outbound = {
    name: string;
    apiKey: string;
    loginID: string;
    pollingPeriod: string;
    endpoint: string;
};

/** @internal */
export const CurrencyCloudConfig$outboundSchema: z.ZodType<
    CurrencyCloudConfig$Outbound,
    z.ZodTypeDef,
    CurrencyCloudConfig
> = z.object({
    name: z.string(),
    apiKey: z.string(),
    loginID: z.string(),
    pollingPeriod: z.string().default("120s"),
    endpoint: z.string().default("https://devapi.currencycloud.com"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CurrencyCloudConfig$ {
    /** @deprecated use `CurrencyCloudConfig$inboundSchema` instead. */
    export const inboundSchema = CurrencyCloudConfig$inboundSchema;
    /** @deprecated use `CurrencyCloudConfig$outboundSchema` instead. */
    export const outboundSchema = CurrencyCloudConfig$outboundSchema;
    /** @deprecated use `CurrencyCloudConfig$Outbound` instead. */
    export type Outbound = CurrencyCloudConfig$Outbound;
}
