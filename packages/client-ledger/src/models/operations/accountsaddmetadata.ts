/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type AccountsAddMetadataRequestBody = {
    metadata: { [k: string]: any };
};

export type AccountsAddMetadataRequest = {
    ledger: string;
    address: string;
    requestBody: AccountsAddMetadataRequestBody;
};

/** @internal */
export namespace AccountsAddMetadataRequestBody$ {
    export const inboundSchema: z.ZodType<AccountsAddMetadataRequestBody, z.ZodTypeDef, unknown> =
        z.object({
            metadata: z.record(z.any()),
        });

    export type Outbound = {
        metadata: { [k: string]: any };
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountsAddMetadataRequestBody> =
        z.object({
            metadata: z.record(z.any()),
        });
}

/** @internal */
export namespace AccountsAddMetadataRequest$ {
    export const inboundSchema: z.ZodType<AccountsAddMetadataRequest, z.ZodTypeDef, unknown> = z
        .object({
            ledger: z.string(),
            address: z.string(),
            RequestBody: z.lazy(() => AccountsAddMetadataRequestBody$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        ledger: string;
        address: string;
        RequestBody: AccountsAddMetadataRequestBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountsAddMetadataRequest> = z
        .object({
            ledger: z.string(),
            address: z.string(),
            requestBody: z.lazy(() => AccountsAddMetadataRequestBody$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                requestBody: "RequestBody",
            });
        });
}
