/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const MigrationState = {
    ToDo: "TO DO",
    Done: "DONE",
} as const;
export type MigrationState = ClosedEnum<typeof MigrationState>;

/** @internal */
export const MigrationState$inboundSchema: z.ZodNativeEnum<typeof MigrationState> =
    z.nativeEnum(MigrationState);

/** @internal */
export const MigrationState$outboundSchema: z.ZodNativeEnum<typeof MigrationState> =
    MigrationState$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MigrationState$ {
    /** @deprecated use `MigrationState$inboundSchema` instead. */
    export const inboundSchema = MigrationState$inboundSchema;
    /** @deprecated use `MigrationState$outboundSchema` instead. */
    export const outboundSchema = MigrationState$outboundSchema;
}
