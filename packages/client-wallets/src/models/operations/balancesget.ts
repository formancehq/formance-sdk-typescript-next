/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type BalancesGetRequest = {
    walletId: string;
    balanceName: string;
};

/**
 * The request has succeeded.
 */
export type BalancesGetResponseBody = {
    data: components.BalancesWithAssets;
};

/** @internal */
export namespace BalancesGetRequest$ {
    export const inboundSchema: z.ZodType<BalancesGetRequest, z.ZodTypeDef, unknown> = z.object({
        walletId: z.string(),
        balanceName: z.string(),
    });

    export type Outbound = {
        walletId: string;
        balanceName: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BalancesGetRequest> = z.object({
        walletId: z.string(),
        balanceName: z.string(),
    });
}

/** @internal */
export namespace BalancesGetResponseBody$ {
    export const inboundSchema: z.ZodType<BalancesGetResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            data: components.BalancesWithAssets$.inboundSchema,
        });

    export type Outbound = {
        data: components.BalancesWithAssets$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BalancesGetResponseBody> =
        z.object({
            data: components.BalancesWithAssets$.outboundSchema,
        });
}
