/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import {
    Transaction,
    Transaction$inboundSchema,
    Transaction$Outbound,
    Transaction$outboundSchema,
} from "./transaction.js";
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
export const ResponseType$inboundSchema: z.ZodNativeEnum<typeof ResponseType> =
    z.nativeEnum(ResponseType);

/** @internal */
export const ResponseType$outboundSchema: z.ZodNativeEnum<typeof ResponseType> =
    ResponseType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseType$ {
    /** @deprecated use `ResponseType$inboundSchema` instead. */
    export const inboundSchema = ResponseType$inboundSchema;
    /** @deprecated use `ResponseType$outboundSchema` instead. */
    export const outboundSchema = ResponseType$outboundSchema;
}

/** @internal */
export const CreateTransactionActionResponse$inboundSchema: z.ZodType<
    CreateTransactionActionResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    responseType: ResponseType$inboundSchema,
    data: Transaction$inboundSchema,
});

/** @internal */
export type CreateTransactionActionResponse$Outbound = {
    responseType: string;
    data: Transaction$Outbound;
};

/** @internal */
export const CreateTransactionActionResponse$outboundSchema: z.ZodType<
    CreateTransactionActionResponse$Outbound,
    z.ZodTypeDef,
    CreateTransactionActionResponse
> = z.object({
    responseType: ResponseType$outboundSchema,
    data: Transaction$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTransactionActionResponse$ {
    /** @deprecated use `CreateTransactionActionResponse$inboundSchema` instead. */
    export const inboundSchema = CreateTransactionActionResponse$inboundSchema;
    /** @deprecated use `CreateTransactionActionResponse$outboundSchema` instead. */
    export const outboundSchema = CreateTransactionActionResponse$outboundSchema;
    /** @deprecated use `CreateTransactionActionResponse$Outbound` instead. */
    export type Outbound = CreateTransactionActionResponse$Outbound;
}
