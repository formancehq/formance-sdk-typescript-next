/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type TransferInitiationsUpdateStatusRequestBody = {
    status: components.TransferInitiationWritableStatus;
};

export type TransferInitiationsUpdateStatusRequest = {
    transferId: string;
    requestBody: TransferInitiationsUpdateStatusRequestBody;
};

/** @internal */
export namespace TransferInitiationsUpdateStatusRequestBody$ {
    export const inboundSchema: z.ZodType<
        TransferInitiationsUpdateStatusRequestBody,
        z.ZodTypeDef,
        unknown
    > = z.object({
        status: components.TransferInitiationWritableStatus$.inboundSchema,
    });

    export type Outbound = {
        status: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TransferInitiationsUpdateStatusRequestBody
    > = z.object({
        status: components.TransferInitiationWritableStatus$.outboundSchema,
    });
}

/** @internal */
export namespace TransferInitiationsUpdateStatusRequest$ {
    export const inboundSchema: z.ZodType<
        TransferInitiationsUpdateStatusRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            transferId: z.string(),
            RequestBody: z.lazy(() => TransferInitiationsUpdateStatusRequestBody$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        transferId: string;
        RequestBody: TransferInitiationsUpdateStatusRequestBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TransferInitiationsUpdateStatusRequest
    > = z
        .object({
            transferId: z.string(),
            requestBody: z.lazy(() => TransferInitiationsUpdateStatusRequestBody$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                requestBody: "RequestBody",
            });
        });
}
