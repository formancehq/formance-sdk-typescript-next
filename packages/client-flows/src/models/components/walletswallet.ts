/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type WalletsWallet = {
    id: string;
    metadata: { [k: string]: string };
    name: string;
    createdAt: Date;
    ledger: string;
};

/** @internal */
export const WalletsWallet$inboundSchema: z.ZodType<WalletsWallet, z.ZodTypeDef, unknown> =
    z.object({
        id: z.string(),
        metadata: z.record(z.string()),
        name: z.string(),
        createdAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        ledger: z.string(),
    });

/** @internal */
export type WalletsWallet$Outbound = {
    id: string;
    metadata: { [k: string]: string };
    name: string;
    createdAt: string;
    ledger: string;
};

/** @internal */
export const WalletsWallet$outboundSchema: z.ZodType<
    WalletsWallet$Outbound,
    z.ZodTypeDef,
    WalletsWallet
> = z.object({
    id: z.string(),
    metadata: z.record(z.string()),
    name: z.string(),
    createdAt: z.date().transform((v) => v.toISOString()),
    ledger: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsWallet$ {
    /** @deprecated use `WalletsWallet$inboundSchema` instead. */
    export const inboundSchema = WalletsWallet$inboundSchema;
    /** @deprecated use `WalletsWallet$outboundSchema` instead. */
    export const outboundSchema = WalletsWallet$outboundSchema;
    /** @deprecated use `WalletsWallet$Outbound` instead. */
    export type Outbound = WalletsWallet$Outbound;
}
