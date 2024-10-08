/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type AccountsCountRequest = {
    ledger: string;
    address: string;
    pit?: Date | undefined;
    query: { [k: string]: any };
};

export type AccountsCountResponse = {
    headers: { [k: string]: Array<string> };
};

/** @internal */
export const AccountsCountRequest$inboundSchema: z.ZodType<
    AccountsCountRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    ledger: z.string(),
    address: z.string(),
    pit: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
    query: z.record(z.any()),
});

/** @internal */
export type AccountsCountRequest$Outbound = {
    ledger: string;
    address: string;
    pit?: string | undefined;
    query: { [k: string]: any };
};

/** @internal */
export const AccountsCountRequest$outboundSchema: z.ZodType<
    AccountsCountRequest$Outbound,
    z.ZodTypeDef,
    AccountsCountRequest
> = z.object({
    ledger: z.string(),
    address: z.string(),
    pit: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
    query: z.record(z.any()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsCountRequest$ {
    /** @deprecated use `AccountsCountRequest$inboundSchema` instead. */
    export const inboundSchema = AccountsCountRequest$inboundSchema;
    /** @deprecated use `AccountsCountRequest$outboundSchema` instead. */
    export const outboundSchema = AccountsCountRequest$outboundSchema;
    /** @deprecated use `AccountsCountRequest$Outbound` instead. */
    export type Outbound = AccountsCountRequest$Outbound;
}

/** @internal */
export const AccountsCountResponse$inboundSchema: z.ZodType<
    AccountsCountResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Headers: z.record(z.array(z.string())),
    })
    .transform((v) => {
        return remap$(v, {
            Headers: "headers",
        });
    });

/** @internal */
export type AccountsCountResponse$Outbound = {
    Headers: { [k: string]: Array<string> };
};

/** @internal */
export const AccountsCountResponse$outboundSchema: z.ZodType<
    AccountsCountResponse$Outbound,
    z.ZodTypeDef,
    AccountsCountResponse
> = z
    .object({
        headers: z.record(z.array(z.string())),
    })
    .transform((v) => {
        return remap$(v, {
            headers: "Headers",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsCountResponse$ {
    /** @deprecated use `AccountsCountResponse$inboundSchema` instead. */
    export const inboundSchema = AccountsCountResponse$inboundSchema;
    /** @deprecated use `AccountsCountResponse$outboundSchema` instead. */
    export const outboundSchema = AccountsCountResponse$outboundSchema;
    /** @deprecated use `AccountsCountResponse$Outbound` instead. */
    export type Outbound = AccountsCountResponse$Outbound;
}
