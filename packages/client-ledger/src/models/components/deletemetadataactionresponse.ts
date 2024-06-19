/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const DeleteMetadataActionResponseResponseType = {
    DeleteMetadata: "DELETE_METADATA",
} as const;
export type DeleteMetadataActionResponseResponseType = ClosedEnum<
    typeof DeleteMetadataActionResponseResponseType
>;

export type DeleteMetadataActionResponse = {
    responseType: DeleteMetadataActionResponseResponseType;
};

/** @internal */
export namespace DeleteMetadataActionResponseResponseType$ {
    export const inboundSchema: z.ZodNativeEnum<typeof DeleteMetadataActionResponseResponseType> =
        z.nativeEnum(DeleteMetadataActionResponseResponseType);
    export const outboundSchema: z.ZodNativeEnum<typeof DeleteMetadataActionResponseResponseType> =
        inboundSchema;
}

/** @internal */
export namespace DeleteMetadataActionResponse$ {
    export const inboundSchema: z.ZodType<DeleteMetadataActionResponse, z.ZodTypeDef, unknown> =
        z.object({
            responseType: DeleteMetadataActionResponseResponseType$.inboundSchema,
        });

    export type Outbound = {
        responseType: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteMetadataActionResponse> =
        z.object({
            responseType: DeleteMetadataActionResponseResponseType$.outboundSchema,
        });
}
