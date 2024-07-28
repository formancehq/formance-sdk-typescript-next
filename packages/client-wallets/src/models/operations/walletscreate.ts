/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type WalletsCreateRequestBody = {
    name: string;
    metadata: { [k: string]: string };
};

/** @internal */
export const WalletsCreateRequestBody$inboundSchema: z.ZodType<
    WalletsCreateRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    metadata: z.record(z.string()),
});

/** @internal */
export type WalletsCreateRequestBody$Outbound = {
    name: string;
    metadata: { [k: string]: string };
};

/** @internal */
export const WalletsCreateRequestBody$outboundSchema: z.ZodType<
    WalletsCreateRequestBody$Outbound,
    z.ZodTypeDef,
    WalletsCreateRequestBody
> = z.object({
    name: z.string(),
    metadata: z.record(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsCreateRequestBody$ {
    /** @deprecated use `WalletsCreateRequestBody$inboundSchema` instead. */
    export const inboundSchema = WalletsCreateRequestBody$inboundSchema;
    /** @deprecated use `WalletsCreateRequestBody$outboundSchema` instead. */
    export const outboundSchema = WalletsCreateRequestBody$outboundSchema;
    /** @deprecated use `WalletsCreateRequestBody$Outbound` instead. */
    export type Outbound = WalletsCreateRequestBody$Outbound;
}
