/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    MigrationState,
    MigrationState$inboundSchema,
    MigrationState$outboundSchema,
} from "./migrationstate.js";
import * as z from "zod";

export type Migration = {
    version: number;
    name: string;
    date: Date;
    state: MigrationState;
};

/** @internal */
export const Migration$inboundSchema: z.ZodType<Migration, z.ZodTypeDef, unknown> = z.object({
    version: z.number().int(),
    name: z.string(),
    date: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    state: MigrationState$inboundSchema,
});

/** @internal */
export type Migration$Outbound = {
    version: number;
    name: string;
    date: string;
    state: string;
};

/** @internal */
export const Migration$outboundSchema: z.ZodType<Migration$Outbound, z.ZodTypeDef, Migration> =
    z.object({
        version: z.number().int(),
        name: z.string(),
        date: z.date().transform((v) => v.toISOString()),
        state: MigrationState$outboundSchema,
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Migration$ {
    /** @deprecated use `Migration$inboundSchema` instead. */
    export const inboundSchema = Migration$inboundSchema;
    /** @deprecated use `Migration$outboundSchema` instead. */
    export const outboundSchema = Migration$outboundSchema;
    /** @deprecated use `Migration$Outbound` instead. */
    export type Outbound = Migration$Outbound;
}
