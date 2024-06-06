/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
export namespace BankingCircleConfig$ {
    export const inboundSchema: z.ZodType<BankingCircleConfig, z.ZodTypeDef, unknown> = z.object({
        name: z.string(),
        pollingPeriod: z.string().default("120s"),
        username: z.string(),
        password: z.string(),
        endpoint: z.string(),
        authorizationEndpoint: z.string(),
        userCertificate: z.string(),
        userCertificateKey: z.string(),
    });

    export type Outbound = {
        name: string;
        pollingPeriod: string;
        username: string;
        password: string;
        endpoint: string;
        authorizationEndpoint: string;
        userCertificate: string;
        userCertificateKey: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BankingCircleConfig> = z.object({
        name: z.string(),
        pollingPeriod: z.string().default("120s"),
        username: z.string(),
        password: z.string(),
        endpoint: z.string(),
        authorizationEndpoint: z.string(),
        userCertificate: z.string(),
        userCertificateKey: z.string(),
    });
}
