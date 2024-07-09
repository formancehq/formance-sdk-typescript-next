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
export const FlowErrors$inboundSchema: z.ZodNativeEnum<typeof FlowErrors> =
    z.nativeEnum(FlowErrors);

/** @internal */
export const FlowErrors$outboundSchema: z.ZodNativeEnum<typeof FlowErrors> =
    FlowErrors$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FlowErrors$ {
    /** @deprecated use `FlowErrors$inboundSchema` instead. */
    export const inboundSchema = FlowErrors$inboundSchema;
    /** @deprecated use `FlowErrors$outboundSchema` instead. */
    export const outboundSchema = FlowErrors$outboundSchema;
}
