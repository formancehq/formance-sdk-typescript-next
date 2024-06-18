/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type SecretsCreateRequestBody = {
    name: string;
    metadata?: { [k: string]: string } | undefined;
};

export type SecretsCreateRequest = {
    clientId: string;
    requestBody: SecretsCreateRequestBody;
};

export type Data = {
    lastDigits: string;
    name: string;
    id: string;
    metadata?: { [k: string]: string } | undefined;
    clear: string;
};

/**
 * The request has succeeded.
 */
export type SecretsCreateResponseBody = {
    data: Data;
};

/** @internal */
export namespace SecretsCreateRequestBody$ {
    export const inboundSchema: z.ZodType<SecretsCreateRequestBody, z.ZodTypeDef, unknown> =
        z.object({
            name: z.string(),
            metadata: z.record(z.string()).optional(),
        });

    export type Outbound = {
        name: string;
        metadata?: { [k: string]: string } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SecretsCreateRequestBody> =
        z.object({
            name: z.string(),
            metadata: z.record(z.string()).optional(),
        });
}

/** @internal */
export namespace SecretsCreateRequest$ {
    export const inboundSchema: z.ZodType<SecretsCreateRequest, z.ZodTypeDef, unknown> = z
        .object({
            clientId: z.string(),
            RequestBody: z.lazy(() => SecretsCreateRequestBody$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        clientId: string;
        RequestBody: SecretsCreateRequestBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SecretsCreateRequest> = z
        .object({
            clientId: z.string(),
            requestBody: z.lazy(() => SecretsCreateRequestBody$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                requestBody: "RequestBody",
            });
        });
}

/** @internal */
export namespace Data$ {
    export const inboundSchema: z.ZodType<Data, z.ZodTypeDef, unknown> = z.object({
        lastDigits: z.string(),
        name: z.string(),
        id: z.string(),
        metadata: z.record(z.string()).optional(),
        clear: z.string(),
    });

    export type Outbound = {
        lastDigits: string;
        name: string;
        id: string;
        metadata?: { [k: string]: string } | undefined;
        clear: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Data> = z.object({
        lastDigits: z.string(),
        name: z.string(),
        id: z.string(),
        metadata: z.record(z.string()).optional(),
        clear: z.string(),
    });
}

/** @internal */
export namespace SecretsCreateResponseBody$ {
    export const inboundSchema: z.ZodType<SecretsCreateResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            data: z.lazy(() => Data$.inboundSchema),
        });

    export type Outbound = {
        data: Data$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SecretsCreateResponseBody> =
        z.object({
            data: z.lazy(() => Data$.outboundSchema),
        });
}
