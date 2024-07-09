/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    LedgerPosting,
    LedgerPosting$inboundSchema,
    LedgerPosting$Outbound,
    LedgerPosting$outboundSchema,
} from "./ledgerposting.js";
import * as z from "zod";

export type LedgerCreateTransactionWithPostings = {
    timestamp?: Date | undefined;
    reference?: string | undefined;
    metadata: { [k: string]: string };
    postings: Array<LedgerPosting>;
};

/** @internal */
export const LedgerCreateTransactionWithPostings$inboundSchema: z.ZodType<
    LedgerCreateTransactionWithPostings,
    z.ZodTypeDef,
    unknown
> = z.object({
    timestamp: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
    reference: z.string().optional(),
    metadata: z.record(z.string()),
    postings: z.array(LedgerPosting$inboundSchema),
});

/** @internal */
export type LedgerCreateTransactionWithPostings$Outbound = {
    timestamp?: string | undefined;
    reference?: string | undefined;
    metadata: { [k: string]: string };
    postings: Array<LedgerPosting$Outbound>;
};

/** @internal */
export const LedgerCreateTransactionWithPostings$outboundSchema: z.ZodType<
    LedgerCreateTransactionWithPostings$Outbound,
    z.ZodTypeDef,
    LedgerCreateTransactionWithPostings
> = z.object({
    timestamp: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
    reference: z.string().optional(),
    metadata: z.record(z.string()),
    postings: z.array(LedgerPosting$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LedgerCreateTransactionWithPostings$ {
    /** @deprecated use `LedgerCreateTransactionWithPostings$inboundSchema` instead. */
    export const inboundSchema = LedgerCreateTransactionWithPostings$inboundSchema;
    /** @deprecated use `LedgerCreateTransactionWithPostings$outboundSchema` instead. */
    export const outboundSchema = LedgerCreateTransactionWithPostings$outboundSchema;
    /** @deprecated use `LedgerCreateTransactionWithPostings$Outbound` instead. */
    export type Outbound = LedgerCreateTransactionWithPostings$Outbound;
}
