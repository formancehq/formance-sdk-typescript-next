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

export type WalletsCreditWalletInputAmount = {
    asset: string;
    amount: number;
};

export type WalletsCreditWalletInput = {
    amount: WalletsCreditWalletInputAmount;
    metadata: { [k: string]: string };
    source: WalletCounterpart;
    reference?: string | undefined;
    balance?: string | undefined;
    tinestamp?: string | undefined;
};

/** @internal */
export const WalletsCreditWalletInputAmount$inboundSchema: z.ZodType<
    WalletsCreditWalletInputAmount,
    z.ZodTypeDef,
    unknown
> = z.object({
    asset: z.string(),
    amount: z.number().int(),
});

/** @internal */
export type WalletsCreditWalletInputAmount$Outbound = {
    asset: string;
    amount: number;
};

/** @internal */
export const WalletsCreditWalletInputAmount$outboundSchema: z.ZodType<
    WalletsCreditWalletInputAmount$Outbound,
    z.ZodTypeDef,
    WalletsCreditWalletInputAmount
> = z.object({
    asset: z.string(),
    amount: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsCreditWalletInputAmount$ {
    /** @deprecated use `WalletsCreditWalletInputAmount$inboundSchema` instead. */
    export const inboundSchema = WalletsCreditWalletInputAmount$inboundSchema;
    /** @deprecated use `WalletsCreditWalletInputAmount$outboundSchema` instead. */
    export const outboundSchema = WalletsCreditWalletInputAmount$outboundSchema;
    /** @deprecated use `WalletsCreditWalletInputAmount$Outbound` instead. */
    export type Outbound = WalletsCreditWalletInputAmount$Outbound;
}

/** @internal */
export const WalletsCreditWalletInput$inboundSchema: z.ZodType<
    WalletsCreditWalletInput,
    z.ZodTypeDef,
    unknown
> = z.object({
    amount: z.lazy(() => WalletsCreditWalletInputAmount$inboundSchema),
    metadata: z.record(z.string()),
    source: WalletCounterpart$inboundSchema,
    reference: z.string().optional(),
    balance: z.string().optional(),
    tinestamp: z.string().optional(),
});

/** @internal */
export type WalletsCreditWalletInput$Outbound = {
    amount: WalletsCreditWalletInputAmount$Outbound;
    metadata: { [k: string]: string };
    source: WalletCounterpart$Outbound;
    reference?: string | undefined;
    balance?: string | undefined;
    tinestamp?: string | undefined;
};

/** @internal */
export const WalletsCreditWalletInput$outboundSchema: z.ZodType<
    WalletsCreditWalletInput$Outbound,
    z.ZodTypeDef,
    WalletsCreditWalletInput
> = z.object({
    amount: z.lazy(() => WalletsCreditWalletInputAmount$outboundSchema),
    metadata: z.record(z.string()),
    source: WalletCounterpart$outboundSchema,
    reference: z.string().optional(),
    balance: z.string().optional(),
    tinestamp: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsCreditWalletInput$ {
    /** @deprecated use `WalletsCreditWalletInput$inboundSchema` instead. */
    export const inboundSchema = WalletsCreditWalletInput$inboundSchema;
    /** @deprecated use `WalletsCreditWalletInput$outboundSchema` instead. */
    export const outboundSchema = WalletsCreditWalletInput$outboundSchema;
    /** @deprecated use `WalletsCreditWalletInput$Outbound` instead. */
    export type Outbound = WalletsCreditWalletInput$Outbound;
}
