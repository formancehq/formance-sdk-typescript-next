/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type UsersGetRequest = {
    userid: string;
};

/**
 * The request has succeeded.
 */
export type UsersGetResponseBody = {
    data: components.User;
};

/** @internal */
export const UsersGetRequest$inboundSchema: z.ZodType<UsersGetRequest, z.ZodTypeDef, unknown> =
    z.object({
        userid: z.string(),
    });

/** @internal */
export type UsersGetRequest$Outbound = {
    userid: string;
};

/** @internal */
export const UsersGetRequest$outboundSchema: z.ZodType<
    UsersGetRequest$Outbound,
    z.ZodTypeDef,
    UsersGetRequest
> = z.object({
    userid: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersGetRequest$ {
    /** @deprecated use `UsersGetRequest$inboundSchema` instead. */
    export const inboundSchema = UsersGetRequest$inboundSchema;
    /** @deprecated use `UsersGetRequest$outboundSchema` instead. */
    export const outboundSchema = UsersGetRequest$outboundSchema;
    /** @deprecated use `UsersGetRequest$Outbound` instead. */
    export type Outbound = UsersGetRequest$Outbound;
}

/** @internal */
export const UsersGetResponseBody$inboundSchema: z.ZodType<
    UsersGetResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: components.User$inboundSchema,
});

/** @internal */
export type UsersGetResponseBody$Outbound = {
    data: components.User$Outbound;
};

/** @internal */
export const UsersGetResponseBody$outboundSchema: z.ZodType<
    UsersGetResponseBody$Outbound,
    z.ZodTypeDef,
    UsersGetResponseBody
> = z.object({
    data: components.User$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersGetResponseBody$ {
    /** @deprecated use `UsersGetResponseBody$inboundSchema` instead. */
    export const inboundSchema = UsersGetResponseBody$inboundSchema;
    /** @deprecated use `UsersGetResponseBody$outboundSchema` instead. */
    export const outboundSchema = UsersGetResponseBody$outboundSchema;
    /** @deprecated use `UsersGetResponseBody$Outbound` instead. */
    export type Outbound = UsersGetResponseBody$Outbound;
}
