/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    PaymentsConnector,
    PaymentsConnector$inboundSchema,
    PaymentsConnector$outboundSchema,
} from "./paymentsconnector.js";
import {
    PaymentsPaymentAdjustment,
    PaymentsPaymentAdjustment$inboundSchema,
    PaymentsPaymentAdjustment$Outbound,
    PaymentsPaymentAdjustment$outboundSchema,
} from "./paymentspaymentadjustment.js";
import {
    PaymentsPaymentScheme,
    PaymentsPaymentScheme$inboundSchema,
    PaymentsPaymentScheme$outboundSchema,
} from "./paymentspaymentscheme.js";
import {
    PaymentsPaymentStatus,
    PaymentsPaymentStatus$inboundSchema,
    PaymentsPaymentStatus$outboundSchema,
} from "./paymentspaymentstatus.js";
import {
    PaymentsPaymentType,
    PaymentsPaymentType$inboundSchema,
    PaymentsPaymentType$outboundSchema,
} from "./paymentspaymenttype.js";
import * as z from "zod";

export type PaymentsPayment = {
    reference: string;
    connectorID: string;
    amount: number;
    type: PaymentsPaymentType;
    status: PaymentsPaymentStatus;
    scheme: PaymentsPaymentScheme;
    asset: string;
    id: string;
    sourceAccountID: string;
    destinationAccountID: string;
    provider?: PaymentsConnector | undefined;
    initialAmount: number;
    createdAt: Date;
    raw: { [k: string]: any };
    adjustments: Array<PaymentsPaymentAdjustment>;
    metadata?: { [k: string]: string } | undefined;
};

/** @internal */
export const PaymentsPayment$inboundSchema: z.ZodType<PaymentsPayment, z.ZodTypeDef, unknown> =
    z.object({
        reference: z.string(),
        connectorID: z.string(),
        amount: z.number().int(),
        type: PaymentsPaymentType$inboundSchema,
        status: PaymentsPaymentStatus$inboundSchema,
        scheme: PaymentsPaymentScheme$inboundSchema,
        asset: z.string(),
        id: z.string(),
        sourceAccountID: z.string(),
        destinationAccountID: z.string(),
        provider: PaymentsConnector$inboundSchema.optional(),
        initialAmount: z.number().int(),
        createdAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        raw: z.record(z.any()),
        adjustments: z.array(PaymentsPaymentAdjustment$inboundSchema),
        metadata: z.record(z.string()).optional(),
    });

/** @internal */
export type PaymentsPayment$Outbound = {
    reference: string;
    connectorID: string;
    amount: number;
    type: string;
    status: string;
    scheme: string;
    asset: string;
    id: string;
    sourceAccountID: string;
    destinationAccountID: string;
    provider?: string | undefined;
    initialAmount: number;
    createdAt: string;
    raw: { [k: string]: any };
    adjustments: Array<PaymentsPaymentAdjustment$Outbound>;
    metadata?: { [k: string]: string } | undefined;
};

/** @internal */
export const PaymentsPayment$outboundSchema: z.ZodType<
    PaymentsPayment$Outbound,
    z.ZodTypeDef,
    PaymentsPayment
> = z.object({
    reference: z.string(),
    connectorID: z.string(),
    amount: z.number().int(),
    type: PaymentsPaymentType$outboundSchema,
    status: PaymentsPaymentStatus$outboundSchema,
    scheme: PaymentsPaymentScheme$outboundSchema,
    asset: z.string(),
    id: z.string(),
    sourceAccountID: z.string(),
    destinationAccountID: z.string(),
    provider: PaymentsConnector$outboundSchema.optional(),
    initialAmount: z.number().int(),
    createdAt: z.date().transform((v) => v.toISOString()),
    raw: z.record(z.any()),
    adjustments: z.array(PaymentsPaymentAdjustment$outboundSchema),
    metadata: z.record(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentsPayment$ {
    /** @deprecated use `PaymentsPayment$inboundSchema` instead. */
    export const inboundSchema = PaymentsPayment$inboundSchema;
    /** @deprecated use `PaymentsPayment$outboundSchema` instead. */
    export const outboundSchema = PaymentsPayment$outboundSchema;
    /** @deprecated use `PaymentsPayment$Outbound` instead. */
    export type Outbound = PaymentsPayment$Outbound;
}
