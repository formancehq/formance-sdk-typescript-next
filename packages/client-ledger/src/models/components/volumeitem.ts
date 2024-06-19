/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type VolumeItem = {
    account: string;
    asset: string;
    input: number;
    output: number;
    balance: number;
};

/** @internal */
export namespace VolumeItem$ {
    export const inboundSchema: z.ZodType<VolumeItem, z.ZodTypeDef, unknown> = z.object({
        account: z.string(),
        asset: z.string(),
        input: z.number().int(),
        output: z.number().int(),
        balance: z.number().int(),
    });

    export type Outbound = {
        account: string;
        asset: string;
        input: number;
        output: number;
        balance: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, VolumeItem> = z.object({
        account: z.string(),
        asset: z.string(),
        input: z.number().int(),
        output: z.number().int(),
        balance: z.number().int(),
    });
}