/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import {
    PaymentStatus,
    PaymentStatus$inboundSchema,
    PaymentStatus$outboundSchema,
} from "./paymentstatus.js";
import * as z from "zod";

export type TaskBankingCircle = {
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
export const TaskBankingCircle$inboundSchema: z.ZodType<TaskBankingCircle, z.ZodTypeDef, unknown> =
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
export type TaskBankingCircle$Outbound = {
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
export const TaskBankingCircle$outboundSchema: z.ZodType<
    TaskBankingCircle$Outbound,
    z.ZodTypeDef,
    TaskBankingCircle
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
export namespace TaskBankingCircle$ {
    /** @deprecated use `TaskBankingCircle$inboundSchema` instead. */
    export const inboundSchema = TaskBankingCircle$inboundSchema;
    /** @deprecated use `TaskBankingCircle$outboundSchema` instead. */
    export const outboundSchema = TaskBankingCircle$outboundSchema;
    /** @deprecated use `TaskBankingCircle$Outbound` instead. */
    export type Outbound = TaskBankingCircle$Outbound;
}
