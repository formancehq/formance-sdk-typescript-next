/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { TransferInitiationStatus, TransferInitiationStatus$ } from "./transferinitiationstatus.js";
import * as z from "zod";

export type TransferInitiationPayment = {
    paymentID: string;
    createdAt: Date;
    status: TransferInitiationStatus;
    error: string;
};

/** @internal */
export namespace TransferInitiationPayment$ {
    export const inboundSchema: z.ZodType<TransferInitiationPayment, z.ZodTypeDef, unknown> =
        z.object({
            paymentID: z.string(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            status: TransferInitiationStatus$.inboundSchema,
            error: z.string(),
        });

    export type Outbound = {
        paymentID: string;
        createdAt: string;
        status: string;
        error: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TransferInitiationPayment> =
        z.object({
            paymentID: z.string(),
            createdAt: z.date().transform((v) => v.toISOString()),
            status: TransferInitiationStatus$.outboundSchema,
            error: z.string(),
        });
}
