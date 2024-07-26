/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type StageDelay = {
    until?: Date | undefined;
    duration?: string | undefined;
};

/** @internal */
export const StageDelay$inboundSchema: z.ZodType<StageDelay, z.ZodTypeDef, unknown> = z.object({
    until: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
    duration: z.string().optional(),
});

/** @internal */
export type StageDelay$Outbound = {
    until?: string | undefined;
    duration?: string | undefined;
};

/** @internal */
export const StageDelay$outboundSchema: z.ZodType<StageDelay$Outbound, z.ZodTypeDef, StageDelay> =
    z.object({
        until: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        duration: z.string().optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StageDelay$ {
    /** @deprecated use `StageDelay$inboundSchema` instead. */
    export const inboundSchema = StageDelay$inboundSchema;
    /** @deprecated use `StageDelay$outboundSchema` instead. */
    export const outboundSchema = StageDelay$outboundSchema;
    /** @deprecated use `StageDelay$Outbound` instead. */
    export type Outbound = StageDelay$Outbound;
}
