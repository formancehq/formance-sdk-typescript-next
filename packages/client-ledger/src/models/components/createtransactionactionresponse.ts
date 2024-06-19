/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import { Transaction, Transaction$ } from "./transaction.js";
import * as z from "zod";

export const ResponseType = {
    CreateTransaction: "CREATE_TRANSACTION",
} as const;
export type ResponseType = ClosedEnum<typeof ResponseType>;

export type CreateTransactionActionResponse = {
    responseType: ResponseType;
    data: Transaction;
};

/** @internal */
export namespace ResponseType$ {
    export const inboundSchema: z.ZodNativeEnum<typeof ResponseType> = z.nativeEnum(ResponseType);
    export const outboundSchema: z.ZodNativeEnum<typeof ResponseType> = inboundSchema;
}

/** @internal */
export namespace CreateTransactionActionResponse$ {
    export const inboundSchema: z.ZodType<CreateTransactionActionResponse, z.ZodTypeDef, unknown> =
        z.object({
            responseType: ResponseType$.inboundSchema,
            data: Transaction$.inboundSchema,
        });

    export type Outbound = {
        responseType: string;
        data: Transaction$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateTransactionActionResponse
    > = z.object({
        responseType: ResponseType$.outboundSchema,
        data: Transaction$.outboundSchema,
    });
}