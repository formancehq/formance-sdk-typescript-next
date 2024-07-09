/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type TransactionsCreateRequestBody =
    | components.CreateTransactionWithPostings
    | components.CreateTransactionWithNumscript;

export type TransactionsCreateRequest = {
    ledger: string;
    idempotencyKey?: string | undefined;
    dryRun?: boolean | undefined;
    requestBody:
        | components.CreateTransactionWithPostings
        | components.CreateTransactionWithNumscript;
};

/**
 * The request has succeeded.
 */
export type TransactionsCreateResponseBody = {
    data: components.Transaction;
};

/** @internal */
export const TransactionsCreateRequestBody$inboundSchema: z.ZodType<
    TransactionsCreateRequestBody,
    z.ZodTypeDef,
    unknown
> = z.union([
    components.CreateTransactionWithPostings$inboundSchema,
    components.CreateTransactionWithNumscript$inboundSchema,
]);

/** @internal */
export type TransactionsCreateRequestBody$Outbound =
    | components.CreateTransactionWithPostings$Outbound
    | components.CreateTransactionWithNumscript$Outbound;

/** @internal */
export const TransactionsCreateRequestBody$outboundSchema: z.ZodType<
    TransactionsCreateRequestBody$Outbound,
    z.ZodTypeDef,
    TransactionsCreateRequestBody
> = z.union([
    components.CreateTransactionWithPostings$outboundSchema,
    components.CreateTransactionWithNumscript$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionsCreateRequestBody$ {
    /** @deprecated use `TransactionsCreateRequestBody$inboundSchema` instead. */
    export const inboundSchema = TransactionsCreateRequestBody$inboundSchema;
    /** @deprecated use `TransactionsCreateRequestBody$outboundSchema` instead. */
    export const outboundSchema = TransactionsCreateRequestBody$outboundSchema;
    /** @deprecated use `TransactionsCreateRequestBody$Outbound` instead. */
    export type Outbound = TransactionsCreateRequestBody$Outbound;
}

/** @internal */
export const TransactionsCreateRequest$inboundSchema: z.ZodType<
    TransactionsCreateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ledger: z.string(),
        "Idempotency-Key": z.string().optional(),
        dryRun: z.boolean().optional(),
        RequestBody: z.union([
            components.CreateTransactionWithPostings$inboundSchema,
            components.CreateTransactionWithNumscript$inboundSchema,
        ]),
    })
    .transform((v) => {
        return remap$(v, {
            "Idempotency-Key": "idempotencyKey",
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type TransactionsCreateRequest$Outbound = {
    ledger: string;
    "Idempotency-Key"?: string | undefined;
    dryRun?: boolean | undefined;
    RequestBody:
        | components.CreateTransactionWithPostings$Outbound
        | components.CreateTransactionWithNumscript$Outbound;
};

/** @internal */
export const TransactionsCreateRequest$outboundSchema: z.ZodType<
    TransactionsCreateRequest$Outbound,
    z.ZodTypeDef,
    TransactionsCreateRequest
> = z
    .object({
        ledger: z.string(),
        idempotencyKey: z.string().optional(),
        dryRun: z.boolean().optional(),
        requestBody: z.union([
            components.CreateTransactionWithPostings$outboundSchema,
            components.CreateTransactionWithNumscript$outboundSchema,
        ]),
    })
    .transform((v) => {
        return remap$(v, {
            idempotencyKey: "Idempotency-Key",
            requestBody: "RequestBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionsCreateRequest$ {
    /** @deprecated use `TransactionsCreateRequest$inboundSchema` instead. */
    export const inboundSchema = TransactionsCreateRequest$inboundSchema;
    /** @deprecated use `TransactionsCreateRequest$outboundSchema` instead. */
    export const outboundSchema = TransactionsCreateRequest$outboundSchema;
    /** @deprecated use `TransactionsCreateRequest$Outbound` instead. */
    export type Outbound = TransactionsCreateRequest$Outbound;
}

/** @internal */
export const TransactionsCreateResponseBody$inboundSchema: z.ZodType<
    TransactionsCreateResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: components.Transaction$inboundSchema,
});

/** @internal */
export type TransactionsCreateResponseBody$Outbound = {
    data: components.Transaction$Outbound;
};

/** @internal */
export const TransactionsCreateResponseBody$outboundSchema: z.ZodType<
    TransactionsCreateResponseBody$Outbound,
    z.ZodTypeDef,
    TransactionsCreateResponseBody
> = z.object({
    data: components.Transaction$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionsCreateResponseBody$ {
    /** @deprecated use `TransactionsCreateResponseBody$inboundSchema` instead. */
    export const inboundSchema = TransactionsCreateResponseBody$inboundSchema;
    /** @deprecated use `TransactionsCreateResponseBody$outboundSchema` instead. */
    export const outboundSchema = TransactionsCreateResponseBody$outboundSchema;
    /** @deprecated use `TransactionsCreateResponseBody$Outbound` instead. */
    export type Outbound = TransactionsCreateResponseBody$Outbound;
}
