/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type WalletsDebitAmount = {
    asset: string;
    amount: number;
};

export type WalletsDebitRequestBody = {
    pending?: boolean | undefined;
    amount: WalletsDebitAmount;
    metadata: { [k: string]: string };
    description?: string | undefined;
    destination?: components.WalletCounterpart | undefined;
    balances?: Array<string> | undefined;
    timestamp?: Date | undefined;
};

export type WalletsDebitRequest = {
    id: string;
    requestBody: WalletsDebitRequestBody;
};

/**
 * The request has succeeded and a new resource has been created as a result.
 */
export type WalletsDebitResponseBody = {
    data: components.Hold;
};

/** @internal */
export namespace WalletsDebitAmount$ {
    export const inboundSchema: z.ZodType<WalletsDebitAmount, z.ZodTypeDef, unknown> = z.object({
        asset: z.string(),
        amount: z.number().int(),
    });

    export type Outbound = {
        asset: string;
        amount: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WalletsDebitAmount> = z.object({
        asset: z.string(),
        amount: z.number().int(),
    });
}

/** @internal */
export namespace WalletsDebitRequestBody$ {
    export const inboundSchema: z.ZodType<WalletsDebitRequestBody, z.ZodTypeDef, unknown> =
        z.object({
            pending: z.boolean().optional(),
            amount: z.lazy(() => WalletsDebitAmount$.inboundSchema),
            metadata: z.record(z.string()),
            description: z.string().optional(),
            destination: components.WalletCounterpart$.inboundSchema.optional(),
            balances: z.array(z.string()).optional(),
            timestamp: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        });

    export type Outbound = {
        pending?: boolean | undefined;
        amount: WalletsDebitAmount$.Outbound;
        metadata: { [k: string]: string };
        description?: string | undefined;
        destination?: components.WalletCounterpart$.Outbound | undefined;
        balances?: Array<string> | undefined;
        timestamp?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WalletsDebitRequestBody> =
        z.object({
            pending: z.boolean().optional(),
            amount: z.lazy(() => WalletsDebitAmount$.outboundSchema),
            metadata: z.record(z.string()),
            description: z.string().optional(),
            destination: components.WalletCounterpart$.outboundSchema.optional(),
            balances: z.array(z.string()).optional(),
            timestamp: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        });
}

/** @internal */
export namespace WalletsDebitRequest$ {
    export const inboundSchema: z.ZodType<WalletsDebitRequest, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            RequestBody: z.lazy(() => WalletsDebitRequestBody$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        id: string;
        RequestBody: WalletsDebitRequestBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WalletsDebitRequest> = z
        .object({
            id: z.string(),
            requestBody: z.lazy(() => WalletsDebitRequestBody$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                requestBody: "RequestBody",
            });
        });
}

/** @internal */
export namespace WalletsDebitResponseBody$ {
    export const inboundSchema: z.ZodType<WalletsDebitResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            data: components.Hold$.inboundSchema,
        });

    export type Outbound = {
        data: components.Hold$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WalletsDebitResponseBody> =
        z.object({
            data: components.Hold$.outboundSchema,
        });
}
