/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type LedgersListRequest = {
    cursor?: string | undefined;
    pageSize?: number | undefined;
};

export type Cursor = {
    next?: string | undefined;
    data: Array<components.Ledger>;
};

/**
 * The request has succeeded.
 */
export type LedgersListResponseBody = {
    cursor: Cursor;
};

export type LedgersListResponse = {
    result: LedgersListResponseBody;
};

/** @internal */
export const LedgersListRequest$inboundSchema: z.ZodType<
    LedgersListRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    cursor: z.string().optional(),
    pageSize: z.number().int().optional(),
});

/** @internal */
export type LedgersListRequest$Outbound = {
    cursor?: string | undefined;
    pageSize?: number | undefined;
};

/** @internal */
export const LedgersListRequest$outboundSchema: z.ZodType<
    LedgersListRequest$Outbound,
    z.ZodTypeDef,
    LedgersListRequest
> = z.object({
    cursor: z.string().optional(),
    pageSize: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LedgersListRequest$ {
    /** @deprecated use `LedgersListRequest$inboundSchema` instead. */
    export const inboundSchema = LedgersListRequest$inboundSchema;
    /** @deprecated use `LedgersListRequest$outboundSchema` instead. */
    export const outboundSchema = LedgersListRequest$outboundSchema;
    /** @deprecated use `LedgersListRequest$Outbound` instead. */
    export type Outbound = LedgersListRequest$Outbound;
}

/** @internal */
export const Cursor$inboundSchema: z.ZodType<Cursor, z.ZodTypeDef, unknown> = z.object({
    next: z.string().optional(),
    data: z.array(components.Ledger$inboundSchema),
});

/** @internal */
export type Cursor$Outbound = {
    next?: string | undefined;
    data: Array<components.Ledger$Outbound>;
};

/** @internal */
export const Cursor$outboundSchema: z.ZodType<Cursor$Outbound, z.ZodTypeDef, Cursor> = z.object({
    next: z.string().optional(),
    data: z.array(components.Ledger$outboundSchema),
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
export const LedgersListResponseBody$inboundSchema: z.ZodType<
    LedgersListResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    cursor: z.lazy(() => Cursor$inboundSchema),
});

/** @internal */
export type LedgersListResponseBody$Outbound = {
    cursor: Cursor$Outbound;
};

/** @internal */
export const LedgersListResponseBody$outboundSchema: z.ZodType<
    LedgersListResponseBody$Outbound,
    z.ZodTypeDef,
    LedgersListResponseBody
> = z.object({
    cursor: z.lazy(() => Cursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LedgersListResponseBody$ {
    /** @deprecated use `LedgersListResponseBody$inboundSchema` instead. */
    export const inboundSchema = LedgersListResponseBody$inboundSchema;
    /** @deprecated use `LedgersListResponseBody$outboundSchema` instead. */
    export const outboundSchema = LedgersListResponseBody$outboundSchema;
    /** @deprecated use `LedgersListResponseBody$Outbound` instead. */
    export type Outbound = LedgersListResponseBody$Outbound;
}

/** @internal */
export const LedgersListResponse$inboundSchema: z.ZodType<
    LedgersListResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => LedgersListResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type LedgersListResponse$Outbound = {
    Result: LedgersListResponseBody$Outbound;
};

/** @internal */
export const LedgersListResponse$outboundSchema: z.ZodType<
    LedgersListResponse$Outbound,
    z.ZodTypeDef,
    LedgersListResponse
> = z
    .object({
        result: z.lazy(() => LedgersListResponseBody$outboundSchema),
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
export namespace LedgersListResponse$ {
    /** @deprecated use `LedgersListResponse$inboundSchema` instead. */
    export const inboundSchema = LedgersListResponse$inboundSchema;
    /** @deprecated use `LedgersListResponse$outboundSchema` instead. */
    export const outboundSchema = LedgersListResponse$outboundSchema;
    /** @deprecated use `LedgersListResponse$Outbound` instead. */
    export type Outbound = LedgersListResponse$Outbound;
}
