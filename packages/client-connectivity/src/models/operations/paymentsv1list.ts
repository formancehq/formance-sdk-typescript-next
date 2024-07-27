/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type PaymentsV1ListRequest = {
    pageSize?: number | undefined;
    cursor?: string | undefined;
    sort?: Array<string> | undefined;
    query?: string | undefined;
};

export type PaymentsV1ListCursor = {
    next?: string | undefined;
    data: Array<components.Payment>;
};

/**
 * The request has succeeded.
 */
export type PaymentsV1ListResponseBody = {
    cursor: PaymentsV1ListCursor;
};

export type PaymentsV1ListResponse = {
    result: PaymentsV1ListResponseBody;
};

/** @internal */
export const PaymentsV1ListRequest$inboundSchema: z.ZodType<
    PaymentsV1ListRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    pageSize: z.number().int().optional(),
    cursor: z.string().optional(),
    sort: z.array(z.string()).optional(),
    query: z.string().optional(),
});

/** @internal */
export type PaymentsV1ListRequest$Outbound = {
    pageSize?: number | undefined;
    cursor?: string | undefined;
    sort?: Array<string> | undefined;
    query?: string | undefined;
};

/** @internal */
export const PaymentsV1ListRequest$outboundSchema: z.ZodType<
    PaymentsV1ListRequest$Outbound,
    z.ZodTypeDef,
    PaymentsV1ListRequest
> = z.object({
    pageSize: z.number().int().optional(),
    cursor: z.string().optional(),
    sort: z.array(z.string()).optional(),
    query: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentsV1ListRequest$ {
    /** @deprecated use `PaymentsV1ListRequest$inboundSchema` instead. */
    export const inboundSchema = PaymentsV1ListRequest$inboundSchema;
    /** @deprecated use `PaymentsV1ListRequest$outboundSchema` instead. */
    export const outboundSchema = PaymentsV1ListRequest$outboundSchema;
    /** @deprecated use `PaymentsV1ListRequest$Outbound` instead. */
    export type Outbound = PaymentsV1ListRequest$Outbound;
}

/** @internal */
export const PaymentsV1ListCursor$inboundSchema: z.ZodType<
    PaymentsV1ListCursor,
    z.ZodTypeDef,
    unknown
> = z.object({
    next: z.string().optional(),
    data: z.array(components.Payment$inboundSchema),
});

/** @internal */
export type PaymentsV1ListCursor$Outbound = {
    next?: string | undefined;
    data: Array<components.Payment$Outbound>;
};

/** @internal */
export const PaymentsV1ListCursor$outboundSchema: z.ZodType<
    PaymentsV1ListCursor$Outbound,
    z.ZodTypeDef,
    PaymentsV1ListCursor
> = z.object({
    next: z.string().optional(),
    data: z.array(components.Payment$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentsV1ListCursor$ {
    /** @deprecated use `PaymentsV1ListCursor$inboundSchema` instead. */
    export const inboundSchema = PaymentsV1ListCursor$inboundSchema;
    /** @deprecated use `PaymentsV1ListCursor$outboundSchema` instead. */
    export const outboundSchema = PaymentsV1ListCursor$outboundSchema;
    /** @deprecated use `PaymentsV1ListCursor$Outbound` instead. */
    export type Outbound = PaymentsV1ListCursor$Outbound;
}

/** @internal */
export const PaymentsV1ListResponseBody$inboundSchema: z.ZodType<
    PaymentsV1ListResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    cursor: z.lazy(() => PaymentsV1ListCursor$inboundSchema),
});

/** @internal */
export type PaymentsV1ListResponseBody$Outbound = {
    cursor: PaymentsV1ListCursor$Outbound;
};

/** @internal */
export const PaymentsV1ListResponseBody$outboundSchema: z.ZodType<
    PaymentsV1ListResponseBody$Outbound,
    z.ZodTypeDef,
    PaymentsV1ListResponseBody
> = z.object({
    cursor: z.lazy(() => PaymentsV1ListCursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentsV1ListResponseBody$ {
    /** @deprecated use `PaymentsV1ListResponseBody$inboundSchema` instead. */
    export const inboundSchema = PaymentsV1ListResponseBody$inboundSchema;
    /** @deprecated use `PaymentsV1ListResponseBody$outboundSchema` instead. */
    export const outboundSchema = PaymentsV1ListResponseBody$outboundSchema;
    /** @deprecated use `PaymentsV1ListResponseBody$Outbound` instead. */
    export type Outbound = PaymentsV1ListResponseBody$Outbound;
}

/** @internal */
export const PaymentsV1ListResponse$inboundSchema: z.ZodType<
    PaymentsV1ListResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => PaymentsV1ListResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type PaymentsV1ListResponse$Outbound = {
    Result: PaymentsV1ListResponseBody$Outbound;
};

/** @internal */
export const PaymentsV1ListResponse$outboundSchema: z.ZodType<
    PaymentsV1ListResponse$Outbound,
    z.ZodTypeDef,
    PaymentsV1ListResponse
> = z
    .object({
        result: z.lazy(() => PaymentsV1ListResponseBody$outboundSchema),
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
export namespace PaymentsV1ListResponse$ {
    /** @deprecated use `PaymentsV1ListResponse$inboundSchema` instead. */
    export const inboundSchema = PaymentsV1ListResponse$inboundSchema;
    /** @deprecated use `PaymentsV1ListResponse$outboundSchema` instead. */
    export const outboundSchema = PaymentsV1ListResponse$outboundSchema;
    /** @deprecated use `PaymentsV1ListResponse$Outbound` instead. */
    export type Outbound = PaymentsV1ListResponse$Outbound;
}
