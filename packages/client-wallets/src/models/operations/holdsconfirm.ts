/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type HoldsConfirmRequestBody = {
    amount?: number | undefined;
    final?: boolean | undefined;
};

export type HoldsConfirmRequest = {
    holdId: string;
    requestBody: HoldsConfirmRequestBody;
};

/** @internal */
export namespace HoldsConfirmRequestBody$ {
    export const inboundSchema: z.ZodType<HoldsConfirmRequestBody, z.ZodTypeDef, unknown> =
        z.object({
            amount: z.number().int().optional(),
            final: z.boolean().optional(),
        });

    export type Outbound = {
        amount?: number | undefined;
        final?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HoldsConfirmRequestBody> =
        z.object({
            amount: z.number().int().optional(),
            final: z.boolean().optional(),
        });
}

/** @internal */
export namespace HoldsConfirmRequest$ {
    export const inboundSchema: z.ZodType<HoldsConfirmRequest, z.ZodTypeDef, unknown> = z
        .object({
            holdId: z.string(),
            RequestBody: z.lazy(() => HoldsConfirmRequestBody$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        holdId: string;
        RequestBody: HoldsConfirmRequestBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HoldsConfirmRequest> = z
        .object({
            holdId: z.string(),
            requestBody: z.lazy(() => HoldsConfirmRequestBody$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                requestBody: "RequestBody",
            });
        });
}
