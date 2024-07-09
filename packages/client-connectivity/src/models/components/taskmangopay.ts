/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    PaymentStatus,
    PaymentStatus$inboundSchema,
    PaymentStatus$outboundSchema,
} from "./paymentstatus.js";
import * as z from "zod";

export type TaskMangoPay = {
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
export const TaskMangoPay$inboundSchema: z.ZodType<TaskMangoPay, z.ZodTypeDef, unknown> = z.object({
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
    status: PaymentStatus$inboundSchema,
    state: z.record(z.any()),
    error: z.string().optional(),
    descriptor: z.string(),
});

/** @internal */
export type TaskMangoPay$Outbound = {
    id: string;
    connectorID: string;
    createdAt: string;
    updatedAt: string;
    status: string;
    state: { [k: string]: any };
    error?: string | undefined;
    descriptor: string;
};

/** @internal */
export const TaskMangoPay$outboundSchema: z.ZodType<
    TaskMangoPay$Outbound,
    z.ZodTypeDef,
    TaskMangoPay
> = z.object({
    id: z.string(),
    connectorID: z.string(),
    createdAt: z.date().transform((v) => v.toISOString()),
    updatedAt: z.date().transform((v) => v.toISOString()),
    status: PaymentStatus$outboundSchema,
    state: z.record(z.any()),
    error: z.string().optional(),
    descriptor: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskMangoPay$ {
    /** @deprecated use `TaskMangoPay$inboundSchema` instead. */
    export const inboundSchema = TaskMangoPay$inboundSchema;
    /** @deprecated use `TaskMangoPay$outboundSchema` instead. */
    export const outboundSchema = TaskMangoPay$outboundSchema;
    /** @deprecated use `TaskMangoPay$Outbound` instead. */
    export type Outbound = TaskMangoPay$Outbound;
}
