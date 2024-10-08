/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
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
export const AccountsAddMetadataRequestBody$inboundSchema: z.ZodType<
    AccountsAddMetadataRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    metadata: z.record(z.any()),
});

/** @internal */
export type AccountsAddMetadataRequestBody$Outbound = {
    metadata: { [k: string]: any };
};

/** @internal */
export const AccountsAddMetadataRequestBody$outboundSchema: z.ZodType<
    AccountsAddMetadataRequestBody$Outbound,
    z.ZodTypeDef,
    AccountsAddMetadataRequestBody
> = z.object({
    metadata: z.record(z.any()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsAddMetadataRequestBody$ {
    /** @deprecated use `AccountsAddMetadataRequestBody$inboundSchema` instead. */
    export const inboundSchema = AccountsAddMetadataRequestBody$inboundSchema;
    /** @deprecated use `AccountsAddMetadataRequestBody$outboundSchema` instead. */
    export const outboundSchema = AccountsAddMetadataRequestBody$outboundSchema;
    /** @deprecated use `AccountsAddMetadataRequestBody$Outbound` instead. */
    export type Outbound = AccountsAddMetadataRequestBody$Outbound;
}

/** @internal */
export const AccountsAddMetadataRequest$inboundSchema: z.ZodType<
    AccountsAddMetadataRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ledger: z.string(),
        address: z.string(),
        RequestBody: z.lazy(() => AccountsAddMetadataRequestBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type AccountsAddMetadataRequest$Outbound = {
    ledger: string;
    address: string;
    RequestBody: AccountsAddMetadataRequestBody$Outbound;
};

/** @internal */
export const AccountsAddMetadataRequest$outboundSchema: z.ZodType<
    AccountsAddMetadataRequest$Outbound,
    z.ZodTypeDef,
    AccountsAddMetadataRequest
> = z
    .object({
        ledger: z.string(),
        address: z.string(),
        requestBody: z.lazy(() => AccountsAddMetadataRequestBody$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            requestBody: "RequestBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsAddMetadataRequest$ {
    /** @deprecated use `AccountsAddMetadataRequest$inboundSchema` instead. */
    export const inboundSchema = AccountsAddMetadataRequest$inboundSchema;
    /** @deprecated use `AccountsAddMetadataRequest$outboundSchema` instead. */
    export const outboundSchema = AccountsAddMetadataRequest$outboundSchema;
    /** @deprecated use `AccountsAddMetadataRequest$Outbound` instead. */
    export type Outbound = AccountsAddMetadataRequest$Outbound;
}
