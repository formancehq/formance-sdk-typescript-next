/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    PaymentScheme,
    PaymentScheme$inboundSchema,
    PaymentScheme$outboundSchema,
} from "./paymentscheme.js";
import {
    PaymentStatus,
    PaymentStatus$inboundSchema,
    PaymentStatus$outboundSchema,
} from "./paymentstatus.js";
import {
    PaymentType,
    PaymentType$inboundSchema,
    PaymentType$outboundSchema,
} from "./paymenttype.js";
import * as z from "zod";

export type CreatePaymentRequest = {
    reference: string;
    connectorID: string;
    amount: number;
    type: PaymentType;
    status: PaymentStatus;
    scheme: PaymentScheme;
    asset: string;
    sourceAccountID?: string | undefined;
    destinationAccountID?: string | undefined;
};

/** @internal */
export const CreatePaymentRequest$inboundSchema: z.ZodType<
    CreatePaymentRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    reference: z.string(),
    connectorID: z.string(),
    amount: z.number().int(),
    type: PaymentType$inboundSchema,
    status: PaymentStatus$inboundSchema,
    scheme: PaymentScheme$inboundSchema,
    asset: z.string(),
    sourceAccountID: z.string().optional(),
    destinationAccountID: z.string().optional(),
});

/** @internal */
export type CreatePaymentRequest$Outbound = {
    reference: string;
    connectorID: string;
    amount: number;
    type: string;
    status: string;
    scheme: string;
    asset: string;
    sourceAccountID?: string | undefined;
    destinationAccountID?: string | undefined;
};

/** @internal */
export const CreatePaymentRequest$outboundSchema: z.ZodType<
    CreatePaymentRequest$Outbound,
    z.ZodTypeDef,
    CreatePaymentRequest
> = z.object({
    reference: z.string(),
    connectorID: z.string(),
    amount: z.number().int(),
    type: PaymentType$outboundSchema,
    status: PaymentStatus$outboundSchema,
    scheme: PaymentScheme$outboundSchema,
    asset: z.string(),
    sourceAccountID: z.string().optional(),
    destinationAccountID: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePaymentRequest$ {
    /** @deprecated use `CreatePaymentRequest$inboundSchema` instead. */
    export const inboundSchema = CreatePaymentRequest$inboundSchema;
    /** @deprecated use `CreatePaymentRequest$outboundSchema` instead. */
    export const outboundSchema = CreatePaymentRequest$outboundSchema;
    /** @deprecated use `CreatePaymentRequest$Outbound` instead. */
    export type Outbound = CreatePaymentRequest$Outbound;
}
