/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AccountsBalancesRequest = {
    accountId: string;
    cursor?: string | undefined;
    pageSize?: number | undefined;
    limit?: number | undefined;
    asset?: string | undefined;
    from?: Date | undefined;
    to?: Date | undefined;
    sort: Array<string>;
};

export type AccountsBalancesCursor = {
    next?: string | undefined;
    data: Array<components.AccountBalance>;
};

/**
 * The request has succeeded.
 */
export type AccountsBalancesResponseBody = {
    cursor: AccountsBalancesCursor;
};

export type AccountsBalancesResponse = {
    result: AccountsBalancesResponseBody;
};

/** @internal */
export const AccountsBalancesRequest$inboundSchema: z.ZodType<
    AccountsBalancesRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    accountId: z.string(),
    cursor: z.string().optional(),
    pageSize: z.number().int().optional(),
    limit: z.number().int().optional(),
    asset: z.string().optional(),
    from: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
    to: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
    sort: z.array(z.string()),
});

/** @internal */
export type AccountsBalancesRequest$Outbound = {
    accountId: string;
    cursor?: string | undefined;
    pageSize?: number | undefined;
    limit?: number | undefined;
    asset?: string | undefined;
    from?: string | undefined;
    to?: string | undefined;
    sort: Array<string>;
};

/** @internal */
export const AccountsBalancesRequest$outboundSchema: z.ZodType<
    AccountsBalancesRequest$Outbound,
    z.ZodTypeDef,
    AccountsBalancesRequest
> = z.object({
    accountId: z.string(),
    cursor: z.string().optional(),
    pageSize: z.number().int().optional(),
    limit: z.number().int().optional(),
    asset: z.string().optional(),
    from: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
    to: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
    sort: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsBalancesRequest$ {
    /** @deprecated use `AccountsBalancesRequest$inboundSchema` instead. */
    export const inboundSchema = AccountsBalancesRequest$inboundSchema;
    /** @deprecated use `AccountsBalancesRequest$outboundSchema` instead. */
    export const outboundSchema = AccountsBalancesRequest$outboundSchema;
    /** @deprecated use `AccountsBalancesRequest$Outbound` instead. */
    export type Outbound = AccountsBalancesRequest$Outbound;
}

/** @internal */
export const AccountsBalancesCursor$inboundSchema: z.ZodType<
    AccountsBalancesCursor,
    z.ZodTypeDef,
    unknown
> = z.object({
    next: z.string().optional(),
    data: z.array(components.AccountBalance$inboundSchema),
});

/** @internal */
export type AccountsBalancesCursor$Outbound = {
    next?: string | undefined;
    data: Array<components.AccountBalance$Outbound>;
};

/** @internal */
export const AccountsBalancesCursor$outboundSchema: z.ZodType<
    AccountsBalancesCursor$Outbound,
    z.ZodTypeDef,
    AccountsBalancesCursor
> = z.object({
    next: z.string().optional(),
    data: z.array(components.AccountBalance$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsBalancesCursor$ {
    /** @deprecated use `AccountsBalancesCursor$inboundSchema` instead. */
    export const inboundSchema = AccountsBalancesCursor$inboundSchema;
    /** @deprecated use `AccountsBalancesCursor$outboundSchema` instead. */
    export const outboundSchema = AccountsBalancesCursor$outboundSchema;
    /** @deprecated use `AccountsBalancesCursor$Outbound` instead. */
    export type Outbound = AccountsBalancesCursor$Outbound;
}

/** @internal */
export const AccountsBalancesResponseBody$inboundSchema: z.ZodType<
    AccountsBalancesResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    cursor: z.lazy(() => AccountsBalancesCursor$inboundSchema),
});

/** @internal */
export type AccountsBalancesResponseBody$Outbound = {
    cursor: AccountsBalancesCursor$Outbound;
};

/** @internal */
export const AccountsBalancesResponseBody$outboundSchema: z.ZodType<
    AccountsBalancesResponseBody$Outbound,
    z.ZodTypeDef,
    AccountsBalancesResponseBody
> = z.object({
    cursor: z.lazy(() => AccountsBalancesCursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsBalancesResponseBody$ {
    /** @deprecated use `AccountsBalancesResponseBody$inboundSchema` instead. */
    export const inboundSchema = AccountsBalancesResponseBody$inboundSchema;
    /** @deprecated use `AccountsBalancesResponseBody$outboundSchema` instead. */
    export const outboundSchema = AccountsBalancesResponseBody$outboundSchema;
    /** @deprecated use `AccountsBalancesResponseBody$Outbound` instead. */
    export type Outbound = AccountsBalancesResponseBody$Outbound;
}

/** @internal */
export const AccountsBalancesResponse$inboundSchema: z.ZodType<
    AccountsBalancesResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => AccountsBalancesResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type AccountsBalancesResponse$Outbound = {
    Result: AccountsBalancesResponseBody$Outbound;
};

/** @internal */
export const AccountsBalancesResponse$outboundSchema: z.ZodType<
    AccountsBalancesResponse$Outbound,
    z.ZodTypeDef,
    AccountsBalancesResponse
> = z
    .object({
        result: z.lazy(() => AccountsBalancesResponseBody$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            result: "Result",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsBalancesResponse$ {
    /** @deprecated use `AccountsBalancesResponse$inboundSchema` instead. */
    export const inboundSchema = AccountsBalancesResponse$inboundSchema;
    /** @deprecated use `AccountsBalancesResponse$outboundSchema` instead. */
    export const outboundSchema = AccountsBalancesResponse$outboundSchema;
    /** @deprecated use `AccountsBalancesResponse$Outbound` instead. */
    export type Outbound = AccountsBalancesResponse$Outbound;
}
