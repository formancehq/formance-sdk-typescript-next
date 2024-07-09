/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const LogEntryType = {
    NewTransaction: "NEW_TRANSACTION",
    SetMetadata: "SET_METADATA",
    RevertTransaction: "REVERT_TRANSACTION",
} as const;
export type LogEntryType = ClosedEnum<typeof LogEntryType>;

/** @internal */
export const LogEntryType$inboundSchema: z.ZodNativeEnum<typeof LogEntryType> =
    z.nativeEnum(LogEntryType);

/** @internal */
export const LogEntryType$outboundSchema: z.ZodNativeEnum<typeof LogEntryType> =
    LogEntryType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LogEntryType$ {
    /** @deprecated use `LogEntryType$inboundSchema` instead. */
    export const inboundSchema = LogEntryType$inboundSchema;
    /** @deprecated use `LogEntryType$outboundSchema` instead. */
    export const outboundSchema = LogEntryType$outboundSchema;
}
