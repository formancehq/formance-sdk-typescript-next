/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type TriggersTestRequest = {
    id: string;
    requestBody: { [k: string]: any };
};

/**
 * The request has succeeded.
 */
export type TriggersTestResponseBody = {
    data: components.TriggerTest;
};

/** @internal */
export const TriggersTestRequest$inboundSchema: z.ZodType<
    TriggersTestRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        RequestBody: z.record(z.any()),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type TriggersTestRequest$Outbound = {
    id: string;
    RequestBody: { [k: string]: any };
};

/** @internal */
export const TriggersTestRequest$outboundSchema: z.ZodType<
    TriggersTestRequest$Outbound,
    z.ZodTypeDef,
    TriggersTestRequest
> = z
    .object({
        id: z.string(),
        requestBody: z.record(z.any()),
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
export namespace TriggersTestRequest$ {
    /** @deprecated use `TriggersTestRequest$inboundSchema` instead. */
    export const inboundSchema = TriggersTestRequest$inboundSchema;
    /** @deprecated use `TriggersTestRequest$outboundSchema` instead. */
    export const outboundSchema = TriggersTestRequest$outboundSchema;
    /** @deprecated use `TriggersTestRequest$Outbound` instead. */
    export type Outbound = TriggersTestRequest$Outbound;
}

/** @internal */
export const TriggersTestResponseBody$inboundSchema: z.ZodType<
    TriggersTestResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: components.TriggerTest$inboundSchema,
});

/** @internal */
export type TriggersTestResponseBody$Outbound = {
    data: components.TriggerTest$Outbound;
};

/** @internal */
export const TriggersTestResponseBody$outboundSchema: z.ZodType<
    TriggersTestResponseBody$Outbound,
    z.ZodTypeDef,
    TriggersTestResponseBody
> = z.object({
    data: components.TriggerTest$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TriggersTestResponseBody$ {
    /** @deprecated use `TriggersTestResponseBody$inboundSchema` instead. */
    export const inboundSchema = TriggersTestResponseBody$inboundSchema;
    /** @deprecated use `TriggersTestResponseBody$outboundSchema` instead. */
    export const outboundSchema = TriggersTestResponseBody$outboundSchema;
    /** @deprecated use `TriggersTestResponseBody$Outbound` instead. */
    export type Outbound = TriggersTestResponseBody$Outbound;
}
