/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    DeleteMetadataTargetAccount,
    DeleteMetadataTargetAccount$,
} from "./deletemetadatatargetaccount";
import {
    DeleteMetadataTargetTransaction,
    DeleteMetadataTargetTransaction$,
} from "./deletemetadatatargettransaction";
import * as z from "zod";

export type DeleteMetadataTarget =
    | (DeleteMetadataTargetAccount & { targetType: "ACCOUNT" })
    | (DeleteMetadataTargetTransaction & { targetType: "TRANSACTION" });

/** @internal */
export namespace DeleteMetadataTarget$ {
    export const inboundSchema: z.ZodType<DeleteMetadataTarget, z.ZodTypeDef, unknown> = z.union([
        DeleteMetadataTargetAccount$.inboundSchema.and(
            z
                .object({ targetType: z.literal("ACCOUNT") })
                .transform((v) => ({ targetType: v.targetType }))
        ),
        DeleteMetadataTargetTransaction$.inboundSchema.and(
            z
                .object({ targetType: z.literal("TRANSACTION") })
                .transform((v) => ({ targetType: v.targetType }))
        ),
    ]);

    export type Outbound =
        | (DeleteMetadataTargetAccount$.Outbound & { targetType: "ACCOUNT" })
        | (DeleteMetadataTargetTransaction$.Outbound & { targetType: "TRANSACTION" });
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteMetadataTarget> = z.union([
        DeleteMetadataTargetAccount$.outboundSchema.and(
            z
                .object({ targetType: z.literal("ACCOUNT") })
                .transform((v) => ({ targetType: v.targetType }))
        ),
        DeleteMetadataTargetTransaction$.outboundSchema.and(
            z
                .object({ targetType: z.literal("TRANSACTION") })
                .transform((v) => ({ targetType: v.targetType }))
        ),
    ]);
}
