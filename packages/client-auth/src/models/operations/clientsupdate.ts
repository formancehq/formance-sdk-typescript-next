/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ClientsUpdateRequest = {
    id: string;
    clientData: components.ClientData;
};

/**
 * The request has succeeded.
 */
export type ClientsUpdateResponseBody = {
    data: components.Client;
};

/** @internal */
export const ClientsUpdateRequest$inboundSchema: z.ZodType<
    ClientsUpdateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        ClientData: components.ClientData$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            ClientData: "clientData",
        });
    });

/** @internal */
export type ClientsUpdateRequest$Outbound = {
    id: string;
    ClientData: components.ClientData$Outbound;
};

/** @internal */
export const ClientsUpdateRequest$outboundSchema: z.ZodType<
    ClientsUpdateRequest$Outbound,
    z.ZodTypeDef,
    ClientsUpdateRequest
> = z
    .object({
        id: z.string(),
        clientData: components.ClientData$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            clientData: "ClientData",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClientsUpdateRequest$ {
    /** @deprecated use `ClientsUpdateRequest$inboundSchema` instead. */
    export const inboundSchema = ClientsUpdateRequest$inboundSchema;
    /** @deprecated use `ClientsUpdateRequest$outboundSchema` instead. */
    export const outboundSchema = ClientsUpdateRequest$outboundSchema;
    /** @deprecated use `ClientsUpdateRequest$Outbound` instead. */
    export type Outbound = ClientsUpdateRequest$Outbound;
}

/** @internal */
export const ClientsUpdateResponseBody$inboundSchema: z.ZodType<
    ClientsUpdateResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: components.Client$inboundSchema,
});

/** @internal */
export type ClientsUpdateResponseBody$Outbound = {
    data: components.Client$Outbound;
};

/** @internal */
export const ClientsUpdateResponseBody$outboundSchema: z.ZodType<
    ClientsUpdateResponseBody$Outbound,
    z.ZodTypeDef,
    ClientsUpdateResponseBody
> = z.object({
    data: components.Client$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClientsUpdateResponseBody$ {
    /** @deprecated use `ClientsUpdateResponseBody$inboundSchema` instead. */
    export const inboundSchema = ClientsUpdateResponseBody$inboundSchema;
    /** @deprecated use `ClientsUpdateResponseBody$outboundSchema` instead. */
    export const outboundSchema = ClientsUpdateResponseBody$outboundSchema;
    /** @deprecated use `ClientsUpdateResponseBody$Outbound` instead. */
    export type Outbound = ClientsUpdateResponseBody$Outbound;
}
