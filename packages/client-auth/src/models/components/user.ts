/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type User = {
    id: string;
    subject: string;
    email: string;
};

/** @internal */
export const User$inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown> = z.object({
    id: z.string(),
    subject: z.string(),
    email: z.string(),
});

/** @internal */
export type User$Outbound = {
    id: string;
    subject: string;
    email: string;
};

/** @internal */
export const User$outboundSchema: z.ZodType<User$Outbound, z.ZodTypeDef, User> = z.object({
    id: z.string(),
    subject: z.string(),
    email: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace User$ {
    /** @deprecated use `User$inboundSchema` instead. */
    export const inboundSchema = User$inboundSchema;
    /** @deprecated use `User$outboundSchema` instead. */
    export const outboundSchema = User$outboundSchema;
    /** @deprecated use `User$Outbound` instead. */
    export type Outbound = User$Outbound;
}
