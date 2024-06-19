/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type WalletsUpdateRequestBody = {
    metadata?: { [k: string]: string } | undefined;
};

export type WalletsUpdateRequest = {
    id: string;
    requestBody: WalletsUpdateRequestBody;
};

/** @internal */
export namespace WalletsUpdateRequestBody$ {
    export const inboundSchema: z.ZodType<WalletsUpdateRequestBody, z.ZodTypeDef, unknown> =
        z.object({
            metadata: z.record(z.string()).optional(),
        });

    export type Outbound = {
        metadata?: { [k: string]: string } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WalletsUpdateRequestBody> =
        z.object({
            metadata: z.record(z.string()).optional(),
        });
}

/** @internal */
export namespace WalletsUpdateRequest$ {
    export const inboundSchema: z.ZodType<WalletsUpdateRequest, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            RequestBody: z.lazy(() => WalletsUpdateRequestBody$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        id: string;
        RequestBody: WalletsUpdateRequestBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WalletsUpdateRequest> = z
        .object({
            id: z.string(),
            requestBody: z.lazy(() => WalletsUpdateRequestBody$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                requestBody: "RequestBody",
            });
        });
}
