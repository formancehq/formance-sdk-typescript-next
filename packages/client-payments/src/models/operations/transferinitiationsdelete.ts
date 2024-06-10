/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type TransferInitiationsDeleteRequest = {
    transferId: string;
};

/** @internal */
export namespace TransferInitiationsDeleteRequest$ {
    export const inboundSchema: z.ZodType<TransferInitiationsDeleteRequest, z.ZodTypeDef, unknown> =
        z.object({
            transferId: z.string(),
        });

    export type Outbound = {
        transferId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TransferInitiationsDeleteRequest
    > = z.object({
        transferId: z.string(),
    });
}
