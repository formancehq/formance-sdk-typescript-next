/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    WalletCounterpart,
    WalletCounterpart$inboundSchema,
    WalletCounterpart$Outbound,
    WalletCounterpart$outboundSchema,
} from "./walletcounterpart.js";
import * as z from "zod";

export type WalletsDebitWalletInputAmount = {
    asset: string;
    amount: number;
};

export type WalletsDebitWalletInput = {
    pending?: boolean | undefined;
    amount: WalletsDebitWalletInputAmount;
    metadata: { [k: string]: string };
    description?: string | undefined;
    destination?: WalletCounterpart | undefined;
    balances?: Array<string> | undefined;
    timestamp?: Date | undefined;
};

/** @internal */
export const WalletsDebitWalletInputAmount$inboundSchema: z.ZodType<
    WalletsDebitWalletInputAmount,
    z.ZodTypeDef,
    unknown
> = z.object({
    asset: z.string(),
    amount: z.number().int(),
});

/** @internal */
export type WalletsDebitWalletInputAmount$Outbound = {
    asset: string;
    amount: number;
};

/** @internal */
export const WalletsDebitWalletInputAmount$outboundSchema: z.ZodType<
    WalletsDebitWalletInputAmount$Outbound,
    z.ZodTypeDef,
    WalletsDebitWalletInputAmount
> = z.object({
    asset: z.string(),
    amount: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsDebitWalletInputAmount$ {
    /** @deprecated use `WalletsDebitWalletInputAmount$inboundSchema` instead. */
    export const inboundSchema = WalletsDebitWalletInputAmount$inboundSchema;
    /** @deprecated use `WalletsDebitWalletInputAmount$outboundSchema` instead. */
    export const outboundSchema = WalletsDebitWalletInputAmount$outboundSchema;
    /** @deprecated use `WalletsDebitWalletInputAmount$Outbound` instead. */
    export type Outbound = WalletsDebitWalletInputAmount$Outbound;
}

/** @internal */
export const WalletsDebitWalletInput$inboundSchema: z.ZodType<
    WalletsDebitWalletInput,
    z.ZodTypeDef,
    unknown
> = z.object({
    pending: z.boolean().optional(),
    amount: z.lazy(() => WalletsDebitWalletInputAmount$inboundSchema),
    metadata: z.record(z.string()),
    description: z.string().optional(),
    destination: WalletCounterpart$inboundSchema.optional(),
    balances: z.array(z.string()).optional(),
    timestamp: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
});

/** @internal */
export type WalletsDebitWalletInput$Outbound = {
    pending?: boolean | undefined;
    amount: WalletsDebitWalletInputAmount$Outbound;
    metadata: { [k: string]: string };
    description?: string | undefined;
    destination?: WalletCounterpart$Outbound | undefined;
    balances?: Array<string> | undefined;
    timestamp?: string | undefined;
};

/** @internal */
export const WalletsDebitWalletInput$outboundSchema: z.ZodType<
    WalletsDebitWalletInput$Outbound,
    z.ZodTypeDef,
    WalletsDebitWalletInput
> = z.object({
    pending: z.boolean().optional(),
    amount: z.lazy(() => WalletsDebitWalletInputAmount$outboundSchema),
    metadata: z.record(z.string()),
    description: z.string().optional(),
    destination: WalletCounterpart$outboundSchema.optional(),
    balances: z.array(z.string()).optional(),
    timestamp: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsDebitWalletInput$ {
    /** @deprecated use `WalletsDebitWalletInput$inboundSchema` instead. */
    export const inboundSchema = WalletsDebitWalletInput$inboundSchema;
    /** @deprecated use `WalletsDebitWalletInput$outboundSchema` instead. */
    export const outboundSchema = WalletsDebitWalletInput$outboundSchema;
    /** @deprecated use `WalletsDebitWalletInput$Outbound` instead. */
    export type Outbound = WalletsDebitWalletInput$Outbound;
}
