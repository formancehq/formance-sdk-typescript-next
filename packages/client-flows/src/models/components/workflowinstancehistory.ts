/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    StageDelay,
    StageDelay$inboundSchema,
    StageDelay$Outbound,
    StageDelay$outboundSchema,
} from "./stagedelay.js";
import {
    StageSend,
    StageSend$inboundSchema,
    StageSend$Outbound,
    StageSend$outboundSchema,
} from "./stagesend.js";
import {
    StageWaitEvent,
    StageWaitEvent$inboundSchema,
    StageWaitEvent$Outbound,
    StageWaitEvent$outboundSchema,
} from "./stagewaitevent.js";
import * as z from "zod";

export type Input = StageWaitEvent | StageDelay | StageSend;

export type WorkflowInstanceHistory = {
    name: string;
    input: StageWaitEvent | StageDelay | StageSend;
    error?: string | undefined;
    terminated: boolean;
    startedAt: Date;
    terminatedAt?: Date | undefined;
};

/** @internal */
export const Input$inboundSchema: z.ZodType<Input, z.ZodTypeDef, unknown> = z.union([
    StageWaitEvent$inboundSchema,
    StageDelay$inboundSchema,
    StageSend$inboundSchema,
]);

/** @internal */
export type Input$Outbound = StageWaitEvent$Outbound | StageDelay$Outbound | StageSend$Outbound;

/** @internal */
export const Input$outboundSchema: z.ZodType<Input$Outbound, z.ZodTypeDef, Input> = z.union([
    StageWaitEvent$outboundSchema,
    StageDelay$outboundSchema,
    StageSend$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Input$ {
    /** @deprecated use `Input$inboundSchema` instead. */
    export const inboundSchema = Input$inboundSchema;
    /** @deprecated use `Input$outboundSchema` instead. */
    export const outboundSchema = Input$outboundSchema;
    /** @deprecated use `Input$Outbound` instead. */
    export type Outbound = Input$Outbound;
}

/** @internal */
export const WorkflowInstanceHistory$inboundSchema: z.ZodType<
    WorkflowInstanceHistory,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    input: z.union([
        StageWaitEvent$inboundSchema,
        StageDelay$inboundSchema,
        StageSend$inboundSchema,
    ]),
    error: z.string().optional(),
    terminated: z.boolean(),
    startedAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    terminatedAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
});

/** @internal */
export type WorkflowInstanceHistory$Outbound = {
    name: string;
    input: StageWaitEvent$Outbound | StageDelay$Outbound | StageSend$Outbound;
    error?: string | undefined;
    terminated: boolean;
    startedAt: string;
    terminatedAt?: string | undefined;
};

/** @internal */
export const WorkflowInstanceHistory$outboundSchema: z.ZodType<
    WorkflowInstanceHistory$Outbound,
    z.ZodTypeDef,
    WorkflowInstanceHistory
> = z.object({
    name: z.string(),
    input: z.union([
        StageWaitEvent$outboundSchema,
        StageDelay$outboundSchema,
        StageSend$outboundSchema,
    ]),
    error: z.string().optional(),
    terminated: z.boolean(),
    startedAt: z.date().transform((v) => v.toISOString()),
    terminatedAt: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowInstanceHistory$ {
    /** @deprecated use `WorkflowInstanceHistory$inboundSchema` instead. */
    export const inboundSchema = WorkflowInstanceHistory$inboundSchema;
    /** @deprecated use `WorkflowInstanceHistory$outboundSchema` instead. */
    export const outboundSchema = WorkflowInstanceHistory$outboundSchema;
    /** @deprecated use `WorkflowInstanceHistory$Outbound` instead. */
    export type Outbound = WorkflowInstanceHistory$Outbound;
}
