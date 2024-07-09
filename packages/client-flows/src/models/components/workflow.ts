/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    WorkflowConfig,
    WorkflowConfig$inboundSchema,
    WorkflowConfig$Outbound,
    WorkflowConfig$outboundSchema,
} from "./workflowconfig.js";
import * as z from "zod";

export type Workflow = {
    config: WorkflowConfig;
    createdAt: Date;
    updatedAt: Date;
    id: string;
};

/** @internal */
export const Workflow$inboundSchema: z.ZodType<Workflow, z.ZodTypeDef, unknown> = z.object({
    config: WorkflowConfig$inboundSchema,
    createdAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    updatedAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    id: z.string(),
});

/** @internal */
export type Workflow$Outbound = {
    config: WorkflowConfig$Outbound;
    createdAt: string;
    updatedAt: string;
    id: string;
};

/** @internal */
export const Workflow$outboundSchema: z.ZodType<Workflow$Outbound, z.ZodTypeDef, Workflow> =
    z.object({
        config: WorkflowConfig$outboundSchema,
        createdAt: z.date().transform((v) => v.toISOString()),
        updatedAt: z.date().transform((v) => v.toISOString()),
        id: z.string(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Workflow$ {
    /** @deprecated use `Workflow$inboundSchema` instead. */
    export const inboundSchema = Workflow$inboundSchema;
    /** @deprecated use `Workflow$outboundSchema` instead. */
    export const outboundSchema = Workflow$outboundSchema;
    /** @deprecated use `Workflow$Outbound` instead. */
    export type Outbound = Workflow$Outbound;
}
