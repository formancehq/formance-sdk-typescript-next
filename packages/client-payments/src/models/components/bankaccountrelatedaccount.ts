/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type BankAccountRelatedAccount = {
    id: string;
    createdAt: Date;
    provider: string;
    connectorID: string;
    accountID: string;
};

/** @internal */
export namespace BankAccountRelatedAccount$ {
    export const inboundSchema: z.ZodType<BankAccountRelatedAccount, z.ZodTypeDef, unknown> =
        z.object({
            id: z.string(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            provider: z.string(),
            connectorID: z.string(),
            accountID: z.string(),
        });

    export type Outbound = {
        id: string;
        createdAt: string;
        provider: string;
        connectorID: string;
        accountID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BankAccountRelatedAccount> =
        z.object({
            id: z.string(),
            createdAt: z.date().transform((v) => v.toISOString()),
            provider: z.string(),
            connectorID: z.string(),
            accountID: z.string(),
        });
}