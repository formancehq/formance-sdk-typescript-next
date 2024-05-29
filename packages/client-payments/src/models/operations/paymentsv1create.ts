/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * The request has succeeded.
 */
export type PaymentsV1CreateResponseBody = {
    data: components.Payment;
};

/** @internal */
export namespace PaymentsV1CreateResponseBody$ {
    export const inboundSchema: z.ZodType<PaymentsV1CreateResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            data: components.Payment$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: components.Payment$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentsV1CreateResponseBody> = z
        .object({
            data: components.Payment$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}
