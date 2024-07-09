/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type WalletsUpdateRequestBody = {
    metadata?: { [k: string]: string } | undefined;
};

export type WalletsUpdateRequest = {
    id: string;
    requestBody: WalletsUpdateRequestBody;
};

/** @internal */
export const WalletsUpdateRequestBody$inboundSchema: z.ZodType<
    WalletsUpdateRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    metadata: z.record(z.string()).optional(),
});

/** @internal */
export type WalletsUpdateRequestBody$Outbound = {
    metadata?: { [k: string]: string } | undefined;
};

/** @internal */
export const WalletsUpdateRequestBody$outboundSchema: z.ZodType<
    WalletsUpdateRequestBody$Outbound,
    z.ZodTypeDef,
    WalletsUpdateRequestBody
> = z.object({
    metadata: z.record(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsUpdateRequestBody$ {
    /** @deprecated use `WalletsUpdateRequestBody$inboundSchema` instead. */
    export const inboundSchema = WalletsUpdateRequestBody$inboundSchema;
    /** @deprecated use `WalletsUpdateRequestBody$outboundSchema` instead. */
    export const outboundSchema = WalletsUpdateRequestBody$outboundSchema;
    /** @deprecated use `WalletsUpdateRequestBody$Outbound` instead. */
    export type Outbound = WalletsUpdateRequestBody$Outbound;
}

/** @internal */
export const WalletsUpdateRequest$inboundSchema: z.ZodType<
    WalletsUpdateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        RequestBody: z.lazy(() => WalletsUpdateRequestBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type WalletsUpdateRequest$Outbound = {
    id: string;
    RequestBody: WalletsUpdateRequestBody$Outbound;
};

/** @internal */
export const WalletsUpdateRequest$outboundSchema: z.ZodType<
    WalletsUpdateRequest$Outbound,
    z.ZodTypeDef,
    WalletsUpdateRequest
> = z
    .object({
        id: z.string(),
        requestBody: z.lazy(() => WalletsUpdateRequestBody$outboundSchema),
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
export namespace WalletsUpdateRequest$ {
    /** @deprecated use `WalletsUpdateRequest$inboundSchema` instead. */
    export const inboundSchema = WalletsUpdateRequest$inboundSchema;
    /** @deprecated use `WalletsUpdateRequest$outboundSchema` instead. */
    export const outboundSchema = WalletsUpdateRequest$outboundSchema;
    /** @deprecated use `WalletsUpdateRequest$Outbound` instead. */
    export type Outbound = WalletsUpdateRequest$Outbound;
}
