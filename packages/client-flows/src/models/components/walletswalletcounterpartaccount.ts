/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const Type = {
    Account: "ACCOUNT",
} as const;
export type Type = ClosedEnum<typeof Type>;

export type WalletsWalletCounterpartAccount = {
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
export const WalletsWalletCounterpartAccount$inboundSchema: z.ZodType<
    WalletsWalletCounterpartAccount,
    z.ZodTypeDef,
    unknown
> = z.object({
    type: Type$inboundSchema,
    identifier: z.string(),
});

/** @internal */
export type WalletsWalletCounterpartAccount$Outbound = {
    type: string;
    identifier: string;
};

/** @internal */
export const WalletsWalletCounterpartAccount$outboundSchema: z.ZodType<
    WalletsWalletCounterpartAccount$Outbound,
    z.ZodTypeDef,
    WalletsWalletCounterpartAccount
> = z.object({
    type: Type$outboundSchema,
    identifier: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsWalletCounterpartAccount$ {
    /** @deprecated use `WalletsWalletCounterpartAccount$inboundSchema` instead. */
    export const inboundSchema = WalletsWalletCounterpartAccount$inboundSchema;
    /** @deprecated use `WalletsWalletCounterpartAccount$outboundSchema` instead. */
    export const outboundSchema = WalletsWalletCounterpartAccount$outboundSchema;
    /** @deprecated use `WalletsWalletCounterpartAccount$Outbound` instead. */
    export type Outbound = WalletsWalletCounterpartAccount$Outbound;
}
