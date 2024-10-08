/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type AccountsCreateRequestBody = {
    reference: string;
    connectorID: string;
    createdAt: Date;
    type: components.AccountType;
    defaultAsset?: string | undefined;
    accountName?: string | undefined;
    metadata?: { [k: string]: string } | undefined;
};

/**
 * The request has succeeded.
 */
export type AccountsCreateResponseBody = {
    data: components.Account;
};

/** @internal */
export const AccountsCreateRequestBody$inboundSchema: z.ZodType<
    AccountsCreateRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    reference: z.string(),
    connectorID: z.string(),
    createdAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    type: components.AccountType$inboundSchema,
    defaultAsset: z.string().optional(),
    accountName: z.string().optional(),
    metadata: z.record(z.string()).optional(),
});

/** @internal */
export type AccountsCreateRequestBody$Outbound = {
    reference: string;
    connectorID: string;
    createdAt: string;
    type: string;
    defaultAsset?: string | undefined;
    accountName?: string | undefined;
    metadata?: { [k: string]: string } | undefined;
};

/** @internal */
export const AccountsCreateRequestBody$outboundSchema: z.ZodType<
    AccountsCreateRequestBody$Outbound,
    z.ZodTypeDef,
    AccountsCreateRequestBody
> = z.object({
    reference: z.string(),
    connectorID: z.string(),
    createdAt: z.date().transform((v) => v.toISOString()),
    type: components.AccountType$outboundSchema,
    defaultAsset: z.string().optional(),
    accountName: z.string().optional(),
    metadata: z.record(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsCreateRequestBody$ {
    /** @deprecated use `AccountsCreateRequestBody$inboundSchema` instead. */
    export const inboundSchema = AccountsCreateRequestBody$inboundSchema;
    /** @deprecated use `AccountsCreateRequestBody$outboundSchema` instead. */
    export const outboundSchema = AccountsCreateRequestBody$outboundSchema;
    /** @deprecated use `AccountsCreateRequestBody$Outbound` instead. */
    export type Outbound = AccountsCreateRequestBody$Outbound;
}

/** @internal */
export const AccountsCreateResponseBody$inboundSchema: z.ZodType<
    AccountsCreateResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: components.Account$inboundSchema,
});

/** @internal */
export type AccountsCreateResponseBody$Outbound = {
    data: components.Account$Outbound;
};

/** @internal */
export const AccountsCreateResponseBody$outboundSchema: z.ZodType<
    AccountsCreateResponseBody$Outbound,
    z.ZodTypeDef,
    AccountsCreateResponseBody
> = z.object({
    data: components.Account$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsCreateResponseBody$ {
    /** @deprecated use `AccountsCreateResponseBody$inboundSchema` instead. */
    export const inboundSchema = AccountsCreateResponseBody$inboundSchema;
    /** @deprecated use `AccountsCreateResponseBody$outboundSchema` instead. */
    export const outboundSchema = AccountsCreateResponseBody$outboundSchema;
    /** @deprecated use `AccountsCreateResponseBody$Outbound` instead. */
    export type Outbound = AccountsCreateResponseBody$Outbound;
}
