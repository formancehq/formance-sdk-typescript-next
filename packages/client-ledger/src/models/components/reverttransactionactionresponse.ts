/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import { Transaction, Transaction$ } from "./transaction";
import * as z from "zod";

export const RevertTransactionActionResponseResponseType = {
    RevertTransaction: "REVERT_TRANSACTION",
} as const;
export type RevertTransactionActionResponseResponseType = ClosedEnum<
    typeof RevertTransactionActionResponseResponseType
>;

export type RevertTransactionActionResponse = {
    responseType: RevertTransactionActionResponseResponseType;
    data: Transaction;
};

/** @internal */
export namespace RevertTransactionActionResponseResponseType$ {
    export const inboundSchema = z.nativeEnum(RevertTransactionActionResponseResponseType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace RevertTransactionActionResponse$ {
    export const inboundSchema: z.ZodType<RevertTransactionActionResponse, z.ZodTypeDef, unknown> =
        z.object({
            responseType: RevertTransactionActionResponseResponseType$.inboundSchema,
            data: Transaction$.inboundSchema,
        });

    export type Outbound = {
        responseType: string;
        data: Transaction$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        RevertTransactionActionResponse
    > = z.object({
        responseType: RevertTransactionActionResponseResponseType$.outboundSchema,
        data: Transaction$.outboundSchema,
    });
}
