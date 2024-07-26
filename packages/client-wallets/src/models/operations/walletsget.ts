/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type WalletsGetRequest = {
    id: string;
};

/**
 * The request has succeeded.
 */
export type WalletsGetResponseBody = {
    data: components.Wallet;
};

/** @internal */
export const WalletsGetRequest$inboundSchema: z.ZodType<WalletsGetRequest, z.ZodTypeDef, unknown> =
    z.object({
        id: z.string(),
    });

/** @internal */
export type WalletsGetRequest$Outbound = {
    id: string;
};

/** @internal */
export const WalletsGetRequest$outboundSchema: z.ZodType<
    WalletsGetRequest$Outbound,
    z.ZodTypeDef,
    WalletsGetRequest
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsGetRequest$ {
    /** @deprecated use `WalletsGetRequest$inboundSchema` instead. */
    export const inboundSchema = WalletsGetRequest$inboundSchema;
    /** @deprecated use `WalletsGetRequest$outboundSchema` instead. */
    export const outboundSchema = WalletsGetRequest$outboundSchema;
    /** @deprecated use `WalletsGetRequest$Outbound` instead. */
    export type Outbound = WalletsGetRequest$Outbound;
}

/** @internal */
export const WalletsGetResponseBody$inboundSchema: z.ZodType<
    WalletsGetResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: components.Wallet$inboundSchema,
});

/** @internal */
export type WalletsGetResponseBody$Outbound = {
    data: components.Wallet$Outbound;
};

/** @internal */
export const WalletsGetResponseBody$outboundSchema: z.ZodType<
    WalletsGetResponseBody$Outbound,
    z.ZodTypeDef,
    WalletsGetResponseBody
> = z.object({
    data: components.Wallet$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsGetResponseBody$ {
    /** @deprecated use `WalletsGetResponseBody$inboundSchema` instead. */
    export const inboundSchema = WalletsGetResponseBody$inboundSchema;
    /** @deprecated use `WalletsGetResponseBody$outboundSchema` instead. */
    export const outboundSchema = WalletsGetResponseBody$outboundSchema;
    /** @deprecated use `WalletsGetResponseBody$Outbound` instead. */
    export type Outbound = WalletsGetResponseBody$Outbound;
}
