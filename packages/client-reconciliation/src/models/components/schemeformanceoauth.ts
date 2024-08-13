/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type SchemeFormanceOAuth = {
    clientID: string;
    clientSecret: string;
    tokenURL?: string | undefined;
};

/** @internal */
export const SchemeFormanceOAuth$inboundSchema: z.ZodType<
    SchemeFormanceOAuth,
    z.ZodTypeDef,
    unknown
> = z.object({
    clientID: z.string(),
    clientSecret: z.string(),
    tokenURL: z.string().default("/api/auth/oauth/token"),
});

/** @internal */
export type SchemeFormanceOAuth$Outbound = {
    clientID: string;
    clientSecret: string;
    tokenURL: string;
};

/** @internal */
export const SchemeFormanceOAuth$outboundSchema: z.ZodType<
    SchemeFormanceOAuth$Outbound,
    z.ZodTypeDef,
    SchemeFormanceOAuth
> = z.object({
    clientID: z.string(),
    clientSecret: z.string(),
    tokenURL: z.string().default("/api/auth/oauth/token"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemeFormanceOAuth$ {
    /** @deprecated use `SchemeFormanceOAuth$inboundSchema` instead. */
    export const inboundSchema = SchemeFormanceOAuth$inboundSchema;
    /** @deprecated use `SchemeFormanceOAuth$outboundSchema` instead. */
    export const outboundSchema = SchemeFormanceOAuth$outboundSchema;
    /** @deprecated use `SchemeFormanceOAuth$Outbound` instead. */
    export type Outbound = SchemeFormanceOAuth$Outbound;
}
