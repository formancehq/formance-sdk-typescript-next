/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type ConnectorsGetRequest = {
    connector: components.Connector;
    connectorId: string;
};

export type ConnectorsGetData =
    | components.WiseConfig
    | components.StripeConfig
    | components.GenericConfig
    | components.ModulrConfig
    | components.CurrencyCloudConfig
    | components.MangoPayConfig
    | components.MoneycorpConfig
    | components.AdyenConfig
    | components.DumypayConfig
    | components.AtlarConfig
    | components.BankingCircleConfig;

/**
 * The request has succeeded.
 */
export type ConnectorsGetResponseBody = {
    data:
        | components.WiseConfig
        | components.StripeConfig
        | components.GenericConfig
        | components.ModulrConfig
        | components.CurrencyCloudConfig
        | components.MangoPayConfig
        | components.MoneycorpConfig
        | components.AdyenConfig
        | components.DumypayConfig
        | components.AtlarConfig
        | components.BankingCircleConfig;
};

/** @internal */
export const ConnectorsGetRequest$inboundSchema: z.ZodType<
    ConnectorsGetRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    connector: components.Connector$inboundSchema,
    connectorId: z.string(),
});

/** @internal */
export type ConnectorsGetRequest$Outbound = {
    connector: string;
    connectorId: string;
};

/** @internal */
export const ConnectorsGetRequest$outboundSchema: z.ZodType<
    ConnectorsGetRequest$Outbound,
    z.ZodTypeDef,
    ConnectorsGetRequest
> = z.object({
    connector: components.Connector$outboundSchema,
    connectorId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorsGetRequest$ {
    /** @deprecated use `ConnectorsGetRequest$inboundSchema` instead. */
    export const inboundSchema = ConnectorsGetRequest$inboundSchema;
    /** @deprecated use `ConnectorsGetRequest$outboundSchema` instead. */
    export const outboundSchema = ConnectorsGetRequest$outboundSchema;
    /** @deprecated use `ConnectorsGetRequest$Outbound` instead. */
    export type Outbound = ConnectorsGetRequest$Outbound;
}

/** @internal */
export const ConnectorsGetData$inboundSchema: z.ZodType<ConnectorsGetData, z.ZodTypeDef, unknown> =
    z.union([
        components.WiseConfig$inboundSchema,
        components.StripeConfig$inboundSchema,
        components.GenericConfig$inboundSchema,
        components.ModulrConfig$inboundSchema,
        components.CurrencyCloudConfig$inboundSchema,
        components.MangoPayConfig$inboundSchema,
        components.MoneycorpConfig$inboundSchema,
        components.AdyenConfig$inboundSchema,
        components.DumypayConfig$inboundSchema,
        components.AtlarConfig$inboundSchema,
        components.BankingCircleConfig$inboundSchema,
    ]);

/** @internal */
export type ConnectorsGetData$Outbound =
    | components.WiseConfig$Outbound
    | components.StripeConfig$Outbound
    | components.GenericConfig$Outbound
    | components.ModulrConfig$Outbound
    | components.CurrencyCloudConfig$Outbound
    | components.MangoPayConfig$Outbound
    | components.MoneycorpConfig$Outbound
    | components.AdyenConfig$Outbound
    | components.DumypayConfig$Outbound
    | components.AtlarConfig$Outbound
    | components.BankingCircleConfig$Outbound;

/** @internal */
export const ConnectorsGetData$outboundSchema: z.ZodType<
    ConnectorsGetData$Outbound,
    z.ZodTypeDef,
    ConnectorsGetData
> = z.union([
    components.WiseConfig$outboundSchema,
    components.StripeConfig$outboundSchema,
    components.GenericConfig$outboundSchema,
    components.ModulrConfig$outboundSchema,
    components.CurrencyCloudConfig$outboundSchema,
    components.MangoPayConfig$outboundSchema,
    components.MoneycorpConfig$outboundSchema,
    components.AdyenConfig$outboundSchema,
    components.DumypayConfig$outboundSchema,
    components.AtlarConfig$outboundSchema,
    components.BankingCircleConfig$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorsGetData$ {
    /** @deprecated use `ConnectorsGetData$inboundSchema` instead. */
    export const inboundSchema = ConnectorsGetData$inboundSchema;
    /** @deprecated use `ConnectorsGetData$outboundSchema` instead. */
    export const outboundSchema = ConnectorsGetData$outboundSchema;
    /** @deprecated use `ConnectorsGetData$Outbound` instead. */
    export type Outbound = ConnectorsGetData$Outbound;
}

/** @internal */
export const ConnectorsGetResponseBody$inboundSchema: z.ZodType<
    ConnectorsGetResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: z.union([
        components.WiseConfig$inboundSchema,
        components.StripeConfig$inboundSchema,
        components.GenericConfig$inboundSchema,
        components.ModulrConfig$inboundSchema,
        components.CurrencyCloudConfig$inboundSchema,
        components.MangoPayConfig$inboundSchema,
        components.MoneycorpConfig$inboundSchema,
        components.AdyenConfig$inboundSchema,
        components.DumypayConfig$inboundSchema,
        components.AtlarConfig$inboundSchema,
        components.BankingCircleConfig$inboundSchema,
    ]),
});

/** @internal */
export type ConnectorsGetResponseBody$Outbound = {
    data:
        | components.WiseConfig$Outbound
        | components.StripeConfig$Outbound
        | components.GenericConfig$Outbound
        | components.ModulrConfig$Outbound
        | components.CurrencyCloudConfig$Outbound
        | components.MangoPayConfig$Outbound
        | components.MoneycorpConfig$Outbound
        | components.AdyenConfig$Outbound
        | components.DumypayConfig$Outbound
        | components.AtlarConfig$Outbound
        | components.BankingCircleConfig$Outbound;
};

/** @internal */
export const ConnectorsGetResponseBody$outboundSchema: z.ZodType<
    ConnectorsGetResponseBody$Outbound,
    z.ZodTypeDef,
    ConnectorsGetResponseBody
> = z.object({
    data: z.union([
        components.WiseConfig$outboundSchema,
        components.StripeConfig$outboundSchema,
        components.GenericConfig$outboundSchema,
        components.ModulrConfig$outboundSchema,
        components.CurrencyCloudConfig$outboundSchema,
        components.MangoPayConfig$outboundSchema,
        components.MoneycorpConfig$outboundSchema,
        components.AdyenConfig$outboundSchema,
        components.DumypayConfig$outboundSchema,
        components.AtlarConfig$outboundSchema,
        components.BankingCircleConfig$outboundSchema,
    ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorsGetResponseBody$ {
    /** @deprecated use `ConnectorsGetResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConnectorsGetResponseBody$inboundSchema;
    /** @deprecated use `ConnectorsGetResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConnectorsGetResponseBody$outboundSchema;
    /** @deprecated use `ConnectorsGetResponseBody$Outbound` instead. */
    export type Outbound = ConnectorsGetResponseBody$Outbound;
}
