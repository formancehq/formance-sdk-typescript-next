/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
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
export namespace BalancesVolumesRequest$ {
    export const inboundSchema: z.ZodType<BalancesVolumesRequest, z.ZodTypeDef, unknown> = z.object(
        {
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
        }
    );

    export type Outbound = {
        ledger: string;
        cursor?: string | undefined;
        pageSize?: number | undefined;
        startTime?: string | undefined;
        endTime?: string | undefined;
        inseritionDate?: boolean | undefined;
        groupBy?: number | undefined;
        query: { [k: string]: any };
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BalancesVolumesRequest> =
        z.object({
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
}

/** @internal */
export namespace BalancesVolumesCursor$ {
    export const inboundSchema: z.ZodType<BalancesVolumesCursor, z.ZodTypeDef, unknown> = z.object({
        next: z.string().optional(),
        data: z.array(components.VolumeItem$.inboundSchema),
    });

    export type Outbound = {
        next?: string | undefined;
        data: Array<components.VolumeItem$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BalancesVolumesCursor> =
        z.object({
            next: z.string().optional(),
            data: z.array(components.VolumeItem$.outboundSchema),
        });
}

/** @internal */
export namespace BalancesVolumesResponseBody$ {
    export const inboundSchema: z.ZodType<BalancesVolumesResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            cursor: z.lazy(() => BalancesVolumesCursor$.inboundSchema),
        });

    export type Outbound = {
        cursor: BalancesVolumesCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BalancesVolumesResponseBody> =
        z.object({
            cursor: z.lazy(() => BalancesVolumesCursor$.outboundSchema),
        });
}

/** @internal */
export namespace BalancesVolumesResponse$ {
    export const inboundSchema: z.ZodType<BalancesVolumesResponse, z.ZodTypeDef, unknown> = z
        .object({
            Result: z.lazy(() => BalancesVolumesResponseBody$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                Result: "result",
            });
        });

    export type Outbound = {
        Result: BalancesVolumesResponseBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BalancesVolumesResponse> = z
        .object({
            result: z.lazy(() => BalancesVolumesResponseBody$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                result: "Result",
            });
        });
}
