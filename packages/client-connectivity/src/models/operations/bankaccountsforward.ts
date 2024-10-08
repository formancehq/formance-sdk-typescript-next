/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type BankAccountsForwardRequestBody = {
    connectorID: string;
};

export type BankAccountsForwardRequest = {
    bankAccountId: string;
    requestBody: BankAccountsForwardRequestBody;
};

/**
 * The request has succeeded.
 */
export type BankAccountsForwardResponseBody = {
    data: components.BankAccount;
};

/** @internal */
export const BankAccountsForwardRequestBody$inboundSchema: z.ZodType<
    BankAccountsForwardRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    connectorID: z.string(),
});

/** @internal */
export type BankAccountsForwardRequestBody$Outbound = {
    connectorID: string;
};

/** @internal */
export const BankAccountsForwardRequestBody$outboundSchema: z.ZodType<
    BankAccountsForwardRequestBody$Outbound,
    z.ZodTypeDef,
    BankAccountsForwardRequestBody
> = z.object({
    connectorID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankAccountsForwardRequestBody$ {
    /** @deprecated use `BankAccountsForwardRequestBody$inboundSchema` instead. */
    export const inboundSchema = BankAccountsForwardRequestBody$inboundSchema;
    /** @deprecated use `BankAccountsForwardRequestBody$outboundSchema` instead. */
    export const outboundSchema = BankAccountsForwardRequestBody$outboundSchema;
    /** @deprecated use `BankAccountsForwardRequestBody$Outbound` instead. */
    export type Outbound = BankAccountsForwardRequestBody$Outbound;
}

/** @internal */
export const BankAccountsForwardRequest$inboundSchema: z.ZodType<
    BankAccountsForwardRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        bankAccountId: z.string(),
        RequestBody: z.lazy(() => BankAccountsForwardRequestBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type BankAccountsForwardRequest$Outbound = {
    bankAccountId: string;
    RequestBody: BankAccountsForwardRequestBody$Outbound;
};

/** @internal */
export const BankAccountsForwardRequest$outboundSchema: z.ZodType<
    BankAccountsForwardRequest$Outbound,
    z.ZodTypeDef,
    BankAccountsForwardRequest
> = z
    .object({
        bankAccountId: z.string(),
        requestBody: z.lazy(() => BankAccountsForwardRequestBody$outboundSchema),
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
export namespace BankAccountsForwardRequest$ {
    /** @deprecated use `BankAccountsForwardRequest$inboundSchema` instead. */
    export const inboundSchema = BankAccountsForwardRequest$inboundSchema;
    /** @deprecated use `BankAccountsForwardRequest$outboundSchema` instead. */
    export const outboundSchema = BankAccountsForwardRequest$outboundSchema;
    /** @deprecated use `BankAccountsForwardRequest$Outbound` instead. */
    export type Outbound = BankAccountsForwardRequest$Outbound;
}

/** @internal */
export const BankAccountsForwardResponseBody$inboundSchema: z.ZodType<
    BankAccountsForwardResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: components.BankAccount$inboundSchema,
});

/** @internal */
export type BankAccountsForwardResponseBody$Outbound = {
    data: components.BankAccount$Outbound;
};

/** @internal */
export const BankAccountsForwardResponseBody$outboundSchema: z.ZodType<
    BankAccountsForwardResponseBody$Outbound,
    z.ZodTypeDef,
    BankAccountsForwardResponseBody
> = z.object({
    data: components.BankAccount$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankAccountsForwardResponseBody$ {
    /** @deprecated use `BankAccountsForwardResponseBody$inboundSchema` instead. */
    export const inboundSchema = BankAccountsForwardResponseBody$inboundSchema;
    /** @deprecated use `BankAccountsForwardResponseBody$outboundSchema` instead. */
    export const outboundSchema = BankAccountsForwardResponseBody$outboundSchema;
    /** @deprecated use `BankAccountsForwardResponseBody$Outbound` instead. */
    export type Outbound = BankAccountsForwardResponseBody$Outbound;
}
