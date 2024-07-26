/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type TransferInitiationsUpdateStatusRequestBody = {
    status: components.TransferInitiationWritableStatus;
};

export type TransferInitiationsUpdateStatusRequest = {
    transferId: string;
    requestBody: TransferInitiationsUpdateStatusRequestBody;
};

/** @internal */
export const TransferInitiationsUpdateStatusRequestBody$inboundSchema: z.ZodType<
    TransferInitiationsUpdateStatusRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    status: components.TransferInitiationWritableStatus$inboundSchema,
});

/** @internal */
export type TransferInitiationsUpdateStatusRequestBody$Outbound = {
    status: string;
};

/** @internal */
export const TransferInitiationsUpdateStatusRequestBody$outboundSchema: z.ZodType<
    TransferInitiationsUpdateStatusRequestBody$Outbound,
    z.ZodTypeDef,
    TransferInitiationsUpdateStatusRequestBody
> = z.object({
    status: components.TransferInitiationWritableStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransferInitiationsUpdateStatusRequestBody$ {
    /** @deprecated use `TransferInitiationsUpdateStatusRequestBody$inboundSchema` instead. */
    export const inboundSchema = TransferInitiationsUpdateStatusRequestBody$inboundSchema;
    /** @deprecated use `TransferInitiationsUpdateStatusRequestBody$outboundSchema` instead. */
    export const outboundSchema = TransferInitiationsUpdateStatusRequestBody$outboundSchema;
    /** @deprecated use `TransferInitiationsUpdateStatusRequestBody$Outbound` instead. */
    export type Outbound = TransferInitiationsUpdateStatusRequestBody$Outbound;
}

/** @internal */
export const TransferInitiationsUpdateStatusRequest$inboundSchema: z.ZodType<
    TransferInitiationsUpdateStatusRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        transferId: z.string(),
        RequestBody: z.lazy(() => TransferInitiationsUpdateStatusRequestBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type TransferInitiationsUpdateStatusRequest$Outbound = {
    transferId: string;
    RequestBody: TransferInitiationsUpdateStatusRequestBody$Outbound;
};

/** @internal */
export const TransferInitiationsUpdateStatusRequest$outboundSchema: z.ZodType<
    TransferInitiationsUpdateStatusRequest$Outbound,
    z.ZodTypeDef,
    TransferInitiationsUpdateStatusRequest
> = z
    .object({
        transferId: z.string(),
        requestBody: z.lazy(() => TransferInitiationsUpdateStatusRequestBody$outboundSchema),
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
export namespace TransferInitiationsUpdateStatusRequest$ {
    /** @deprecated use `TransferInitiationsUpdateStatusRequest$inboundSchema` instead. */
    export const inboundSchema = TransferInitiationsUpdateStatusRequest$inboundSchema;
    /** @deprecated use `TransferInitiationsUpdateStatusRequest$outboundSchema` instead. */
    export const outboundSchema = TransferInitiationsUpdateStatusRequest$outboundSchema;
    /** @deprecated use `TransferInitiationsUpdateStatusRequest$Outbound` instead. */
    export type Outbound = TransferInitiationsUpdateStatusRequest$Outbound;
}
