/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type HoldsCancelRequest = {
    holdId: string;
};

/** @internal */
export namespace HoldsCancelRequest$ {
    export const inboundSchema: z.ZodType<HoldsCancelRequest, z.ZodTypeDef, unknown> = z.object({
        holdId: z.string(),
    });

    export type Outbound = {
        holdId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HoldsCancelRequest> = z.object({
        holdId: z.string(),
    });
}
