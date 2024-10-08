/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

/**
 * The request has succeeded and a new resource has been created as a result.
 */
export type WorkflowsCreateResponseBody = {
    data: components.Workflow;
};

/** @internal */
export const WorkflowsCreateResponseBody$inboundSchema: z.ZodType<
    WorkflowsCreateResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: components.Workflow$inboundSchema,
});

/** @internal */
export type WorkflowsCreateResponseBody$Outbound = {
    data: components.Workflow$Outbound;
};

/** @internal */
export const WorkflowsCreateResponseBody$outboundSchema: z.ZodType<
    WorkflowsCreateResponseBody$Outbound,
    z.ZodTypeDef,
    WorkflowsCreateResponseBody
> = z.object({
    data: components.Workflow$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowsCreateResponseBody$ {
    /** @deprecated use `WorkflowsCreateResponseBody$inboundSchema` instead. */
    export const inboundSchema = WorkflowsCreateResponseBody$inboundSchema;
    /** @deprecated use `WorkflowsCreateResponseBody$outboundSchema` instead. */
    export const outboundSchema = WorkflowsCreateResponseBody$outboundSchema;
    /** @deprecated use `WorkflowsCreateResponseBody$Outbound` instead. */
    export type Outbound = WorkflowsCreateResponseBody$Outbound;
}
