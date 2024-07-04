/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PaymentScheme, PaymentScheme$ } from "./paymentscheme.js";
import { PaymentStatus, PaymentStatus$ } from "./paymentstatus.js";
import { PaymentType, PaymentType$ } from "./paymenttype.js";
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
export namespace CreatePaymentRequest$ {
    export const inboundSchema: z.ZodType<CreatePaymentRequest, z.ZodTypeDef, unknown> = z.object({
        reference: z.string(),
        connectorID: z.string(),
        amount: z.number().int(),
        type: PaymentType$.inboundSchema,
        status: PaymentStatus$.inboundSchema,
        scheme: PaymentScheme$.inboundSchema,
        asset: z.string(),
        sourceAccountID: z.string().optional(),
        destinationAccountID: z.string().optional(),
    });

    export type Outbound = {
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePaymentRequest> = z.object(
        {
            reference: z.string(),
            connectorID: z.string(),
            amount: z.number().int(),
            type: PaymentType$.outboundSchema,
            status: PaymentStatus$.outboundSchema,
            scheme: PaymentScheme$.outboundSchema,
            asset: z.string(),
            sourceAccountID: z.string().optional(),
            destinationAccountID: z.string().optional(),
        }
    );
}