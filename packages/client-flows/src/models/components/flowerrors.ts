/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const FlowErrors = {
    Validation: "VALIDATION",
    NotFound: "NOT_FOUND",
    Internal: "INTERNAL",
} as const;
export type FlowErrors = ClosedEnum<typeof FlowErrors>;

/** @internal */
export namespace FlowErrors$ {
    export const inboundSchema: z.ZodNativeEnum<typeof FlowErrors> = z.nativeEnum(FlowErrors);
    export const outboundSchema: z.ZodNativeEnum<typeof FlowErrors> = inboundSchema;
}