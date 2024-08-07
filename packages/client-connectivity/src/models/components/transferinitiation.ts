/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    TransferInitiationPayment,
    TransferInitiationPayment$inboundSchema,
    TransferInitiationPayment$Outbound,
    TransferInitiationPayment$outboundSchema,
} from "./transferinitiationpayment.js";
import {
    TransferInitiationStatus,
    TransferInitiationStatus$inboundSchema,
    TransferInitiationStatus$outboundSchema,
} from "./transferinitiationstatus.js";
import {
    TransferInitiationType,
    TransferInitiationType$inboundSchema,
    TransferInitiationType$outboundSchema,
} from "./transferinitiationtype.js";
import * as z from "zod";

export type TransferInitiation = {
    id: string;
    reference: string;
    createdAt: Date;
    scheduledAt: Date;
    description: string;
    sourceAccountID: string;
    destinationAccountID: string;
    connectorID: string;
    type: TransferInitiationType;
    amount: number;
    initialAmount: number;
    asset: string;
    status: TransferInitiationStatus;
    error: string;
    metadata?: { [k: string]: string } | undefined;
    relatedPayments?: Array<TransferInitiationPayment> | undefined;
};

/** @internal */
export const TransferInitiation$inboundSchema: z.ZodType<
    TransferInitiation,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
    reference: z.string(),
    createdAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    scheduledAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    description: z.string(),
    sourceAccountID: z.string(),
    destinationAccountID: z.string(),
    connectorID: z.string(),
    type: TransferInitiationType$inboundSchema,
    amount: z.number().int(),
    initialAmount: z.number().int(),
    asset: z.string(),
    status: TransferInitiationStatus$inboundSchema,
    error: z.string(),
    metadata: z.record(z.string()).optional(),
    relatedPayments: z.array(TransferInitiationPayment$inboundSchema).optional(),
});

/** @internal */
export type TransferInitiation$Outbound = {
    id: string;
    reference: string;
    createdAt: string;
    scheduledAt: string;
    description: string;
    sourceAccountID: string;
    destinationAccountID: string;
    connectorID: string;
    type: string;
    amount: number;
    initialAmount: number;
    asset: string;
    status: string;
    error: string;
    metadata?: { [k: string]: string } | undefined;
    relatedPayments?: Array<TransferInitiationPayment$Outbound> | undefined;
};

/** @internal */
export const TransferInitiation$outboundSchema: z.ZodType<
    TransferInitiation$Outbound,
    z.ZodTypeDef,
    TransferInitiation
> = z.object({
    id: z.string(),
    reference: z.string(),
    createdAt: z.date().transform((v) => v.toISOString()),
    scheduledAt: z.date().transform((v) => v.toISOString()),
    description: z.string(),
    sourceAccountID: z.string(),
    destinationAccountID: z.string(),
    connectorID: z.string(),
    type: TransferInitiationType$outboundSchema,
    amount: z.number().int(),
    initialAmount: z.number().int(),
    asset: z.string(),
    status: TransferInitiationStatus$outboundSchema,
    error: z.string(),
    metadata: z.record(z.string()).optional(),
    relatedPayments: z.array(TransferInitiationPayment$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransferInitiation$ {
    /** @deprecated use `TransferInitiation$inboundSchema` instead. */
    export const inboundSchema = TransferInitiation$inboundSchema;
    /** @deprecated use `TransferInitiation$outboundSchema` instead. */
    export const outboundSchema = TransferInitiation$outboundSchema;
    /** @deprecated use `TransferInitiation$Outbound` instead. */
    export type Outbound = TransferInitiation$Outbound;
}
