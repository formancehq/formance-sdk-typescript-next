/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const DeleteMetadataTargetTransactionTargetType = {
    Transaction: "TRANSACTION",
} as const;
export type DeleteMetadataTargetTransactionTargetType = ClosedEnum<
    typeof DeleteMetadataTargetTransactionTargetType
>;

export type DeleteMetadataTargetTransaction = {
    targetId: number;
    targetType: DeleteMetadataTargetTransactionTargetType;
    key: string;
};

/** @internal */
export const DeleteMetadataTargetTransactionTargetType$inboundSchema: z.ZodNativeEnum<
    typeof DeleteMetadataTargetTransactionTargetType
> = z.nativeEnum(DeleteMetadataTargetTransactionTargetType);

/** @internal */
export const DeleteMetadataTargetTransactionTargetType$outboundSchema: z.ZodNativeEnum<
    typeof DeleteMetadataTargetTransactionTargetType
> = DeleteMetadataTargetTransactionTargetType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteMetadataTargetTransactionTargetType$ {
    /** @deprecated use `DeleteMetadataTargetTransactionTargetType$inboundSchema` instead. */
    export const inboundSchema = DeleteMetadataTargetTransactionTargetType$inboundSchema;
    /** @deprecated use `DeleteMetadataTargetTransactionTargetType$outboundSchema` instead. */
    export const outboundSchema = DeleteMetadataTargetTransactionTargetType$outboundSchema;
}

/** @internal */
export const DeleteMetadataTargetTransaction$inboundSchema: z.ZodType<
    DeleteMetadataTargetTransaction,
    z.ZodTypeDef,
    unknown
> = z.object({
    targetId: z.number().int(),
    targetType: DeleteMetadataTargetTransactionTargetType$inboundSchema,
    key: z.string(),
});

/** @internal */
export type DeleteMetadataTargetTransaction$Outbound = {
    targetId: number;
    targetType: string;
    key: string;
};

/** @internal */
export const DeleteMetadataTargetTransaction$outboundSchema: z.ZodType<
    DeleteMetadataTargetTransaction$Outbound,
    z.ZodTypeDef,
    DeleteMetadataTargetTransaction
> = z.object({
    targetId: z.number().int(),
    targetType: DeleteMetadataTargetTransactionTargetType$outboundSchema,
    key: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteMetadataTargetTransaction$ {
    /** @deprecated use `DeleteMetadataTargetTransaction$inboundSchema` instead. */
    export const inboundSchema = DeleteMetadataTargetTransaction$inboundSchema;
    /** @deprecated use `DeleteMetadataTargetTransaction$outboundSchema` instead. */
    export const outboundSchema = DeleteMetadataTargetTransaction$outboundSchema;
    /** @deprecated use `DeleteMetadataTargetTransaction$Outbound` instead. */
    export type Outbound = DeleteMetadataTargetTransaction$Outbound;
}
