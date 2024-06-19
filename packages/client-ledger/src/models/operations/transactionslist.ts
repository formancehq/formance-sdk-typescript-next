/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
export namespace TransactionsListRequest$ {
    export const inboundSchema: z.ZodType<TransactionsListRequest, z.ZodTypeDef, unknown> =
        z.object({
            ledger: z.string(),
            expand: z.string().optional(),
            pit: z.boolean().optional(),
            cursor: z.string().optional(),
            pageSize: z.number().int().optional(),
            query: z.record(z.any()).optional(),
        });

    export type Outbound = {
        ledger: string;
        expand?: string | undefined;
        pit?: boolean | undefined;
        cursor?: string | undefined;
        pageSize?: number | undefined;
        query?: { [k: string]: any } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TransactionsListRequest> =
        z.object({
            ledger: z.string(),
            expand: z.string().optional(),
            pit: z.boolean().optional(),
            cursor: z.string().optional(),
            pageSize: z.number().int().optional(),
            query: z.record(z.any()).optional(),
        });
}

/** @internal */
export namespace TransactionsListCursor$ {
    export const inboundSchema: z.ZodType<TransactionsListCursor, z.ZodTypeDef, unknown> = z.object(
        {
            next: z.string().optional(),
            data: z.array(components.Transaction$.inboundSchema),
        }
    );

    export type Outbound = {
        next?: string | undefined;
        data: Array<components.Transaction$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TransactionsListCursor> =
        z.object({
            next: z.string().optional(),
            data: z.array(components.Transaction$.outboundSchema),
        });
}

/** @internal */
export namespace TransactionsListResponseBody$ {
    export const inboundSchema: z.ZodType<TransactionsListResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            cursor: z.lazy(() => TransactionsListCursor$.inboundSchema),
        });

    export type Outbound = {
        cursor: TransactionsListCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TransactionsListResponseBody> =
        z.object({
            cursor: z.lazy(() => TransactionsListCursor$.outboundSchema),
        });
}

/** @internal */
export namespace TransactionsListResponse$ {
    export const inboundSchema: z.ZodType<TransactionsListResponse, z.ZodTypeDef, unknown> = z
        .object({
            Result: z.lazy(() => TransactionsListResponseBody$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                Result: "result",
            });
        });

    export type Outbound = {
        Result: TransactionsListResponseBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TransactionsListResponse> = z
        .object({
            result: z.lazy(() => TransactionsListResponseBody$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                result: "Result",
            });
        });
}