/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type TransferInitiationsReverseRequestBody = {
    reference: string;
    description: string;
    amount: number;
    asset: string;
    metatdata?: { [k: string]: string } | undefined;
};

export type TransferInitiationsReverseRequest = {
    transferId: string;
    requestBody: TransferInitiationsReverseRequestBody;
};

/** @internal */
export const TransferInitiationsReverseRequestBody$inboundSchema: z.ZodType<
    TransferInitiationsReverseRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    reference: z.string(),
    description: z.string(),
    amount: z.number().int(),
    asset: z.string(),
    metatdata: z.record(z.string()).optional(),
});

/** @internal */
export type TransferInitiationsReverseRequestBody$Outbound = {
    reference: string;
    description: string;
    amount: number;
    asset: string;
    metatdata?: { [k: string]: string } | undefined;
};

/** @internal */
export const TransferInitiationsReverseRequestBody$outboundSchema: z.ZodType<
    TransferInitiationsReverseRequestBody$Outbound,
    z.ZodTypeDef,
    TransferInitiationsReverseRequestBody
> = z.object({
    reference: z.string(),
    description: z.string(),
    amount: z.number().int(),
    asset: z.string(),
    metatdata: z.record(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransferInitiationsReverseRequestBody$ {
    /** @deprecated use `TransferInitiationsReverseRequestBody$inboundSchema` instead. */
    export const inboundSchema = TransferInitiationsReverseRequestBody$inboundSchema;
    /** @deprecated use `TransferInitiationsReverseRequestBody$outboundSchema` instead. */
    export const outboundSchema = TransferInitiationsReverseRequestBody$outboundSchema;
    /** @deprecated use `TransferInitiationsReverseRequestBody$Outbound` instead. */
    export type Outbound = TransferInitiationsReverseRequestBody$Outbound;
}

/** @internal */
export const TransferInitiationsReverseRequest$inboundSchema: z.ZodType<
    TransferInitiationsReverseRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        transferId: z.string(),
        RequestBody: z.lazy(() => TransferInitiationsReverseRequestBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type TransferInitiationsReverseRequest$Outbound = {
    transferId: string;
    RequestBody: TransferInitiationsReverseRequestBody$Outbound;
};

/** @internal */
export const TransferInitiationsReverseRequest$outboundSchema: z.ZodType<
    TransferInitiationsReverseRequest$Outbound,
    z.ZodTypeDef,
    TransferInitiationsReverseRequest
> = z
    .object({
        transferId: z.string(),
        requestBody: z.lazy(() => TransferInitiationsReverseRequestBody$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            requestBody: "RequestBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransferInitiationsReverseRequest$ {
    /** @deprecated use `TransferInitiationsReverseRequest$inboundSchema` instead. */
    export const inboundSchema = TransferInitiationsReverseRequest$inboundSchema;
    /** @deprecated use `TransferInitiationsReverseRequest$outboundSchema` instead. */
    export const outboundSchema = TransferInitiationsReverseRequest$outboundSchema;
    /** @deprecated use `TransferInitiationsReverseRequest$Outbound` instead. */
    export type Outbound = TransferInitiationsReverseRequest$Outbound;
}
