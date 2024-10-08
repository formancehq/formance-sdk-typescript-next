/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type LogsListRequest = {
    ledger: string;
    cursor?: string | undefined;
    pageSize?: number | undefined;
};

export type LogsListCursor = {
    next?: string | undefined;
    data: Array<components.LogEntry>;
};

/**
 * The request has succeeded.
 */
export type LogsListResponseBody = {
    cursor: LogsListCursor;
};

export type LogsListResponse = {
    result: LogsListResponseBody;
};

/** @internal */
export const LogsListRequest$inboundSchema: z.ZodType<LogsListRequest, z.ZodTypeDef, unknown> =
    z.object({
        ledger: z.string(),
        cursor: z.string().optional(),
        pageSize: z.number().int().optional(),
    });

/** @internal */
export type LogsListRequest$Outbound = {
    ledger: string;
    cursor?: string | undefined;
    pageSize?: number | undefined;
};

/** @internal */
export const LogsListRequest$outboundSchema: z.ZodType<
    LogsListRequest$Outbound,
    z.ZodTypeDef,
    LogsListRequest
> = z.object({
    ledger: z.string(),
    cursor: z.string().optional(),
    pageSize: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LogsListRequest$ {
    /** @deprecated use `LogsListRequest$inboundSchema` instead. */
    export const inboundSchema = LogsListRequest$inboundSchema;
    /** @deprecated use `LogsListRequest$outboundSchema` instead. */
    export const outboundSchema = LogsListRequest$outboundSchema;
    /** @deprecated use `LogsListRequest$Outbound` instead. */
    export type Outbound = LogsListRequest$Outbound;
}

/** @internal */
export const LogsListCursor$inboundSchema: z.ZodType<LogsListCursor, z.ZodTypeDef, unknown> =
    z.object({
        next: z.string().optional(),
        data: z.array(components.LogEntry$inboundSchema),
    });

/** @internal */
export type LogsListCursor$Outbound = {
    next?: string | undefined;
    data: Array<components.LogEntry$Outbound>;
};

/** @internal */
export const LogsListCursor$outboundSchema: z.ZodType<
    LogsListCursor$Outbound,
    z.ZodTypeDef,
    LogsListCursor
> = z.object({
    next: z.string().optional(),
    data: z.array(components.LogEntry$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LogsListCursor$ {
    /** @deprecated use `LogsListCursor$inboundSchema` instead. */
    export const inboundSchema = LogsListCursor$inboundSchema;
    /** @deprecated use `LogsListCursor$outboundSchema` instead. */
    export const outboundSchema = LogsListCursor$outboundSchema;
    /** @deprecated use `LogsListCursor$Outbound` instead. */
    export type Outbound = LogsListCursor$Outbound;
}

/** @internal */
export const LogsListResponseBody$inboundSchema: z.ZodType<
    LogsListResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    cursor: z.lazy(() => LogsListCursor$inboundSchema),
});

/** @internal */
export type LogsListResponseBody$Outbound = {
    cursor: LogsListCursor$Outbound;
};

/** @internal */
export const LogsListResponseBody$outboundSchema: z.ZodType<
    LogsListResponseBody$Outbound,
    z.ZodTypeDef,
    LogsListResponseBody
> = z.object({
    cursor: z.lazy(() => LogsListCursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LogsListResponseBody$ {
    /** @deprecated use `LogsListResponseBody$inboundSchema` instead. */
    export const inboundSchema = LogsListResponseBody$inboundSchema;
    /** @deprecated use `LogsListResponseBody$outboundSchema` instead. */
    export const outboundSchema = LogsListResponseBody$outboundSchema;
    /** @deprecated use `LogsListResponseBody$Outbound` instead. */
    export type Outbound = LogsListResponseBody$Outbound;
}

/** @internal */
export const LogsListResponse$inboundSchema: z.ZodType<LogsListResponse, z.ZodTypeDef, unknown> = z
    .object({
        Result: z.lazy(() => LogsListResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type LogsListResponse$Outbound = {
    Result: LogsListResponseBody$Outbound;
};

/** @internal */
export const LogsListResponse$outboundSchema: z.ZodType<
    LogsListResponse$Outbound,
    z.ZodTypeDef,
    LogsListResponse
> = z
    .object({
        result: z.lazy(() => LogsListResponseBody$outboundSchema),
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
export namespace LogsListResponse$ {
    /** @deprecated use `LogsListResponse$inboundSchema` instead. */
    export const inboundSchema = LogsListResponse$inboundSchema;
    /** @deprecated use `LogsListResponse$outboundSchema` instead. */
    export const outboundSchema = LogsListResponse$outboundSchema;
    /** @deprecated use `LogsListResponse$Outbound` instead. */
    export type Outbound = LogsListResponse$Outbound;
}
