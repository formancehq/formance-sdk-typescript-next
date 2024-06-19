/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type TransactionsCountRequest = {
    ledger: string;
    pit?: Date | undefined;
    query?: { [k: string]: any } | undefined;
};

export type TransactionsCountResponse = {
    headers: { [k: string]: Array<string> };
};

/** @internal */
export namespace TransactionsCountRequest$ {
    export const inboundSchema: z.ZodType<TransactionsCountRequest, z.ZodTypeDef, unknown> =
        z.object({
            ledger: z.string(),
            pit: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            query: z.record(z.any()).optional(),
        });

    export type Outbound = {
        ledger: string;
        pit?: string | undefined;
        query?: { [k: string]: any } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TransactionsCountRequest> =
        z.object({
            ledger: z.string(),
            pit: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            query: z.record(z.any()).optional(),
        });
}

/** @internal */
export namespace TransactionsCountResponse$ {
    export const inboundSchema: z.ZodType<TransactionsCountResponse, z.ZodTypeDef, unknown> = z
        .object({
            Headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return remap$(v, {
                Headers: "headers",
            });
        });

    export type Outbound = {
        Headers: { [k: string]: Array<string> };
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TransactionsCountResponse> = z
        .object({
            headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return remap$(v, {
                headers: "Headers",
            });
        });
}
