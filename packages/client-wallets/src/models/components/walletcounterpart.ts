/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import {
    WalletCounterpartAccount,
    WalletCounterpartAccount$inboundSchema,
    WalletCounterpartAccount$Outbound,
    WalletCounterpartAccount$outboundSchema,
} from "./walletcounterpartaccount.js";
import {
    WalletCounterpartWallet,
    WalletCounterpartWallet$inboundSchema,
    WalletCounterpartWallet$Outbound,
    WalletCounterpartWallet$outboundSchema,
} from "./walletcounterpartwallet.js";
import * as z from "zod";

export type WalletCounterpart =
    | (WalletCounterpartAccount & { type: "ACCOUNT" })
    | (WalletCounterpartWallet & { type: "WALLET" });

/** @internal */
export const WalletCounterpart$inboundSchema: z.ZodType<WalletCounterpart, z.ZodTypeDef, unknown> =
    z.union([
        WalletCounterpartAccount$inboundSchema.and(
            z.object({ type: z.literal("ACCOUNT") }).transform((v) => ({ type: v.type }))
        ),
        WalletCounterpartWallet$inboundSchema.and(
            z.object({ type: z.literal("WALLET") }).transform((v) => ({ type: v.type }))
        ),
    ]);

/** @internal */
export type WalletCounterpart$Outbound =
    | (WalletCounterpartAccount$Outbound & { type: "ACCOUNT" })
    | (WalletCounterpartWallet$Outbound & { type: "WALLET" });

/** @internal */
export const WalletCounterpart$outboundSchema: z.ZodType<
    WalletCounterpart$Outbound,
    z.ZodTypeDef,
    WalletCounterpart
> = z.union([
    WalletCounterpartAccount$outboundSchema.and(
        z.object({ type: z.literal("ACCOUNT") }).transform((v) => ({ type: v.type }))
    ),
    WalletCounterpartWallet$outboundSchema.and(
        z.object({ type: z.literal("WALLET") }).transform((v) => ({ type: v.type }))
    ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletCounterpart$ {
    /** @deprecated use `WalletCounterpart$inboundSchema` instead. */
    export const inboundSchema = WalletCounterpart$inboundSchema;
    /** @deprecated use `WalletCounterpart$outboundSchema` instead. */
    export const outboundSchema = WalletCounterpart$outboundSchema;
    /** @deprecated use `WalletCounterpart$Outbound` instead. */
    export type Outbound = WalletCounterpart$Outbound;
}
