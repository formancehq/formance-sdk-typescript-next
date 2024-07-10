/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type BalancesWithAssets = {
    name: string;
    expiresAt?: Date | undefined;
    priority?: number | undefined;
    assets: { [k: string]: number };
};

/** @internal */
export const BalancesWithAssets$inboundSchema: z.ZodType<
    BalancesWithAssets,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    expiresAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
    priority: z.number().int().optional(),
    assets: z.record(z.number().int()),
});

/** @internal */
export type BalancesWithAssets$Outbound = {
    name: string;
    expiresAt?: string | undefined;
    priority?: number | undefined;
    assets: { [k: string]: number };
};

/** @internal */
export const BalancesWithAssets$outboundSchema: z.ZodType<
    BalancesWithAssets$Outbound,
    z.ZodTypeDef,
    BalancesWithAssets
> = z.object({
    name: z.string(),
    expiresAt: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
    priority: z.number().int().optional(),
    assets: z.record(z.number().int()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BalancesWithAssets$ {
    /** @deprecated use `BalancesWithAssets$inboundSchema` instead. */
    export const inboundSchema = BalancesWithAssets$inboundSchema;
    /** @deprecated use `BalancesWithAssets$outboundSchema` instead. */
    export const outboundSchema = BalancesWithAssets$outboundSchema;
    /** @deprecated use `BalancesWithAssets$Outbound` instead. */
    export type Outbound = BalancesWithAssets$Outbound;
}
