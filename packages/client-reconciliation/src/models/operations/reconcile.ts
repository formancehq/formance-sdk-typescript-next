/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ReconcileRequestBody = {
    reconciledAtLedger: Date;
    reconciliedAtPayments: Date;
};

export type ReconcileRequest = {
    policyID: string;
    requestBody: ReconcileRequestBody;
};

/**
 * The request has succeeded.
 */
export type ReconcileResponseBody = {
    data: components.Reconciliation;
};

/** @internal */
export namespace ReconcileRequestBody$ {
    export const inboundSchema: z.ZodType<ReconcileRequestBody, z.ZodTypeDef, unknown> = z.object({
        reconciledAtLedger: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        reconciliedAtPayments: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
    });

    export type Outbound = {
        reconciledAtLedger: string;
        reconciliedAtPayments: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReconcileRequestBody> = z.object(
        {
            reconciledAtLedger: z.date().transform((v) => v.toISOString()),
            reconciliedAtPayments: z.date().transform((v) => v.toISOString()),
        }
    );
}

/** @internal */
export namespace ReconcileRequest$ {
    export const inboundSchema: z.ZodType<ReconcileRequest, z.ZodTypeDef, unknown> = z
        .object({
            policyID: z.string(),
            RequestBody: z.lazy(() => ReconcileRequestBody$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        policyID: string;
        RequestBody: ReconcileRequestBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReconcileRequest> = z
        .object({
            policyID: z.string(),
            requestBody: z.lazy(() => ReconcileRequestBody$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                requestBody: "RequestBody",
            });
        });
}

/** @internal */
export namespace ReconcileResponseBody$ {
    export const inboundSchema: z.ZodType<ReconcileResponseBody, z.ZodTypeDef, unknown> = z.object({
        data: components.Reconciliation$.inboundSchema,
    });

    export type Outbound = {
        data: components.Reconciliation$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReconcileResponseBody> =
        z.object({
            data: components.Reconciliation$.outboundSchema,
        });
}
