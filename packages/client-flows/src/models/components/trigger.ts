/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Trigger = {
    event: string;
    workflowId: string;
    id: string;
    createdAt: Date;
    filter?: string | undefined;
    name?: string | undefined;
    vars?: { [k: string]: any } | undefined;
};

/** @internal */
export const Trigger$inboundSchema: z.ZodType<Trigger, z.ZodTypeDef, unknown> = z.object({
    event: z.string(),
    workflowId: z.string(),
    id: z.string(),
    createdAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    filter: z.string().optional(),
    name: z.string().optional(),
    vars: z.record(z.any()).optional(),
});

/** @internal */
export type Trigger$Outbound = {
    event: string;
    workflowId: string;
    id: string;
    createdAt: string;
    filter?: string | undefined;
    name?: string | undefined;
    vars?: { [k: string]: any } | undefined;
};

/** @internal */
export const Trigger$outboundSchema: z.ZodType<Trigger$Outbound, z.ZodTypeDef, Trigger> = z.object({
    event: z.string(),
    workflowId: z.string(),
    id: z.string(),
    createdAt: z.date().transform((v) => v.toISOString()),
    filter: z.string().optional(),
    name: z.string().optional(),
    vars: z.record(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Trigger$ {
    /** @deprecated use `Trigger$inboundSchema` instead. */
    export const inboundSchema = Trigger$inboundSchema;
    /** @deprecated use `Trigger$outboundSchema` instead. */
    export const outboundSchema = Trigger$outboundSchema;
    /** @deprecated use `Trigger$Outbound` instead. */
    export type Outbound = Trigger$Outbound;
}
