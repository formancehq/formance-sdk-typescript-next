/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PaymentStatus, PaymentStatus$ } from "./paymentstatus.js";
import * as z from "zod";

export type PaymentAdjustment = {
    reference: string;
    createdAt: Date;
    status: PaymentStatus;
    amount: number;
    raw: { [k: string]: any };
};

/** @internal */
export namespace PaymentAdjustment$ {
    export const inboundSchema: z.ZodType<PaymentAdjustment, z.ZodTypeDef, unknown> = z.object({
        reference: z.string(),
        createdAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        status: PaymentStatus$.inboundSchema,
        amount: z.number().int(),
        raw: z.record(z.any()),
    });

    export type Outbound = {
        reference: string;
        createdAt: string;
        status: string;
        amount: number;
        raw: { [k: string]: any };
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentAdjustment> = z.object({
        reference: z.string(),
        createdAt: z.date().transform((v) => v.toISOString()),
        status: PaymentStatus$.outboundSchema,
        amount: z.number().int(),
        raw: z.record(z.any()),
    });
}