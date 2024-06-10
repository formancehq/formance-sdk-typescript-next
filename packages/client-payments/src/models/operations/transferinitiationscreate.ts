/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type TransferInitiationsCreateRequestBody = {
    reference: string;
    scheduledAt: Date;
    description: string;
    sourceAccountID: string;
    destinationAccountID: string;
    connectorID?: string | undefined;
    provider?: components.Connector | undefined;
    type: components.TransferInitiationType;
    amount: number;
    asset: string;
    validated: boolean;
    metadata?: { [k: string]: string } | undefined;
};

/**
 * The request has succeeded.
 */
export type TransferInitiationsCreateResponseBody = {
    data: components.TransferInitiation;
};

/** @internal */
export namespace TransferInitiationsCreateRequestBody$ {
    export const inboundSchema: z.ZodType<
        TransferInitiationsCreateRequestBody,
        z.ZodTypeDef,
        unknown
    > = z.object({
        reference: z.string(),
        scheduledAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        description: z.string(),
        sourceAccountID: z.string(),
        destinationAccountID: z.string(),
        connectorID: z.string().optional(),
        provider: components.Connector$.inboundSchema.optional(),
        type: components.TransferInitiationType$.inboundSchema,
        amount: z.number().int(),
        asset: z.string(),
        validated: z.boolean(),
        metadata: z.record(z.string()).optional(),
    });

    export type Outbound = {
        reference: string;
        scheduledAt: string;
        description: string;
        sourceAccountID: string;
        destinationAccountID: string;
        connectorID?: string | undefined;
        provider?: string | undefined;
        type: string;
        amount: number;
        asset: string;
        validated: boolean;
        metadata?: { [k: string]: string } | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TransferInitiationsCreateRequestBody
    > = z.object({
        reference: z.string(),
        scheduledAt: z.date().transform((v) => v.toISOString()),
        description: z.string(),
        sourceAccountID: z.string(),
        destinationAccountID: z.string(),
        connectorID: z.string().optional(),
        provider: components.Connector$.outboundSchema.optional(),
        type: components.TransferInitiationType$.outboundSchema,
        amount: z.number().int(),
        asset: z.string(),
        validated: z.boolean(),
        metadata: z.record(z.string()).optional(),
    });
}

/** @internal */
export namespace TransferInitiationsCreateResponseBody$ {
    export const inboundSchema: z.ZodType<
        TransferInitiationsCreateResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.object({
        data: components.TransferInitiation$.inboundSchema,
    });

    export type Outbound = {
        data: components.TransferInitiation$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TransferInitiationsCreateResponseBody
    > = z.object({
        data: components.TransferInitiation$.outboundSchema,
    });
}
