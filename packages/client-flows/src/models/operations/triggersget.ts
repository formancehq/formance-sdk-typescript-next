/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type TriggersGetRequest = {
    id: string;
};

/**
 * The request has succeeded.
 */
export type TriggersGetResponseBody = {
    data: components.Trigger;
};

/** @internal */
export const TriggersGetRequest$inboundSchema: z.ZodType<
    TriggersGetRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type TriggersGetRequest$Outbound = {
    id: string;
};

/** @internal */
export const TriggersGetRequest$outboundSchema: z.ZodType<
    TriggersGetRequest$Outbound,
    z.ZodTypeDef,
    TriggersGetRequest
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TriggersGetRequest$ {
    /** @deprecated use `TriggersGetRequest$inboundSchema` instead. */
    export const inboundSchema = TriggersGetRequest$inboundSchema;
    /** @deprecated use `TriggersGetRequest$outboundSchema` instead. */
    export const outboundSchema = TriggersGetRequest$outboundSchema;
    /** @deprecated use `TriggersGetRequest$Outbound` instead. */
    export type Outbound = TriggersGetRequest$Outbound;
}

/** @internal */
export const TriggersGetResponseBody$inboundSchema: z.ZodType<
    TriggersGetResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: components.Trigger$inboundSchema,
});

/** @internal */
export type TriggersGetResponseBody$Outbound = {
    data: components.Trigger$Outbound;
};

/** @internal */
export const TriggersGetResponseBody$outboundSchema: z.ZodType<
    TriggersGetResponseBody$Outbound,
    z.ZodTypeDef,
    TriggersGetResponseBody
> = z.object({
    data: components.Trigger$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TriggersGetResponseBody$ {
    /** @deprecated use `TriggersGetResponseBody$inboundSchema` instead. */
    export const inboundSchema = TriggersGetResponseBody$inboundSchema;
    /** @deprecated use `TriggersGetResponseBody$outboundSchema` instead. */
    export const outboundSchema = TriggersGetResponseBody$outboundSchema;
    /** @deprecated use `TriggersGetResponseBody$Outbound` instead. */
    export type Outbound = TriggersGetResponseBody$Outbound;
}
