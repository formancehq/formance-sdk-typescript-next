/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type TransferInitiationsReverseRequestBody = {
    reference: string;
    description: string;
    amount: number;
    asset: string;
    metatdata?: { [k: string]: string } | undefined;
};

export type TransferInitiationsReverseRequest = {
    transferId: string;
    requestBody: TransferInitiationsReverseRequestBody;
};

/** @internal */
export namespace TransferInitiationsReverseRequestBody$ {
    export const inboundSchema: z.ZodType<
        TransferInitiationsReverseRequestBody,
        z.ZodTypeDef,
        unknown
    > = z.object({
        reference: z.string(),
        description: z.string(),
        amount: z.number().int(),
        asset: z.string(),
        metatdata: z.record(z.string()).optional(),
    });

    export type Outbound = {
        reference: string;
        description: string;
        amount: number;
        asset: string;
        metatdata?: { [k: string]: string } | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TransferInitiationsReverseRequestBody
    > = z.object({
        reference: z.string(),
        description: z.string(),
        amount: z.number().int(),
        asset: z.string(),
        metatdata: z.record(z.string()).optional(),
    });
}

/** @internal */
export namespace TransferInitiationsReverseRequest$ {
    export const inboundSchema: z.ZodType<
        TransferInitiationsReverseRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            transferId: z.string(),
            RequestBody: z.lazy(() => TransferInitiationsReverseRequestBody$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        transferId: string;
        RequestBody: TransferInitiationsReverseRequestBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TransferInitiationsReverseRequest
    > = z
        .object({
            transferId: z.string(),
            requestBody: z.lazy(() => TransferInitiationsReverseRequestBody$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                requestBody: "RequestBody",
            });
        });
}
