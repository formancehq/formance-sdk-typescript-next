/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Wallet = {
    id: string;
    metadata: { [k: string]: string };
    name: string;
    createdAt: Date;
    ledger: string;
};

/** @internal */
export const Wallet$inboundSchema: z.ZodType<Wallet, z.ZodTypeDef, unknown> = z.object({
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
export type Wallet$Outbound = {
    id: string;
    metadata: { [k: string]: string };
    name: string;
    createdAt: string;
    ledger: string;
};

/** @internal */
export const Wallet$outboundSchema: z.ZodType<Wallet$Outbound, z.ZodTypeDef, Wallet> = z.object({
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
export namespace Wallet$ {
    /** @deprecated use `Wallet$inboundSchema` instead. */
    export const inboundSchema = Wallet$inboundSchema;
    /** @deprecated use `Wallet$outboundSchema` instead. */
    export const outboundSchema = Wallet$outboundSchema;
    /** @deprecated use `Wallet$Outbound` instead. */
    export type Outbound = Wallet$Outbound;
}
