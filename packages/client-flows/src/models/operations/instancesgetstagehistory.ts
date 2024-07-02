/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type InstancesGetStageHistoryRequest = {
    id: string;
    stageIndex: number;
};

/**
 * The request has succeeded.
 */
export type InstancesGetStageHistoryResponseBody = {
    data: components.WorkflowInstanceHistoryStage;
};

/** @internal */
export namespace InstancesGetStageHistoryRequest$ {
    export const inboundSchema: z.ZodType<InstancesGetStageHistoryRequest, z.ZodTypeDef, unknown> =
        z.object({
            id: z.string(),
            stageIndex: z.number().int(),
        });

    export type Outbound = {
        id: string;
        stageIndex: number;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        InstancesGetStageHistoryRequest
    > = z.object({
        id: z.string(),
        stageIndex: z.number().int(),
    });
}

/** @internal */
export namespace InstancesGetStageHistoryResponseBody$ {
    export const inboundSchema: z.ZodType<
        InstancesGetStageHistoryResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.object({
        data: components.WorkflowInstanceHistoryStage$.inboundSchema,
    });

    export type Outbound = {
        data: components.WorkflowInstanceHistoryStage$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        InstancesGetStageHistoryResponseBody
    > = z.object({
        data: components.WorkflowInstanceHistoryStage$.outboundSchema,
    });
}
