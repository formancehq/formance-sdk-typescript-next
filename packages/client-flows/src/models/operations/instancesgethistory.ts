/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type InstancesGetHistoryRequest = {
    id: string;
};

/**
 * The request has succeeded.
 */
export type InstancesGetHistoryResponseBody = {
    data: Array<components.WorkflowInstanceHistory>;
};

/** @internal */
export namespace InstancesGetHistoryRequest$ {
    export const inboundSchema: z.ZodType<InstancesGetHistoryRequest, z.ZodTypeDef, unknown> =
        z.object({
            id: z.string(),
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InstancesGetHistoryRequest> =
        z.object({
            id: z.string(),
        });
}

/** @internal */
export namespace InstancesGetHistoryResponseBody$ {
    export const inboundSchema: z.ZodType<InstancesGetHistoryResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            data: z.array(components.WorkflowInstanceHistory$.inboundSchema),
        });

    export type Outbound = {
        data: Array<components.WorkflowInstanceHistory$.Outbound>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        InstancesGetHistoryResponseBody
    > = z.object({
        data: z.array(components.WorkflowInstanceHistory$.outboundSchema),
    });
}
