/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import {
    BalancesWithAssets,
    BalancesWithAssets$inboundSchema,
    BalancesWithAssets$Outbound,
    BalancesWithAssets$outboundSchema,
} from "./balanceswithassets.js";
import * as z from "zod";

export type WalletSummary = {
    balances: BalancesWithAssets;
    availableFunds: { [k: string]: number };
    expiredFunds: { [k: string]: number };
    expirableFunds: { [k: string]: number };
    holdFunds: { [k: string]: number };
};

/** @internal */
export const WalletSummary$inboundSchema: z.ZodType<WalletSummary, z.ZodTypeDef, unknown> =
    z.object({
        balances: BalancesWithAssets$inboundSchema,
        availableFunds: z.record(z.number().int()),
        expiredFunds: z.record(z.number().int()),
        expirableFunds: z.record(z.number().int()),
        holdFunds: z.record(z.number().int()),
    });

/** @internal */
export type WalletSummary$Outbound = {
    balances: BalancesWithAssets$Outbound;
    availableFunds: { [k: string]: number };
    expiredFunds: { [k: string]: number };
    expirableFunds: { [k: string]: number };
    holdFunds: { [k: string]: number };
};

/** @internal */
export const WalletSummary$outboundSchema: z.ZodType<
    WalletSummary$Outbound,
    z.ZodTypeDef,
    WalletSummary
> = z.object({
    balances: BalancesWithAssets$outboundSchema,
    availableFunds: z.record(z.number().int()),
    expiredFunds: z.record(z.number().int()),
    expirableFunds: z.record(z.number().int()),
    holdFunds: z.record(z.number().int()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletSummary$ {
    /** @deprecated use `WalletSummary$inboundSchema` instead. */
    export const inboundSchema = WalletSummary$inboundSchema;
    /** @deprecated use `WalletSummary$outboundSchema` instead. */
    export const outboundSchema = WalletSummary$outboundSchema;
    /** @deprecated use `WalletSummary$Outbound` instead. */
    export type Outbound = WalletSummary$Outbound;
}
