/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type BankAccountsGetRequest = {
    bankAccountId: string;
};

/**
 * The request has succeeded.
 */
export type BankAccountsGetResponseBody = {
    data: components.BankAccount;
};

/** @internal */
export const BankAccountsGetRequest$inboundSchema: z.ZodType<
    BankAccountsGetRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    bankAccountId: z.string(),
});

/** @internal */
export type BankAccountsGetRequest$Outbound = {
    bankAccountId: string;
};

/** @internal */
export const BankAccountsGetRequest$outboundSchema: z.ZodType<
    BankAccountsGetRequest$Outbound,
    z.ZodTypeDef,
    BankAccountsGetRequest
> = z.object({
    bankAccountId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankAccountsGetRequest$ {
    /** @deprecated use `BankAccountsGetRequest$inboundSchema` instead. */
    export const inboundSchema = BankAccountsGetRequest$inboundSchema;
    /** @deprecated use `BankAccountsGetRequest$outboundSchema` instead. */
    export const outboundSchema = BankAccountsGetRequest$outboundSchema;
    /** @deprecated use `BankAccountsGetRequest$Outbound` instead. */
    export type Outbound = BankAccountsGetRequest$Outbound;
}

/** @internal */
export const BankAccountsGetResponseBody$inboundSchema: z.ZodType<
    BankAccountsGetResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: components.BankAccount$inboundSchema,
});

/** @internal */
export type BankAccountsGetResponseBody$Outbound = {
    data: components.BankAccount$Outbound;
};

/** @internal */
export const BankAccountsGetResponseBody$outboundSchema: z.ZodType<
    BankAccountsGetResponseBody$Outbound,
    z.ZodTypeDef,
    BankAccountsGetResponseBody
> = z.object({
    data: components.BankAccount$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankAccountsGetResponseBody$ {
    /** @deprecated use `BankAccountsGetResponseBody$inboundSchema` instead. */
    export const inboundSchema = BankAccountsGetResponseBody$inboundSchema;
    /** @deprecated use `BankAccountsGetResponseBody$outboundSchema` instead. */
    export const outboundSchema = BankAccountsGetResponseBody$outboundSchema;
    /** @deprecated use `BankAccountsGetResponseBody$Outbound` instead. */
    export type Outbound = BankAccountsGetResponseBody$Outbound;
}
