/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    PaymentStatus,
    PaymentStatus$inboundSchema,
    PaymentStatus$outboundSchema,
} from "./paymentstatus.js";
import * as z from "zod";

export type TaskMoneyCorp = {
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
export const TaskMoneyCorp$inboundSchema: z.ZodType<TaskMoneyCorp, z.ZodTypeDef, unknown> =
    z.object({
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
export type TaskMoneyCorp$Outbound = {
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
export const TaskMoneyCorp$outboundSchema: z.ZodType<
    TaskMoneyCorp$Outbound,
    z.ZodTypeDef,
    TaskMoneyCorp
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
export namespace TaskMoneyCorp$ {
    /** @deprecated use `TaskMoneyCorp$inboundSchema` instead. */
    export const inboundSchema = TaskMoneyCorp$inboundSchema;
    /** @deprecated use `TaskMoneyCorp$outboundSchema` instead. */
    export const outboundSchema = TaskMoneyCorp$outboundSchema;
    /** @deprecated use `TaskMoneyCorp$Outbound` instead. */
    export type Outbound = TaskMoneyCorp$Outbound;
}
