/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type PaymentsV1UpdateMetatdataRequest = {
    paymentId: string;
    requestBody: { [k: string]: string };
};

/** @internal */
export const PaymentsV1UpdateMetatdataRequest$inboundSchema: z.ZodType<
    PaymentsV1UpdateMetatdataRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        paymentId: z.string(),
        RequestBody: z.record(z.string()),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type PaymentsV1UpdateMetatdataRequest$Outbound = {
    paymentId: string;
    RequestBody: { [k: string]: string };
};

/** @internal */
export const PaymentsV1UpdateMetatdataRequest$outboundSchema: z.ZodType<
    PaymentsV1UpdateMetatdataRequest$Outbound,
    z.ZodTypeDef,
    PaymentsV1UpdateMetatdataRequest
> = z
    .object({
        paymentId: z.string(),
        requestBody: z.record(z.string()),
    })
    .transform((v) => {
        return remap$(v, {
            requestBody: "RequestBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentsV1UpdateMetatdataRequest$ {
    /** @deprecated use `PaymentsV1UpdateMetatdataRequest$inboundSchema` instead. */
    export const inboundSchema = PaymentsV1UpdateMetatdataRequest$inboundSchema;
    /** @deprecated use `PaymentsV1UpdateMetatdataRequest$outboundSchema` instead. */
    export const outboundSchema = PaymentsV1UpdateMetatdataRequest$outboundSchema;
    /** @deprecated use `PaymentsV1UpdateMetatdataRequest$Outbound` instead. */
    export type Outbound = PaymentsV1UpdateMetatdataRequest$Outbound;
}
