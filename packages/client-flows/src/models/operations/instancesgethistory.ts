/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type InstancesGetHistoryRequest = {
    id: string;
};

/**
 * The request has succeeded.
 */
export type InstancesGetHistoryResponseBody = {
    data: Array<components.WorkflowInstanceHistory>;
};

/** @internal */
export const InstancesGetHistoryRequest$inboundSchema: z.ZodType<
    InstancesGetHistoryRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type InstancesGetHistoryRequest$Outbound = {
    id: string;
};

/** @internal */
export const InstancesGetHistoryRequest$outboundSchema: z.ZodType<
    InstancesGetHistoryRequest$Outbound,
    z.ZodTypeDef,
    InstancesGetHistoryRequest
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InstancesGetHistoryRequest$ {
    /** @deprecated use `InstancesGetHistoryRequest$inboundSchema` instead. */
    export const inboundSchema = InstancesGetHistoryRequest$inboundSchema;
    /** @deprecated use `InstancesGetHistoryRequest$outboundSchema` instead. */
    export const outboundSchema = InstancesGetHistoryRequest$outboundSchema;
    /** @deprecated use `InstancesGetHistoryRequest$Outbound` instead. */
    export type Outbound = InstancesGetHistoryRequest$Outbound;
}

/** @internal */
export const InstancesGetHistoryResponseBody$inboundSchema: z.ZodType<
    InstancesGetHistoryResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: z.array(components.WorkflowInstanceHistory$inboundSchema),
});

/** @internal */
export type InstancesGetHistoryResponseBody$Outbound = {
    data: Array<components.WorkflowInstanceHistory$Outbound>;
};

/** @internal */
export const InstancesGetHistoryResponseBody$outboundSchema: z.ZodType<
    InstancesGetHistoryResponseBody$Outbound,
    z.ZodTypeDef,
    InstancesGetHistoryResponseBody
> = z.object({
    data: z.array(components.WorkflowInstanceHistory$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InstancesGetHistoryResponseBody$ {
    /** @deprecated use `InstancesGetHistoryResponseBody$inboundSchema` instead. */
    export const inboundSchema = InstancesGetHistoryResponseBody$inboundSchema;
    /** @deprecated use `InstancesGetHistoryResponseBody$outboundSchema` instead. */
    export const outboundSchema = InstancesGetHistoryResponseBody$outboundSchema;
    /** @deprecated use `InstancesGetHistoryResponseBody$Outbound` instead. */
    export type Outbound = InstancesGetHistoryResponseBody$Outbound;
}
