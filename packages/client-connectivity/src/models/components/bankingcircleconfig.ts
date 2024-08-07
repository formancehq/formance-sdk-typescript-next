/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type BankingCircleConfig = {
    name: string;
    /**
     * The frequency at which the connector will try to fetch new BalanceTransaction objects from Stripe API.
     */
    pollingPeriod?: string | undefined;
    username: string;
    password: string;
    endpoint: string;
    authorizationEndpoint: string;
    userCertificate: string;
    userCertificateKey: string;
};

/** @internal */
export const BankingCircleConfig$inboundSchema: z.ZodType<
    BankingCircleConfig,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    pollingPeriod: z.string().default("120s"),
    username: z.string(),
    password: z.string(),
    endpoint: z.string(),
    authorizationEndpoint: z.string(),
    userCertificate: z.string(),
    userCertificateKey: z.string(),
});

/** @internal */
export type BankingCircleConfig$Outbound = {
    name: string;
    pollingPeriod: string;
    username: string;
    password: string;
    endpoint: string;
    authorizationEndpoint: string;
    userCertificate: string;
    userCertificateKey: string;
};

/** @internal */
export const BankingCircleConfig$outboundSchema: z.ZodType<
    BankingCircleConfig$Outbound,
    z.ZodTypeDef,
    BankingCircleConfig
> = z.object({
    name: z.string(),
    pollingPeriod: z.string().default("120s"),
    username: z.string(),
    password: z.string(),
    endpoint: z.string(),
    authorizationEndpoint: z.string(),
    userCertificate: z.string(),
    userCertificateKey: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankingCircleConfig$ {
    /** @deprecated use `BankingCircleConfig$inboundSchema` instead. */
    export const inboundSchema = BankingCircleConfig$inboundSchema;
    /** @deprecated use `BankingCircleConfig$outboundSchema` instead. */
    export const outboundSchema = BankingCircleConfig$outboundSchema;
    /** @deprecated use `BankingCircleConfig$Outbound` instead. */
    export type Outbound = BankingCircleConfig$Outbound;
}
