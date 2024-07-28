/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const Type = {
    Account: "ACCOUNT",
} as const;
export type Type = ClosedEnum<typeof Type>;

export type WalletCounterpartAccount = {
    type: Type;
    identifier: string;
};

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(Type);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> = Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
    /** @deprecated use `Type$inboundSchema` instead. */
    export const inboundSchema = Type$inboundSchema;
    /** @deprecated use `Type$outboundSchema` instead. */
    export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const WalletCounterpartAccount$inboundSchema: z.ZodType<
    WalletCounterpartAccount,
    z.ZodTypeDef,
    unknown
> = z.object({
    type: Type$inboundSchema,
    identifier: z.string(),
});

/** @internal */
export type WalletCounterpartAccount$Outbound = {
    type: string;
    identifier: string;
};

/** @internal */
export const WalletCounterpartAccount$outboundSchema: z.ZodType<
    WalletCounterpartAccount$Outbound,
    z.ZodTypeDef,
    WalletCounterpartAccount
> = z.object({
    type: Type$outboundSchema,
    identifier: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletCounterpartAccount$ {
    /** @deprecated use `WalletCounterpartAccount$inboundSchema` instead. */
    export const inboundSchema = WalletCounterpartAccount$inboundSchema;
    /** @deprecated use `WalletCounterpartAccount$outboundSchema` instead. */
    export const outboundSchema = WalletCounterpartAccount$outboundSchema;
    /** @deprecated use `WalletCounterpartAccount$Outbound` instead. */
    export type Outbound = WalletCounterpartAccount$Outbound;
}
