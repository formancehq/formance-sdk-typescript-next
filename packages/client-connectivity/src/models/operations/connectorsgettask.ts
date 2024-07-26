/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type ConnectorsGetTaskRequest = {
    connector: components.Connector;
    connectorId: string;
    taskId: string;
};

export type ConnectorsGetTaskData =
    | components.TaskStripe
    | components.TaskWise
    | components.TaskCurrencyCloud
    | components.TaskDummyPay
    | components.TaskModulr
    | components.TaskBankingCircle
    | components.TaskMangoPay
    | components.TaskMoneyCorp;

/**
 * The request has succeeded.
 */
export type ConnectorsGetTaskResponseBody = {
    data:
        | components.TaskStripe
        | components.TaskWise
        | components.TaskCurrencyCloud
        | components.TaskDummyPay
        | components.TaskModulr
        | components.TaskBankingCircle
        | components.TaskMangoPay
        | components.TaskMoneyCorp;
};

/** @internal */
export const ConnectorsGetTaskRequest$inboundSchema: z.ZodType<
    ConnectorsGetTaskRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    connector: components.Connector$inboundSchema,
    connectorId: z.string(),
    taskId: z.string(),
});

/** @internal */
export type ConnectorsGetTaskRequest$Outbound = {
    connector: string;
    connectorId: string;
    taskId: string;
};

/** @internal */
export const ConnectorsGetTaskRequest$outboundSchema: z.ZodType<
    ConnectorsGetTaskRequest$Outbound,
    z.ZodTypeDef,
    ConnectorsGetTaskRequest
> = z.object({
    connector: components.Connector$outboundSchema,
    connectorId: z.string(),
    taskId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorsGetTaskRequest$ {
    /** @deprecated use `ConnectorsGetTaskRequest$inboundSchema` instead. */
    export const inboundSchema = ConnectorsGetTaskRequest$inboundSchema;
    /** @deprecated use `ConnectorsGetTaskRequest$outboundSchema` instead. */
    export const outboundSchema = ConnectorsGetTaskRequest$outboundSchema;
    /** @deprecated use `ConnectorsGetTaskRequest$Outbound` instead. */
    export type Outbound = ConnectorsGetTaskRequest$Outbound;
}

/** @internal */
export const ConnectorsGetTaskData$inboundSchema: z.ZodType<
    ConnectorsGetTaskData,
    z.ZodTypeDef,
    unknown
> = z.union([
    components.TaskStripe$inboundSchema,
    components.TaskWise$inboundSchema,
    components.TaskCurrencyCloud$inboundSchema,
    components.TaskDummyPay$inboundSchema,
    components.TaskModulr$inboundSchema,
    components.TaskBankingCircle$inboundSchema,
    components.TaskMangoPay$inboundSchema,
    components.TaskMoneyCorp$inboundSchema,
]);

/** @internal */
export type ConnectorsGetTaskData$Outbound =
    | components.TaskStripe$Outbound
    | components.TaskWise$Outbound
    | components.TaskCurrencyCloud$Outbound
    | components.TaskDummyPay$Outbound
    | components.TaskModulr$Outbound
    | components.TaskBankingCircle$Outbound
    | components.TaskMangoPay$Outbound
    | components.TaskMoneyCorp$Outbound;

/** @internal */
export const ConnectorsGetTaskData$outboundSchema: z.ZodType<
    ConnectorsGetTaskData$Outbound,
    z.ZodTypeDef,
    ConnectorsGetTaskData
> = z.union([
    components.TaskStripe$outboundSchema,
    components.TaskWise$outboundSchema,
    components.TaskCurrencyCloud$outboundSchema,
    components.TaskDummyPay$outboundSchema,
    components.TaskModulr$outboundSchema,
    components.TaskBankingCircle$outboundSchema,
    components.TaskMangoPay$outboundSchema,
    components.TaskMoneyCorp$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorsGetTaskData$ {
    /** @deprecated use `ConnectorsGetTaskData$inboundSchema` instead. */
    export const inboundSchema = ConnectorsGetTaskData$inboundSchema;
    /** @deprecated use `ConnectorsGetTaskData$outboundSchema` instead. */
    export const outboundSchema = ConnectorsGetTaskData$outboundSchema;
    /** @deprecated use `ConnectorsGetTaskData$Outbound` instead. */
    export type Outbound = ConnectorsGetTaskData$Outbound;
}

/** @internal */
export const ConnectorsGetTaskResponseBody$inboundSchema: z.ZodType<
    ConnectorsGetTaskResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: z.union([
        components.TaskStripe$inboundSchema,
        components.TaskWise$inboundSchema,
        components.TaskCurrencyCloud$inboundSchema,
        components.TaskDummyPay$inboundSchema,
        components.TaskModulr$inboundSchema,
        components.TaskBankingCircle$inboundSchema,
        components.TaskMangoPay$inboundSchema,
        components.TaskMoneyCorp$inboundSchema,
    ]),
});

/** @internal */
export type ConnectorsGetTaskResponseBody$Outbound = {
    data:
        | components.TaskStripe$Outbound
        | components.TaskWise$Outbound
        | components.TaskCurrencyCloud$Outbound
        | components.TaskDummyPay$Outbound
        | components.TaskModulr$Outbound
        | components.TaskBankingCircle$Outbound
        | components.TaskMangoPay$Outbound
        | components.TaskMoneyCorp$Outbound;
};

/** @internal */
export const ConnectorsGetTaskResponseBody$outboundSchema: z.ZodType<
    ConnectorsGetTaskResponseBody$Outbound,
    z.ZodTypeDef,
    ConnectorsGetTaskResponseBody
> = z.object({
    data: z.union([
        components.TaskStripe$outboundSchema,
        components.TaskWise$outboundSchema,
        components.TaskCurrencyCloud$outboundSchema,
        components.TaskDummyPay$outboundSchema,
        components.TaskModulr$outboundSchema,
        components.TaskBankingCircle$outboundSchema,
        components.TaskMangoPay$outboundSchema,
        components.TaskMoneyCorp$outboundSchema,
    ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorsGetTaskResponseBody$ {
    /** @deprecated use `ConnectorsGetTaskResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConnectorsGetTaskResponseBody$inboundSchema;
    /** @deprecated use `ConnectorsGetTaskResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConnectorsGetTaskResponseBody$outboundSchema;
    /** @deprecated use `ConnectorsGetTaskResponseBody$Outbound` instead. */
    export type Outbound = ConnectorsGetTaskResponseBody$Outbound;
}
