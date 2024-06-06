/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type ReconciliationsV1ListRequest = {
    pageSize?: number | undefined;
    cursor?: string | undefined;
};

export type ReconciliationsV1ListCursor = {
    next?: string | undefined;
    data: Array<components.Reconciliation>;
};

/**
 * The request has succeeded.
 */
export type ReconciliationsV1ListResponseBody = {
    cursor: ReconciliationsV1ListCursor;
};

export type ReconciliationsV1ListResponse = {
    result: ReconciliationsV1ListResponseBody;
};

/** @internal */
export namespace ReconciliationsV1ListRequest$ {
    export const inboundSchema: z.ZodType<ReconciliationsV1ListRequest, z.ZodTypeDef, unknown> =
        z.object({
            pageSize: z.number().int().default(100),
            cursor: z.string().optional(),
        });

    export type Outbound = {
        pageSize: number;
        cursor?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReconciliationsV1ListRequest> =
        z.object({
            pageSize: z.number().int().default(100),
            cursor: z.string().optional(),
        });
}

/** @internal */
export namespace ReconciliationsV1ListCursor$ {
    export const inboundSchema: z.ZodType<ReconciliationsV1ListCursor, z.ZodTypeDef, unknown> =
        z.object({
            next: z.string().optional(),
            data: z.array(components.Reconciliation$.inboundSchema),
        });

    export type Outbound = {
        next?: string | undefined;
        data: Array<components.Reconciliation$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReconciliationsV1ListCursor> =
        z.object({
            next: z.string().optional(),
            data: z.array(components.Reconciliation$.outboundSchema),
        });
}

/** @internal */
export namespace ReconciliationsV1ListResponseBody$ {
    export const inboundSchema: z.ZodType<
        ReconciliationsV1ListResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.object({
        cursor: z.lazy(() => ReconciliationsV1ListCursor$.inboundSchema),
    });

    export type Outbound = {
        cursor: ReconciliationsV1ListCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ReconciliationsV1ListResponseBody
    > = z.object({
        cursor: z.lazy(() => ReconciliationsV1ListCursor$.outboundSchema),
    });
}

/** @internal */
export namespace ReconciliationsV1ListResponse$ {
    export const inboundSchema: z.ZodType<ReconciliationsV1ListResponse, z.ZodTypeDef, unknown> = z
        .object({
            Result: z.lazy(() => ReconciliationsV1ListResponseBody$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                Result: "result",
            });
        });

    export type Outbound = {
        Result: ReconciliationsV1ListResponseBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReconciliationsV1ListResponse> =
        z
            .object({
                result: z.lazy(() => ReconciliationsV1ListResponseBody$.outboundSchema),
            })
            .transform((v) => {
                return remap$(v, {
                    result: "Result",
                });
            });
}
