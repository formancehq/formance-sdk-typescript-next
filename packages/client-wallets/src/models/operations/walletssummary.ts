/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type WalletsSummaryRequest = {
    id: string;
};

/**
 * The request has succeeded.
 */
export type WalletsSummaryResponseBody = {
    data: components.WalletSummary;
};

/** @internal */
export namespace WalletsSummaryRequest$ {
    export const inboundSchema: z.ZodType<WalletsSummaryRequest, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
    });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WalletsSummaryRequest> =
        z.object({
            id: z.string(),
        });
}

/** @internal */
export namespace WalletsSummaryResponseBody$ {
    export const inboundSchema: z.ZodType<WalletsSummaryResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            data: components.WalletSummary$.inboundSchema,
        });

    export type Outbound = {
        data: components.WalletSummary$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WalletsSummaryResponseBody> =
        z.object({
            data: components.WalletSummary$.outboundSchema,
        });
}