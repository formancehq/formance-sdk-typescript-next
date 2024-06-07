/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

export const DeleteMetadataTargetAccountTargetType = {
    Account: "ACCOUNT",
} as const;
export type DeleteMetadataTargetAccountTargetType = ClosedEnum<
    typeof DeleteMetadataTargetAccountTargetType
>;

export type DeleteMetadataTargetAccount = {
    targetId: string;
    targetType: DeleteMetadataTargetAccountTargetType;
    key: string;
};

/** @internal */
export namespace DeleteMetadataTargetAccountTargetType$ {
    export const inboundSchema = z.nativeEnum(DeleteMetadataTargetAccountTargetType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace DeleteMetadataTargetAccount$ {
    export const inboundSchema: z.ZodType<DeleteMetadataTargetAccount, z.ZodTypeDef, unknown> =
        z.object({
            targetId: z.string(),
            targetType: DeleteMetadataTargetAccountTargetType$.inboundSchema,
            key: z.string(),
        });

    export type Outbound = {
        targetId: string;
        targetType: string;
        key: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteMetadataTargetAccount> =
        z.object({
            targetId: z.string(),
            targetType: DeleteMetadataTargetAccountTargetType$.outboundSchema,
            key: z.string(),
        });
}
