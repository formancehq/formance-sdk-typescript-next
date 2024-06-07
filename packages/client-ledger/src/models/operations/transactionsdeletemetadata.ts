/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type TransactionsDeleteMetadataRequest = {
    ledger: string;
    id: string;
    key: string;
};

/** @internal */
export namespace TransactionsDeleteMetadataRequest$ {
    export const inboundSchema: z.ZodType<
        TransactionsDeleteMetadataRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        ledger: z.string(),
        id: z.string(),
        key: z.string(),
    });

    export type Outbound = {
        ledger: string;
        id: string;
        key: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TransactionsDeleteMetadataRequest
    > = z.object({
        ledger: z.string(),
        id: z.string(),
        key: z.string(),
    });
}
