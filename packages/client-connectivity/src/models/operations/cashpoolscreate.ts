/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type CashPoolsCreateRequestBody = {
    name: string;
    accountIDs: Array<string>;
};

/**
 * The request has succeeded.
 */
export type CashPoolsCreateResponseBody = {
    data: components.CashPool;
};

/** @internal */
export const CashPoolsCreateRequestBody$inboundSchema: z.ZodType<
    CashPoolsCreateRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    accountIDs: z.array(z.string()),
});

/** @internal */
export type CashPoolsCreateRequestBody$Outbound = {
    name: string;
    accountIDs: Array<string>;
};

/** @internal */
export const CashPoolsCreateRequestBody$outboundSchema: z.ZodType<
    CashPoolsCreateRequestBody$Outbound,
    z.ZodTypeDef,
    CashPoolsCreateRequestBody
> = z.object({
    name: z.string(),
    accountIDs: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashPoolsCreateRequestBody$ {
    /** @deprecated use `CashPoolsCreateRequestBody$inboundSchema` instead. */
    export const inboundSchema = CashPoolsCreateRequestBody$inboundSchema;
    /** @deprecated use `CashPoolsCreateRequestBody$outboundSchema` instead. */
    export const outboundSchema = CashPoolsCreateRequestBody$outboundSchema;
    /** @deprecated use `CashPoolsCreateRequestBody$Outbound` instead. */
    export type Outbound = CashPoolsCreateRequestBody$Outbound;
}

/** @internal */
export const CashPoolsCreateResponseBody$inboundSchema: z.ZodType<
    CashPoolsCreateResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: components.CashPool$inboundSchema,
});

/** @internal */
export type CashPoolsCreateResponseBody$Outbound = {
    data: components.CashPool$Outbound;
};

/** @internal */
export const CashPoolsCreateResponseBody$outboundSchema: z.ZodType<
    CashPoolsCreateResponseBody$Outbound,
    z.ZodTypeDef,
    CashPoolsCreateResponseBody
> = z.object({
    data: components.CashPool$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashPoolsCreateResponseBody$ {
    /** @deprecated use `CashPoolsCreateResponseBody$inboundSchema` instead. */
    export const inboundSchema = CashPoolsCreateResponseBody$inboundSchema;
    /** @deprecated use `CashPoolsCreateResponseBody$outboundSchema` instead. */
    export const outboundSchema = CashPoolsCreateResponseBody$outboundSchema;
    /** @deprecated use `CashPoolsCreateResponseBody$Outbound` instead. */
    export type Outbound = CashPoolsCreateResponseBody$Outbound;
}
