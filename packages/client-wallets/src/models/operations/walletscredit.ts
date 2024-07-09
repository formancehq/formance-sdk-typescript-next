/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type WalletsCreditRequest = {
    id: string;
    creditWalletInput: components.CreditWalletInput;
};

/** @internal */
export const WalletsCreditRequest$inboundSchema: z.ZodType<
    WalletsCreditRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        CreditWalletInput: components.CreditWalletInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            CreditWalletInput: "creditWalletInput",
        });
    });

/** @internal */
export type WalletsCreditRequest$Outbound = {
    id: string;
    CreditWalletInput: components.CreditWalletInput$Outbound;
};

/** @internal */
export const WalletsCreditRequest$outboundSchema: z.ZodType<
    WalletsCreditRequest$Outbound,
    z.ZodTypeDef,
    WalletsCreditRequest
> = z
    .object({
        id: z.string(),
        creditWalletInput: components.CreditWalletInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            creditWalletInput: "CreditWalletInput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsCreditRequest$ {
    /** @deprecated use `WalletsCreditRequest$inboundSchema` instead. */
    export const inboundSchema = WalletsCreditRequest$inboundSchema;
    /** @deprecated use `WalletsCreditRequest$outboundSchema` instead. */
    export const outboundSchema = WalletsCreditRequest$outboundSchema;
    /** @deprecated use `WalletsCreditRequest$Outbound` instead. */
    export type Outbound = WalletsCreditRequest$Outbound;
}
