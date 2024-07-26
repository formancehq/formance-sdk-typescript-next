/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type TriggersCreateRequestBody = {
    event: string;
    workflowId: string;
    filter?: string | undefined;
    vars?: { [k: string]: any } | undefined;
    name?: string | undefined;
};

/**
 * The request has succeeded and a new resource has been created as a result.
 */
export type TriggersCreateResponseBody = {
    data: components.Trigger;
};

/** @internal */
export const TriggersCreateRequestBody$inboundSchema: z.ZodType<
    TriggersCreateRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    event: z.string(),
    workflowId: z.string(),
    filter: z.string().optional(),
    vars: z.record(z.any()).optional(),
    name: z.string().optional(),
});

/** @internal */
export type TriggersCreateRequestBody$Outbound = {
    event: string;
    workflowId: string;
    filter?: string | undefined;
    vars?: { [k: string]: any } | undefined;
    name?: string | undefined;
};

/** @internal */
export const TriggersCreateRequestBody$outboundSchema: z.ZodType<
    TriggersCreateRequestBody$Outbound,
    z.ZodTypeDef,
    TriggersCreateRequestBody
> = z.object({
    event: z.string(),
    workflowId: z.string(),
    filter: z.string().optional(),
    vars: z.record(z.any()).optional(),
    name: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TriggersCreateRequestBody$ {
    /** @deprecated use `TriggersCreateRequestBody$inboundSchema` instead. */
    export const inboundSchema = TriggersCreateRequestBody$inboundSchema;
    /** @deprecated use `TriggersCreateRequestBody$outboundSchema` instead. */
    export const outboundSchema = TriggersCreateRequestBody$outboundSchema;
    /** @deprecated use `TriggersCreateRequestBody$Outbound` instead. */
    export type Outbound = TriggersCreateRequestBody$Outbound;
}

/** @internal */
export const TriggersCreateResponseBody$inboundSchema: z.ZodType<
    TriggersCreateResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: components.Trigger$inboundSchema,
});

/** @internal */
export type TriggersCreateResponseBody$Outbound = {
    data: components.Trigger$Outbound;
};

/** @internal */
export const TriggersCreateResponseBody$outboundSchema: z.ZodType<
    TriggersCreateResponseBody$Outbound,
    z.ZodTypeDef,
    TriggersCreateResponseBody
> = z.object({
    data: components.Trigger$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TriggersCreateResponseBody$ {
    /** @deprecated use `TriggersCreateResponseBody$inboundSchema` instead. */
    export const inboundSchema = TriggersCreateResponseBody$inboundSchema;
    /** @deprecated use `TriggersCreateResponseBody$outboundSchema` instead. */
    export const outboundSchema = TriggersCreateResponseBody$outboundSchema;
    /** @deprecated use `TriggersCreateResponseBody$Outbound` instead. */
    export type Outbound = TriggersCreateResponseBody$Outbound;
}
