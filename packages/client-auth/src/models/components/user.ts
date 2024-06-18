/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type User = {
    id: string;
    subject: string;
    email: string;
};

/** @internal */
export namespace User$ {
    export const inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
        subject: z.string(),
        email: z.string(),
    });

    export type Outbound = {
        id: string;
        subject: string;
        email: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, User> = z.object({
        id: z.string(),
        subject: z.string(),
        email: z.string(),
    });
}
