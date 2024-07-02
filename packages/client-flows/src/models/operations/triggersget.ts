/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type TriggersGetRequest = {
    id: string;
};

/**
 * The request has succeeded.
 */
export type TriggersGetResponseBody = {
    data: components.Trigger;
};

/** @internal */
export namespace TriggersGetRequest$ {
    export const inboundSchema: z.ZodType<TriggersGetRequest, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
    });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TriggersGetRequest> = z.object({
        id: z.string(),
    });
}

/** @internal */
export namespace TriggersGetResponseBody$ {
    export const inboundSchema: z.ZodType<TriggersGetResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            data: components.Trigger$.inboundSchema,
        });

    export type Outbound = {
        data: components.Trigger$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TriggersGetResponseBody> =
        z.object({
            data: components.Trigger$.outboundSchema,
        });
}
