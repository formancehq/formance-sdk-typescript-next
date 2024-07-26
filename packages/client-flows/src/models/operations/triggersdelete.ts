/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type TriggersDeleteRequest = {
    id: string;
};

/** @internal */
export const TriggersDeleteRequest$inboundSchema: z.ZodType<
    TriggersDeleteRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type TriggersDeleteRequest$Outbound = {
    id: string;
};

/** @internal */
export const TriggersDeleteRequest$outboundSchema: z.ZodType<
    TriggersDeleteRequest$Outbound,
    z.ZodTypeDef,
    TriggersDeleteRequest
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TriggersDeleteRequest$ {
    /** @deprecated use `TriggersDeleteRequest$inboundSchema` instead. */
    export const inboundSchema = TriggersDeleteRequest$inboundSchema;
    /** @deprecated use `TriggersDeleteRequest$outboundSchema` instead. */
    export const outboundSchema = TriggersDeleteRequest$outboundSchema;
    /** @deprecated use `TriggersDeleteRequest$Outbound` instead. */
    export type Outbound = TriggersDeleteRequest$Outbound;
}
