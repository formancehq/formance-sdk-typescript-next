/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Posting, Posting$ } from "./posting";
import * as z from "zod";

export type CreateTransactionWithPostings = {
    timestamp?: Date | undefined;
    reference?: string | undefined;
    metadata?: { [k: string]: any } | undefined;
    postings: Array<Posting>;
};

/** @internal */
export namespace CreateTransactionWithPostings$ {
    export const inboundSchema: z.ZodType<CreateTransactionWithPostings, z.ZodTypeDef, unknown> = z
        .object({
            timestamp: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            reference: z.string().optional(),
            metadata: z.record(z.any()).optional(),
            postings: z.array(Posting$.inboundSchema),
        })
        .transform((v) => {
            return {
                ...(v.timestamp === undefined ? null : { timestamp: v.timestamp }),
                ...(v.reference === undefined ? null : { reference: v.reference }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                postings: v.postings,
            };
        });

    export type Outbound = {
        timestamp?: string | undefined;
        reference?: string | undefined;
        metadata?: { [k: string]: any } | undefined;
        postings: Array<Posting$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateTransactionWithPostings> =
        z
            .object({
                timestamp: z
                    .date()
                    .transform((v) => v.toISOString())
                    .optional(),
                reference: z.string().optional(),
                metadata: z.record(z.any()).optional(),
                postings: z.array(Posting$.outboundSchema),
            })
            .transform((v) => {
                return {
                    ...(v.timestamp === undefined ? null : { timestamp: v.timestamp }),
                    ...(v.reference === undefined ? null : { reference: v.reference }),
                    ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                    postings: v.postings,
                };
            });
}
