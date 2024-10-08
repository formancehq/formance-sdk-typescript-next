/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

/**
 * The request has succeeded and a new resource has been created as a result.
 */
export type ClientsCreateResponseBody = {
    data: components.Client;
};

/** @internal */
export const ClientsCreateResponseBody$inboundSchema: z.ZodType<
    ClientsCreateResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: components.Client$inboundSchema,
});

/** @internal */
export type ClientsCreateResponseBody$Outbound = {
    data: components.Client$Outbound;
};

/** @internal */
export const ClientsCreateResponseBody$outboundSchema: z.ZodType<
    ClientsCreateResponseBody$Outbound,
    z.ZodTypeDef,
    ClientsCreateResponseBody
> = z.object({
    data: components.Client$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClientsCreateResponseBody$ {
    /** @deprecated use `ClientsCreateResponseBody$inboundSchema` instead. */
    export const inboundSchema = ClientsCreateResponseBody$inboundSchema;
    /** @deprecated use `ClientsCreateResponseBody$outboundSchema` instead. */
    export const outboundSchema = ClientsCreateResponseBody$outboundSchema;
    /** @deprecated use `ClientsCreateResponseBody$Outbound` instead. */
    export type Outbound = ClientsCreateResponseBody$Outbound;
}
