/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ServerInfo = {
    version: string;
};

/** @internal */
export namespace ServerInfo$ {
    export const inboundSchema: z.ZodType<ServerInfo, z.ZodTypeDef, unknown> = z.object({
        version: z.string(),
    });

    export type Outbound = {
        version: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ServerInfo> = z.object({
        version: z.string(),
    });
}