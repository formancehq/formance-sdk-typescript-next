/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type LedgersCreateRequestBody = {
    bucket?: string | undefined;
};

export type LedgersCreateRequest = {
    ledger: string;
    requestBody: LedgersCreateRequestBody;
};

/** @internal */
export const LedgersCreateRequestBody$inboundSchema: z.ZodType<
    LedgersCreateRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    bucket: z.string().optional(),
});

/** @internal */
export type LedgersCreateRequestBody$Outbound = {
    bucket?: string | undefined;
};

/** @internal */
export const LedgersCreateRequestBody$outboundSchema: z.ZodType<
    LedgersCreateRequestBody$Outbound,
    z.ZodTypeDef,
    LedgersCreateRequestBody
> = z.object({
    bucket: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LedgersCreateRequestBody$ {
    /** @deprecated use `LedgersCreateRequestBody$inboundSchema` instead. */
    export const inboundSchema = LedgersCreateRequestBody$inboundSchema;
    /** @deprecated use `LedgersCreateRequestBody$outboundSchema` instead. */
    export const outboundSchema = LedgersCreateRequestBody$outboundSchema;
    /** @deprecated use `LedgersCreateRequestBody$Outbound` instead. */
    export type Outbound = LedgersCreateRequestBody$Outbound;
}

/** @internal */
export const LedgersCreateRequest$inboundSchema: z.ZodType<
    LedgersCreateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ledger: z.string(),
        RequestBody: z.lazy(() => LedgersCreateRequestBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type LedgersCreateRequest$Outbound = {
    ledger: string;
    RequestBody: LedgersCreateRequestBody$Outbound;
};

/** @internal */
export const LedgersCreateRequest$outboundSchema: z.ZodType<
    LedgersCreateRequest$Outbound,
    z.ZodTypeDef,
    LedgersCreateRequest
> = z
    .object({
        ledger: z.string(),
        requestBody: z.lazy(() => LedgersCreateRequestBody$outboundSchema),
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
export namespace LedgersCreateRequest$ {
    /** @deprecated use `LedgersCreateRequest$inboundSchema` instead. */
    export const inboundSchema = LedgersCreateRequest$inboundSchema;
    /** @deprecated use `LedgersCreateRequest$outboundSchema` instead. */
    export const outboundSchema = LedgersCreateRequest$outboundSchema;
    /** @deprecated use `LedgersCreateRequest$Outbound` instead. */
    export type Outbound = LedgersCreateRequest$Outbound;
}
