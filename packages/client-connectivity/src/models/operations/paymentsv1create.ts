/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

/**
 * The request has succeeded.
 */
export type PaymentsV1CreateResponseBody = {
    data: components.Payment;
};

/** @internal */
export const PaymentsV1CreateResponseBody$inboundSchema: z.ZodType<
    PaymentsV1CreateResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: components.Payment$inboundSchema,
});

/** @internal */
export type PaymentsV1CreateResponseBody$Outbound = {
    data: components.Payment$Outbound;
};

/** @internal */
export const PaymentsV1CreateResponseBody$outboundSchema: z.ZodType<
    PaymentsV1CreateResponseBody$Outbound,
    z.ZodTypeDef,
    PaymentsV1CreateResponseBody
> = z.object({
    data: components.Payment$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentsV1CreateResponseBody$ {
    /** @deprecated use `PaymentsV1CreateResponseBody$inboundSchema` instead. */
    export const inboundSchema = PaymentsV1CreateResponseBody$inboundSchema;
    /** @deprecated use `PaymentsV1CreateResponseBody$outboundSchema` instead. */
    export const outboundSchema = PaymentsV1CreateResponseBody$outboundSchema;
    /** @deprecated use `PaymentsV1CreateResponseBody$Outbound` instead. */
    export type Outbound = PaymentsV1CreateResponseBody$Outbound;
}
