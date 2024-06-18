/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
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
export namespace ClientsUpdateRequest$ {
    export const inboundSchema: z.ZodType<ClientsUpdateRequest, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            ClientData: components.ClientData$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                ClientData: "clientData",
            });
        });

    export type Outbound = {
        id: string;
        ClientData: components.ClientData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ClientsUpdateRequest> = z
        .object({
            id: z.string(),
            clientData: components.ClientData$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                clientData: "ClientData",
            });
        });
}

/** @internal */
export namespace ClientsUpdateResponseBody$ {
    export const inboundSchema: z.ZodType<ClientsUpdateResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            data: components.Client$.inboundSchema,
        });

    export type Outbound = {
        data: components.Client$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ClientsUpdateResponseBody> =
        z.object({
            data: components.Client$.outboundSchema,
        });
}
