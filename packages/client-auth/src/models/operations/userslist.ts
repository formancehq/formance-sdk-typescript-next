/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type UsersListRequest = {
    cursor?: string | undefined;
    pageSize?: number | undefined;
};

export type UsersListCursor = {
    next?: string | undefined;
    data: Array<components.User>;
};

/**
 * The request has succeeded.
 */
export type UsersListResponseBody = {
    cursor: UsersListCursor;
};

export type UsersListResponse = {
    result: UsersListResponseBody;
};

/** @internal */
export namespace UsersListRequest$ {
    export const inboundSchema: z.ZodType<UsersListRequest, z.ZodTypeDef, unknown> = z.object({
        cursor: z.string().optional(),
        pageSize: z.number().int().optional(),
    });

    export type Outbound = {
        cursor?: string | undefined;
        pageSize?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UsersListRequest> = z.object({
        cursor: z.string().optional(),
        pageSize: z.number().int().optional(),
    });
}

/** @internal */
export namespace UsersListCursor$ {
    export const inboundSchema: z.ZodType<UsersListCursor, z.ZodTypeDef, unknown> = z.object({
        next: z.string().optional(),
        data: z.array(components.User$.inboundSchema),
    });

    export type Outbound = {
        next?: string | undefined;
        data: Array<components.User$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UsersListCursor> = z.object({
        next: z.string().optional(),
        data: z.array(components.User$.outboundSchema),
    });
}

/** @internal */
export namespace UsersListResponseBody$ {
    export const inboundSchema: z.ZodType<UsersListResponseBody, z.ZodTypeDef, unknown> = z.object({
        cursor: z.lazy(() => UsersListCursor$.inboundSchema),
    });

    export type Outbound = {
        cursor: UsersListCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UsersListResponseBody> =
        z.object({
            cursor: z.lazy(() => UsersListCursor$.outboundSchema),
        });
}

/** @internal */
export namespace UsersListResponse$ {
    export const inboundSchema: z.ZodType<UsersListResponse, z.ZodTypeDef, unknown> = z
        .object({
            Result: z.lazy(() => UsersListResponseBody$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                Result: "result",
            });
        });

    export type Outbound = {
        Result: UsersListResponseBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UsersListResponse> = z
        .object({
            result: z.lazy(() => UsersListResponseBody$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                result: "Result",
            });
        });
}
