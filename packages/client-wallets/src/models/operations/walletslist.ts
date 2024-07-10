/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type WalletsListRequest = {
    name: string;
    metadata: { [k: string]: string };
    cursor?: string | undefined;
    pageSize?: number | undefined;
};

export type WalletsListCursor = {
    next?: string | undefined;
    data: Array<components.Wallet>;
};

/**
 * The request has succeeded.
 */
export type WalletsListResponseBody = {
    cursor: WalletsListCursor;
};

export type WalletsListResponse = {
    result: WalletsListResponseBody;
};

/** @internal */
export const WalletsListRequest$inboundSchema: z.ZodType<
    WalletsListRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    metadata: z.record(z.string()),
    cursor: z.string().optional(),
    pageSize: z.number().int().optional(),
});

/** @internal */
export type WalletsListRequest$Outbound = {
    name: string;
    metadata: { [k: string]: string };
    cursor?: string | undefined;
    pageSize?: number | undefined;
};

/** @internal */
export const WalletsListRequest$outboundSchema: z.ZodType<
    WalletsListRequest$Outbound,
    z.ZodTypeDef,
    WalletsListRequest
> = z.object({
    name: z.string(),
    metadata: z.record(z.string()),
    cursor: z.string().optional(),
    pageSize: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsListRequest$ {
    /** @deprecated use `WalletsListRequest$inboundSchema` instead. */
    export const inboundSchema = WalletsListRequest$inboundSchema;
    /** @deprecated use `WalletsListRequest$outboundSchema` instead. */
    export const outboundSchema = WalletsListRequest$outboundSchema;
    /** @deprecated use `WalletsListRequest$Outbound` instead. */
    export type Outbound = WalletsListRequest$Outbound;
}

/** @internal */
export const WalletsListCursor$inboundSchema: z.ZodType<WalletsListCursor, z.ZodTypeDef, unknown> =
    z.object({
        next: z.string().optional(),
        data: z.array(components.Wallet$inboundSchema),
    });

/** @internal */
export type WalletsListCursor$Outbound = {
    next?: string | undefined;
    data: Array<components.Wallet$Outbound>;
};

/** @internal */
export const WalletsListCursor$outboundSchema: z.ZodType<
    WalletsListCursor$Outbound,
    z.ZodTypeDef,
    WalletsListCursor
> = z.object({
    next: z.string().optional(),
    data: z.array(components.Wallet$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsListCursor$ {
    /** @deprecated use `WalletsListCursor$inboundSchema` instead. */
    export const inboundSchema = WalletsListCursor$inboundSchema;
    /** @deprecated use `WalletsListCursor$outboundSchema` instead. */
    export const outboundSchema = WalletsListCursor$outboundSchema;
    /** @deprecated use `WalletsListCursor$Outbound` instead. */
    export type Outbound = WalletsListCursor$Outbound;
}

/** @internal */
export const WalletsListResponseBody$inboundSchema: z.ZodType<
    WalletsListResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    cursor: z.lazy(() => WalletsListCursor$inboundSchema),
});

/** @internal */
export type WalletsListResponseBody$Outbound = {
    cursor: WalletsListCursor$Outbound;
};

/** @internal */
export const WalletsListResponseBody$outboundSchema: z.ZodType<
    WalletsListResponseBody$Outbound,
    z.ZodTypeDef,
    WalletsListResponseBody
> = z.object({
    cursor: z.lazy(() => WalletsListCursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsListResponseBody$ {
    /** @deprecated use `WalletsListResponseBody$inboundSchema` instead. */
    export const inboundSchema = WalletsListResponseBody$inboundSchema;
    /** @deprecated use `WalletsListResponseBody$outboundSchema` instead. */
    export const outboundSchema = WalletsListResponseBody$outboundSchema;
    /** @deprecated use `WalletsListResponseBody$Outbound` instead. */
    export type Outbound = WalletsListResponseBody$Outbound;
}

/** @internal */
export const WalletsListResponse$inboundSchema: z.ZodType<
    WalletsListResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => WalletsListResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type WalletsListResponse$Outbound = {
    Result: WalletsListResponseBody$Outbound;
};

/** @internal */
export const WalletsListResponse$outboundSchema: z.ZodType<
    WalletsListResponse$Outbound,
    z.ZodTypeDef,
    WalletsListResponse
> = z
    .object({
        result: z.lazy(() => WalletsListResponseBody$outboundSchema),
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
export namespace WalletsListResponse$ {
    /** @deprecated use `WalletsListResponse$inboundSchema` instead. */
    export const inboundSchema = WalletsListResponse$inboundSchema;
    /** @deprecated use `WalletsListResponse$outboundSchema` instead. */
    export const outboundSchema = WalletsListResponse$outboundSchema;
    /** @deprecated use `WalletsListResponse$Outbound` instead. */
    export type Outbound = WalletsListResponse$Outbound;
}
