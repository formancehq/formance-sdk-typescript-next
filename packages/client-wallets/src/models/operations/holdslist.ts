/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type HoldsListRequest = {
    walletID: string;
    cursor?: string | undefined;
    pageSize?: number | undefined;
};

export type Cursor = {
    next?: string | undefined;
    data: Array<components.Hold>;
};

/**
 * The request has succeeded.
 */
export type HoldsListResponseBody = {
    cursor: Cursor;
};

export type HoldsListResponse = {
    result: HoldsListResponseBody;
};

/** @internal */
export const HoldsListRequest$inboundSchema: z.ZodType<HoldsListRequest, z.ZodTypeDef, unknown> =
    z.object({
        walletID: z.string(),
        cursor: z.string().optional(),
        pageSize: z.number().int().optional(),
    });

/** @internal */
export type HoldsListRequest$Outbound = {
    walletID: string;
    cursor?: string | undefined;
    pageSize?: number | undefined;
};

/** @internal */
export const HoldsListRequest$outboundSchema: z.ZodType<
    HoldsListRequest$Outbound,
    z.ZodTypeDef,
    HoldsListRequest
> = z.object({
    walletID: z.string(),
    cursor: z.string().optional(),
    pageSize: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HoldsListRequest$ {
    /** @deprecated use `HoldsListRequest$inboundSchema` instead. */
    export const inboundSchema = HoldsListRequest$inboundSchema;
    /** @deprecated use `HoldsListRequest$outboundSchema` instead. */
    export const outboundSchema = HoldsListRequest$outboundSchema;
    /** @deprecated use `HoldsListRequest$Outbound` instead. */
    export type Outbound = HoldsListRequest$Outbound;
}

/** @internal */
export const Cursor$inboundSchema: z.ZodType<Cursor, z.ZodTypeDef, unknown> = z.object({
    next: z.string().optional(),
    data: z.array(components.Hold$inboundSchema),
});

/** @internal */
export type Cursor$Outbound = {
    next?: string | undefined;
    data: Array<components.Hold$Outbound>;
};

/** @internal */
export const Cursor$outboundSchema: z.ZodType<Cursor$Outbound, z.ZodTypeDef, Cursor> = z.object({
    next: z.string().optional(),
    data: z.array(components.Hold$outboundSchema),
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
export const HoldsListResponseBody$inboundSchema: z.ZodType<
    HoldsListResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    cursor: z.lazy(() => Cursor$inboundSchema),
});

/** @internal */
export type HoldsListResponseBody$Outbound = {
    cursor: Cursor$Outbound;
};

/** @internal */
export const HoldsListResponseBody$outboundSchema: z.ZodType<
    HoldsListResponseBody$Outbound,
    z.ZodTypeDef,
    HoldsListResponseBody
> = z.object({
    cursor: z.lazy(() => Cursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HoldsListResponseBody$ {
    /** @deprecated use `HoldsListResponseBody$inboundSchema` instead. */
    export const inboundSchema = HoldsListResponseBody$inboundSchema;
    /** @deprecated use `HoldsListResponseBody$outboundSchema` instead. */
    export const outboundSchema = HoldsListResponseBody$outboundSchema;
    /** @deprecated use `HoldsListResponseBody$Outbound` instead. */
    export type Outbound = HoldsListResponseBody$Outbound;
}

/** @internal */
export const HoldsListResponse$inboundSchema: z.ZodType<HoldsListResponse, z.ZodTypeDef, unknown> =
    z
        .object({
            Result: z.lazy(() => HoldsListResponseBody$inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                Result: "result",
            });
        });

/** @internal */
export type HoldsListResponse$Outbound = {
    Result: HoldsListResponseBody$Outbound;
};

/** @internal */
export const HoldsListResponse$outboundSchema: z.ZodType<
    HoldsListResponse$Outbound,
    z.ZodTypeDef,
    HoldsListResponse
> = z
    .object({
        result: z.lazy(() => HoldsListResponseBody$outboundSchema),
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
export namespace HoldsListResponse$ {
    /** @deprecated use `HoldsListResponse$inboundSchema` instead. */
    export const inboundSchema = HoldsListResponse$inboundSchema;
    /** @deprecated use `HoldsListResponse$outboundSchema` instead. */
    export const outboundSchema = HoldsListResponse$outboundSchema;
    /** @deprecated use `HoldsListResponse$Outbound` instead. */
    export type Outbound = HoldsListResponse$Outbound;
}
