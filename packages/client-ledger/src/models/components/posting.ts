/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Posting = {
    amount: number;
    asset: string;
    destination: string;
    source: string;
};

/** @internal */
export const Posting$inboundSchema: z.ZodType<Posting, z.ZodTypeDef, unknown> = z.object({
    amount: z.number().int(),
    asset: z.string(),
    destination: z.string(),
    source: z.string(),
});

/** @internal */
export type Posting$Outbound = {
    amount: number;
    asset: string;
    destination: string;
    source: string;
};

/** @internal */
export const Posting$outboundSchema: z.ZodType<Posting$Outbound, z.ZodTypeDef, Posting> = z.object({
    amount: z.number().int(),
    asset: z.string(),
    destination: z.string(),
    source: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Posting$ {
    /** @deprecated use `Posting$inboundSchema` instead. */
    export const inboundSchema = Posting$inboundSchema;
    /** @deprecated use `Posting$outboundSchema` instead. */
    export const outboundSchema = Posting$outboundSchema;
    /** @deprecated use `Posting$Outbound` instead. */
    export type Outbound = Posting$Outbound;
}
