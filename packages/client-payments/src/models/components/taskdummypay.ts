/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PaymentStatus, PaymentStatus$ } from "./paymentstatus.js";
import * as z from "zod";

export type TaskDummyPay = {
    id: string;
    connectorID: string;
    createdAt: Date;
    updatedAt: Date;
    status: PaymentStatus;
    state: { [k: string]: any };
    error?: string | undefined;
    descriptor: string;
};

/** @internal */
export namespace TaskDummyPay$ {
    export const inboundSchema: z.ZodType<TaskDummyPay, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
        connectorID: z.string(),
        createdAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        updatedAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        status: PaymentStatus$.inboundSchema,
        state: z.record(z.any()),
        error: z.string().optional(),
        descriptor: z.string(),
    });

    export type Outbound = {
        id: string;
        connectorID: string;
        createdAt: string;
        updatedAt: string;
        status: string;
        state: { [k: string]: any };
        error?: string | undefined;
        descriptor: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskDummyPay> = z.object({
        id: z.string(),
        connectorID: z.string(),
        createdAt: z.date().transform((v) => v.toISOString()),
        updatedAt: z.date().transform((v) => v.toISOString()),
        status: PaymentStatus$.outboundSchema,
        state: z.record(z.any()),
        error: z.string().optional(),
        descriptor: z.string(),
    });
}
