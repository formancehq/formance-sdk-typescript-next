/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    WorkflowStatus,
    WorkflowStatus$inboundSchema,
    WorkflowStatus$Outbound,
    WorkflowStatus$outboundSchema,
} from "./workflowstatus.js";
import * as z from "zod";

export type WorkflowInstance = {
    workflowId: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    status?: WorkflowStatus | undefined;
    terminated: boolean;
    terminatedAt?: Date | undefined;
    error?: Date | undefined;
};

/** @internal */
export const WorkflowInstance$inboundSchema: z.ZodType<WorkflowInstance, z.ZodTypeDef, unknown> =
    z.object({
        workflowId: z.string(),
        id: z.string(),
        createdAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        updatedAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        status: WorkflowStatus$inboundSchema.optional(),
        terminated: z.boolean(),
        terminatedAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        error: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
    });

/** @internal */
export type WorkflowInstance$Outbound = {
    workflowId: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    status?: WorkflowStatus$Outbound | undefined;
    terminated: boolean;
    terminatedAt?: string | undefined;
    error?: string | undefined;
};

/** @internal */
export const WorkflowInstance$outboundSchema: z.ZodType<
    WorkflowInstance$Outbound,
    z.ZodTypeDef,
    WorkflowInstance
> = z.object({
    workflowId: z.string(),
    id: z.string(),
    createdAt: z.date().transform((v) => v.toISOString()),
    updatedAt: z.date().transform((v) => v.toISOString()),
    status: WorkflowStatus$outboundSchema.optional(),
    terminated: z.boolean(),
    terminatedAt: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
    error: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowInstance$ {
    /** @deprecated use `WorkflowInstance$inboundSchema` instead. */
    export const inboundSchema = WorkflowInstance$inboundSchema;
    /** @deprecated use `WorkflowInstance$outboundSchema` instead. */
    export const outboundSchema = WorkflowInstance$outboundSchema;
    /** @deprecated use `WorkflowInstance$Outbound` instead. */
    export type Outbound = WorkflowInstance$Outbound;
}
