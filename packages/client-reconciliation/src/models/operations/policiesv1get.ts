/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type PoliciesV1GetRequest = {
    policyID: string;
};

/**
 * The request has succeeded.
 */
export type PoliciesV1GetResponseBody = {
    data: components.Policy;
};

/** @internal */
export namespace PoliciesV1GetRequest$ {
    export const inboundSchema: z.ZodType<PoliciesV1GetRequest, z.ZodTypeDef, unknown> = z.object({
        policyID: z.string(),
    });

    export type Outbound = {
        policyID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PoliciesV1GetRequest> = z.object(
        {
            policyID: z.string(),
        }
    );
}

/** @internal */
export namespace PoliciesV1GetResponseBody$ {
    export const inboundSchema: z.ZodType<PoliciesV1GetResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            data: components.Policy$.inboundSchema,
        });

    export type Outbound = {
        data: components.Policy$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PoliciesV1GetResponseBody> =
        z.object({
            data: components.Policy$.outboundSchema,
        });
}
