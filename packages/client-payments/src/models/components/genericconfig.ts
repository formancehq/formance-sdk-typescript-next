/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
export namespace GenericConfig$ {
    export const inboundSchema: z.ZodType<GenericConfig, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            pollingPeriod: z.string().default("120s"),
            apiKey: z.string(),
            endpoint: z.string(),
        })
        .transform((v) => {
            return {
                name: v.name,
                pollingPeriod: v.pollingPeriod,
                apiKey: v.apiKey,
                endpoint: v.endpoint,
            };
        });

    export type Outbound = {
        name: string;
        pollingPeriod: string;
        apiKey: string;
        endpoint: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GenericConfig> = z
        .object({
            name: z.string(),
            pollingPeriod: z.string().default("120s"),
            apiKey: z.string(),
            endpoint: z.string(),
        })
        .transform((v) => {
            return {
                name: v.name,
                pollingPeriod: v.pollingPeriod,
                apiKey: v.apiKey,
                endpoint: v.endpoint,
            };
        });
}
