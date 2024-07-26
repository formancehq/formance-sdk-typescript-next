/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type TransferInitiationsGetRequest = {
    transferId: string;
};

/**
 * The request has succeeded.
 */
export type TransferInitiationsGetResponseBody = {
    data: components.TransferInitiation;
};

/** @internal */
export const TransferInitiationsGetRequest$inboundSchema: z.ZodType<
    TransferInitiationsGetRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    transferId: z.string(),
});

/** @internal */
export type TransferInitiationsGetRequest$Outbound = {
    transferId: string;
};

/** @internal */
export const TransferInitiationsGetRequest$outboundSchema: z.ZodType<
    TransferInitiationsGetRequest$Outbound,
    z.ZodTypeDef,
    TransferInitiationsGetRequest
> = z.object({
    transferId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransferInitiationsGetRequest$ {
    /** @deprecated use `TransferInitiationsGetRequest$inboundSchema` instead. */
    export const inboundSchema = TransferInitiationsGetRequest$inboundSchema;
    /** @deprecated use `TransferInitiationsGetRequest$outboundSchema` instead. */
    export const outboundSchema = TransferInitiationsGetRequest$outboundSchema;
    /** @deprecated use `TransferInitiationsGetRequest$Outbound` instead. */
    export type Outbound = TransferInitiationsGetRequest$Outbound;
}

/** @internal */
export const TransferInitiationsGetResponseBody$inboundSchema: z.ZodType<
    TransferInitiationsGetResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: components.TransferInitiation$inboundSchema,
});

/** @internal */
export type TransferInitiationsGetResponseBody$Outbound = {
    data: components.TransferInitiation$Outbound;
};

/** @internal */
export const TransferInitiationsGetResponseBody$outboundSchema: z.ZodType<
    TransferInitiationsGetResponseBody$Outbound,
    z.ZodTypeDef,
    TransferInitiationsGetResponseBody
> = z.object({
    data: components.TransferInitiation$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransferInitiationsGetResponseBody$ {
    /** @deprecated use `TransferInitiationsGetResponseBody$inboundSchema` instead. */
    export const inboundSchema = TransferInitiationsGetResponseBody$inboundSchema;
    /** @deprecated use `TransferInitiationsGetResponseBody$outboundSchema` instead. */
    export const outboundSchema = TransferInitiationsGetResponseBody$outboundSchema;
    /** @deprecated use `TransferInitiationsGetResponseBody$Outbound` instead. */
    export type Outbound = TransferInitiationsGetResponseBody$Outbound;
}
