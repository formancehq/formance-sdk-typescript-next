/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type BalancesVolumesRequest = {
    ledger: string;
    cursor?: string | undefined;
    pageSize?: number | undefined;
    startTime?: Date | undefined;
    endTime?: Date | undefined;
    inseritionDate?: boolean | undefined;
    groupBy?: number | undefined;
    query: { [k: string]: any };
};

export type BalancesVolumesCursor = {
    next?: string | undefined;
    data: Array<components.VolumeItem>;
};

/**
 * The request has succeeded.
 */
export type BalancesVolumesResponseBody = {
    cursor: BalancesVolumesCursor;
};

export type BalancesVolumesResponse = {
    result: BalancesVolumesResponseBody;
};

/** @internal */
export const BalancesVolumesRequest$inboundSchema: z.ZodType<
    BalancesVolumesRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    ledger: z.string(),
    cursor: z.string().optional(),
    pageSize: z.number().int().optional(),
    startTime: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
    endTime: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
    inseritionDate: z.boolean().optional(),
    groupBy: z.number().int().optional(),
    query: z.record(z.any()),
});

/** @internal */
export type BalancesVolumesRequest$Outbound = {
    ledger: string;
    cursor?: string | undefined;
    pageSize?: number | undefined;
    startTime?: string | undefined;
    endTime?: string | undefined;
    inseritionDate?: boolean | undefined;
    groupBy?: number | undefined;
    query: { [k: string]: any };
};

/** @internal */
export const BalancesVolumesRequest$outboundSchema: z.ZodType<
    BalancesVolumesRequest$Outbound,
    z.ZodTypeDef,
    BalancesVolumesRequest
> = z.object({
    ledger: z.string(),
    cursor: z.string().optional(),
    pageSize: z.number().int().optional(),
    startTime: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
    endTime: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
    inseritionDate: z.boolean().optional(),
    groupBy: z.number().int().optional(),
    query: z.record(z.any()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BalancesVolumesRequest$ {
    /** @deprecated use `BalancesVolumesRequest$inboundSchema` instead. */
    export const inboundSchema = BalancesVolumesRequest$inboundSchema;
    /** @deprecated use `BalancesVolumesRequest$outboundSchema` instead. */
    export const outboundSchema = BalancesVolumesRequest$outboundSchema;
    /** @deprecated use `BalancesVolumesRequest$Outbound` instead. */
    export type Outbound = BalancesVolumesRequest$Outbound;
}

/** @internal */
export const BalancesVolumesCursor$inboundSchema: z.ZodType<
    BalancesVolumesCursor,
    z.ZodTypeDef,
    unknown
> = z.object({
    next: z.string().optional(),
    data: z.array(components.VolumeItem$inboundSchema),
});

/** @internal */
export type BalancesVolumesCursor$Outbound = {
    next?: string | undefined;
    data: Array<components.VolumeItem$Outbound>;
};

/** @internal */
export const BalancesVolumesCursor$outboundSchema: z.ZodType<
    BalancesVolumesCursor$Outbound,
    z.ZodTypeDef,
    BalancesVolumesCursor
> = z.object({
    next: z.string().optional(),
    data: z.array(components.VolumeItem$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BalancesVolumesCursor$ {
    /** @deprecated use `BalancesVolumesCursor$inboundSchema` instead. */
    export const inboundSchema = BalancesVolumesCursor$inboundSchema;
    /** @deprecated use `BalancesVolumesCursor$outboundSchema` instead. */
    export const outboundSchema = BalancesVolumesCursor$outboundSchema;
    /** @deprecated use `BalancesVolumesCursor$Outbound` instead. */
    export type Outbound = BalancesVolumesCursor$Outbound;
}

/** @internal */
export const BalancesVolumesResponseBody$inboundSchema: z.ZodType<
    BalancesVolumesResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    cursor: z.lazy(() => BalancesVolumesCursor$inboundSchema),
});

/** @internal */
export type BalancesVolumesResponseBody$Outbound = {
    cursor: BalancesVolumesCursor$Outbound;
};

/** @internal */
export const BalancesVolumesResponseBody$outboundSchema: z.ZodType<
    BalancesVolumesResponseBody$Outbound,
    z.ZodTypeDef,
    BalancesVolumesResponseBody
> = z.object({
    cursor: z.lazy(() => BalancesVolumesCursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BalancesVolumesResponseBody$ {
    /** @deprecated use `BalancesVolumesResponseBody$inboundSchema` instead. */
    export const inboundSchema = BalancesVolumesResponseBody$inboundSchema;
    /** @deprecated use `BalancesVolumesResponseBody$outboundSchema` instead. */
    export const outboundSchema = BalancesVolumesResponseBody$outboundSchema;
    /** @deprecated use `BalancesVolumesResponseBody$Outbound` instead. */
    export type Outbound = BalancesVolumesResponseBody$Outbound;
}

/** @internal */
export const BalancesVolumesResponse$inboundSchema: z.ZodType<
    BalancesVolumesResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => BalancesVolumesResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type BalancesVolumesResponse$Outbound = {
    Result: BalancesVolumesResponseBody$Outbound;
};

/** @internal */
export const BalancesVolumesResponse$outboundSchema: z.ZodType<
    BalancesVolumesResponse$Outbound,
    z.ZodTypeDef,
    BalancesVolumesResponse
> = z
    .object({
        result: z.lazy(() => BalancesVolumesResponseBody$outboundSchema),
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
export namespace BalancesVolumesResponse$ {
    /** @deprecated use `BalancesVolumesResponse$inboundSchema` instead. */
    export const inboundSchema = BalancesVolumesResponse$inboundSchema;
    /** @deprecated use `BalancesVolumesResponse$outboundSchema` instead. */
    export const outboundSchema = BalancesVolumesResponse$outboundSchema;
    /** @deprecated use `BalancesVolumesResponse$Outbound` instead. */
    export type Outbound = BalancesVolumesResponse$Outbound;
}
