/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type TransactionsListRequest = {
    ledger: string;
    expand?: string | undefined;
    pit?: boolean | undefined;
    cursor?: string | undefined;
    pageSize?: number | undefined;
    query?: { [k: string]: any } | undefined;
};

export type TransactionsListCursor = {
    next?: string | undefined;
    data: Array<components.Transaction>;
};

/**
 * The request has succeeded.
 */
export type TransactionsListResponseBody = {
    cursor: TransactionsListCursor;
};

export type TransactionsListResponse = {
    result: TransactionsListResponseBody;
};

/** @internal */
export const TransactionsListRequest$inboundSchema: z.ZodType<
    TransactionsListRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    ledger: z.string(),
    expand: z.string().optional(),
    pit: z.boolean().optional(),
    cursor: z.string().optional(),
    pageSize: z.number().int().optional(),
    query: z.record(z.any()).optional(),
});

/** @internal */
export type TransactionsListRequest$Outbound = {
    ledger: string;
    expand?: string | undefined;
    pit?: boolean | undefined;
    cursor?: string | undefined;
    pageSize?: number | undefined;
    query?: { [k: string]: any } | undefined;
};

/** @internal */
export const TransactionsListRequest$outboundSchema: z.ZodType<
    TransactionsListRequest$Outbound,
    z.ZodTypeDef,
    TransactionsListRequest
> = z.object({
    ledger: z.string(),
    expand: z.string().optional(),
    pit: z.boolean().optional(),
    cursor: z.string().optional(),
    pageSize: z.number().int().optional(),
    query: z.record(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionsListRequest$ {
    /** @deprecated use `TransactionsListRequest$inboundSchema` instead. */
    export const inboundSchema = TransactionsListRequest$inboundSchema;
    /** @deprecated use `TransactionsListRequest$outboundSchema` instead. */
    export const outboundSchema = TransactionsListRequest$outboundSchema;
    /** @deprecated use `TransactionsListRequest$Outbound` instead. */
    export type Outbound = TransactionsListRequest$Outbound;
}

/** @internal */
export const TransactionsListCursor$inboundSchema: z.ZodType<
    TransactionsListCursor,
    z.ZodTypeDef,
    unknown
> = z.object({
    next: z.string().optional(),
    data: z.array(components.Transaction$inboundSchema),
});

/** @internal */
export type TransactionsListCursor$Outbound = {
    next?: string | undefined;
    data: Array<components.Transaction$Outbound>;
};

/** @internal */
export const TransactionsListCursor$outboundSchema: z.ZodType<
    TransactionsListCursor$Outbound,
    z.ZodTypeDef,
    TransactionsListCursor
> = z.object({
    next: z.string().optional(),
    data: z.array(components.Transaction$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionsListCursor$ {
    /** @deprecated use `TransactionsListCursor$inboundSchema` instead. */
    export const inboundSchema = TransactionsListCursor$inboundSchema;
    /** @deprecated use `TransactionsListCursor$outboundSchema` instead. */
    export const outboundSchema = TransactionsListCursor$outboundSchema;
    /** @deprecated use `TransactionsListCursor$Outbound` instead. */
    export type Outbound = TransactionsListCursor$Outbound;
}

/** @internal */
export const TransactionsListResponseBody$inboundSchema: z.ZodType<
    TransactionsListResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    cursor: z.lazy(() => TransactionsListCursor$inboundSchema),
});

/** @internal */
export type TransactionsListResponseBody$Outbound = {
    cursor: TransactionsListCursor$Outbound;
};

/** @internal */
export const TransactionsListResponseBody$outboundSchema: z.ZodType<
    TransactionsListResponseBody$Outbound,
    z.ZodTypeDef,
    TransactionsListResponseBody
> = z.object({
    cursor: z.lazy(() => TransactionsListCursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionsListResponseBody$ {
    /** @deprecated use `TransactionsListResponseBody$inboundSchema` instead. */
    export const inboundSchema = TransactionsListResponseBody$inboundSchema;
    /** @deprecated use `TransactionsListResponseBody$outboundSchema` instead. */
    export const outboundSchema = TransactionsListResponseBody$outboundSchema;
    /** @deprecated use `TransactionsListResponseBody$Outbound` instead. */
    export type Outbound = TransactionsListResponseBody$Outbound;
}

/** @internal */
export const TransactionsListResponse$inboundSchema: z.ZodType<
    TransactionsListResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => TransactionsListResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type TransactionsListResponse$Outbound = {
    Result: TransactionsListResponseBody$Outbound;
};

/** @internal */
export const TransactionsListResponse$outboundSchema: z.ZodType<
    TransactionsListResponse$Outbound,
    z.ZodTypeDef,
    TransactionsListResponse
> = z
    .object({
        result: z.lazy(() => TransactionsListResponseBody$outboundSchema),
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
export namespace TransactionsListResponse$ {
    /** @deprecated use `TransactionsListResponse$inboundSchema` instead. */
    export const inboundSchema = TransactionsListResponse$inboundSchema;
    /** @deprecated use `TransactionsListResponse$outboundSchema` instead. */
    export const outboundSchema = TransactionsListResponse$outboundSchema;
    /** @deprecated use `TransactionsListResponse$Outbound` instead. */
    export type Outbound = TransactionsListResponse$Outbound;
}
