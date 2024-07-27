/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Reconciliation = {
    id: string;
    policyID: string;
    createdAt: Date;
    reconciliedAtLedger: Date;
    reconciliedAtPayments: Date;
    status: string;
    paymentsBalances: { [k: string]: number };
    ledgerBalances: { [k: string]: number };
    driftBalances: { [k: string]: number };
    error?: string | undefined;
};

/** @internal */
export const Reconciliation$inboundSchema: z.ZodType<Reconciliation, z.ZodTypeDef, unknown> =
    z.object({
        id: z.string(),
        policyID: z.string(),
        createdAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        reconciliedAtLedger: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        reconciliedAtPayments: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        status: z.string(),
        paymentsBalances: z.record(z.number().int()),
        ledgerBalances: z.record(z.number().int()),
        driftBalances: z.record(z.number().int()),
        error: z.string().optional(),
    });

/** @internal */
export type Reconciliation$Outbound = {
    id: string;
    policyID: string;
    createdAt: string;
    reconciliedAtLedger: string;
    reconciliedAtPayments: string;
    status: string;
    paymentsBalances: { [k: string]: number };
    ledgerBalances: { [k: string]: number };
    driftBalances: { [k: string]: number };
    error?: string | undefined;
};

/** @internal */
export const Reconciliation$outboundSchema: z.ZodType<
    Reconciliation$Outbound,
    z.ZodTypeDef,
    Reconciliation
> = z.object({
    id: z.string(),
    policyID: z.string(),
    createdAt: z.date().transform((v) => v.toISOString()),
    reconciliedAtLedger: z.date().transform((v) => v.toISOString()),
    reconciliedAtPayments: z.date().transform((v) => v.toISOString()),
    status: z.string(),
    paymentsBalances: z.record(z.number().int()),
    ledgerBalances: z.record(z.number().int()),
    driftBalances: z.record(z.number().int()),
    error: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Reconciliation$ {
    /** @deprecated use `Reconciliation$inboundSchema` instead. */
    export const inboundSchema = Reconciliation$inboundSchema;
    /** @deprecated use `Reconciliation$outboundSchema` instead. */
    export const outboundSchema = Reconciliation$outboundSchema;
    /** @deprecated use `Reconciliation$Outbound` instead. */
    export type Outbound = Reconciliation$Outbound;
}
