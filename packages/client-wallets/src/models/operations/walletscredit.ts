/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type Amount = {
    asset: string;
    amount: number;
};

export type WalletsCreditRequestBody = {
    amount: Amount;
    metadata: { [k: string]: string };
    source: components.WalletCounterpart;
    reference?: string | undefined;
    balance?: string | undefined;
    tinestamp?: string | undefined;
};

export type WalletsCreditRequest = {
    id: string;
    requestBody: WalletsCreditRequestBody;
};

/** @internal */
export namespace Amount$ {
    export const inboundSchema: z.ZodType<Amount, z.ZodTypeDef, unknown> = z.object({
        asset: z.string(),
        amount: z.number().int(),
    });

    export type Outbound = {
        asset: string;
        amount: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Amount> = z.object({
        asset: z.string(),
        amount: z.number().int(),
    });
}

/** @internal */
export namespace WalletsCreditRequestBody$ {
    export const inboundSchema: z.ZodType<WalletsCreditRequestBody, z.ZodTypeDef, unknown> =
        z.object({
            amount: z.lazy(() => Amount$.inboundSchema),
            metadata: z.record(z.string()),
            source: components.WalletCounterpart$.inboundSchema,
            reference: z.string().optional(),
            balance: z.string().optional(),
            tinestamp: z.string().optional(),
        });

    export type Outbound = {
        amount: Amount$.Outbound;
        metadata: { [k: string]: string };
        source: components.WalletCounterpart$.Outbound;
        reference?: string | undefined;
        balance?: string | undefined;
        tinestamp?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WalletsCreditRequestBody> =
        z.object({
            amount: z.lazy(() => Amount$.outboundSchema),
            metadata: z.record(z.string()),
            source: components.WalletCounterpart$.outboundSchema,
            reference: z.string().optional(),
            balance: z.string().optional(),
            tinestamp: z.string().optional(),
        });
}

/** @internal */
export namespace WalletsCreditRequest$ {
    export const inboundSchema: z.ZodType<WalletsCreditRequest, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            RequestBody: z.lazy(() => WalletsCreditRequestBody$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        id: string;
        RequestBody: WalletsCreditRequestBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WalletsCreditRequest> = z
        .object({
            id: z.string(),
            requestBody: z.lazy(() => WalletsCreditRequestBody$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                requestBody: "RequestBody",
            });
        });
}
