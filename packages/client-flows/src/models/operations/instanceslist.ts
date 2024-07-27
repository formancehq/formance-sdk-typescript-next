/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type InstancesListRequest = {
    workflowId: string;
    running: boolean;
    cursor?: string | undefined;
    pageSize?: number | undefined;
};

export type Cursor = {
    next?: string | undefined;
    data: Array<components.WorkflowInstance>;
};

/**
 * The request has succeeded.
 */
export type InstancesListResponseBody = {
    cursor: Cursor;
};

export type InstancesListResponse = {
    result: InstancesListResponseBody;
};

/** @internal */
export const InstancesListRequest$inboundSchema: z.ZodType<
    InstancesListRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    workflowId: z.string(),
    running: z.boolean(),
    cursor: z.string().optional(),
    pageSize: z.number().int().optional(),
});

/** @internal */
export type InstancesListRequest$Outbound = {
    workflowId: string;
    running: boolean;
    cursor?: string | undefined;
    pageSize?: number | undefined;
};

/** @internal */
export const InstancesListRequest$outboundSchema: z.ZodType<
    InstancesListRequest$Outbound,
    z.ZodTypeDef,
    InstancesListRequest
> = z.object({
    workflowId: z.string(),
    running: z.boolean(),
    cursor: z.string().optional(),
    pageSize: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InstancesListRequest$ {
    /** @deprecated use `InstancesListRequest$inboundSchema` instead. */
    export const inboundSchema = InstancesListRequest$inboundSchema;
    /** @deprecated use `InstancesListRequest$outboundSchema` instead. */
    export const outboundSchema = InstancesListRequest$outboundSchema;
    /** @deprecated use `InstancesListRequest$Outbound` instead. */
    export type Outbound = InstancesListRequest$Outbound;
}

/** @internal */
export const Cursor$inboundSchema: z.ZodType<Cursor, z.ZodTypeDef, unknown> = z.object({
    next: z.string().optional(),
    data: z.array(components.WorkflowInstance$inboundSchema),
});

/** @internal */
export type Cursor$Outbound = {
    next?: string | undefined;
    data: Array<components.WorkflowInstance$Outbound>;
};

/** @internal */
export const Cursor$outboundSchema: z.ZodType<Cursor$Outbound, z.ZodTypeDef, Cursor> = z.object({
    next: z.string().optional(),
    data: z.array(components.WorkflowInstance$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Cursor$ {
    /** @deprecated use `Cursor$inboundSchema` instead. */
    export const inboundSchema = Cursor$inboundSchema;
    /** @deprecated use `Cursor$outboundSchema` instead. */
    export const outboundSchema = Cursor$outboundSchema;
    /** @deprecated use `Cursor$Outbound` instead. */
    export type Outbound = Cursor$Outbound;
}

/** @internal */
export const InstancesListResponseBody$inboundSchema: z.ZodType<
    InstancesListResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    cursor: z.lazy(() => Cursor$inboundSchema),
});

/** @internal */
export type InstancesListResponseBody$Outbound = {
    cursor: Cursor$Outbound;
};

/** @internal */
export const InstancesListResponseBody$outboundSchema: z.ZodType<
    InstancesListResponseBody$Outbound,
    z.ZodTypeDef,
    InstancesListResponseBody
> = z.object({
    cursor: z.lazy(() => Cursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InstancesListResponseBody$ {
    /** @deprecated use `InstancesListResponseBody$inboundSchema` instead. */
    export const inboundSchema = InstancesListResponseBody$inboundSchema;
    /** @deprecated use `InstancesListResponseBody$outboundSchema` instead. */
    export const outboundSchema = InstancesListResponseBody$outboundSchema;
    /** @deprecated use `InstancesListResponseBody$Outbound` instead. */
    export type Outbound = InstancesListResponseBody$Outbound;
}

/** @internal */
export const InstancesListResponse$inboundSchema: z.ZodType<
    InstancesListResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => InstancesListResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type InstancesListResponse$Outbound = {
    Result: InstancesListResponseBody$Outbound;
};

/** @internal */
export const InstancesListResponse$outboundSchema: z.ZodType<
    InstancesListResponse$Outbound,
    z.ZodTypeDef,
    InstancesListResponse
> = z
    .object({
        result: z.lazy(() => InstancesListResponseBody$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            result: "Result",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InstancesListResponse$ {
    /** @deprecated use `InstancesListResponse$inboundSchema` instead. */
    export const inboundSchema = InstancesListResponse$inboundSchema;
    /** @deprecated use `InstancesListResponse$outboundSchema` instead. */
    export const outboundSchema = InstancesListResponse$outboundSchema;
    /** @deprecated use `InstancesListResponse$Outbound` instead. */
    export type Outbound = InstancesListResponse$Outbound;
}
