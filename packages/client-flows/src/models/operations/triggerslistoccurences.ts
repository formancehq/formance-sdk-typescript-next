/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type TriggersListOccurencesRequest = {
    id: string;
    cursor?: string | undefined;
    pageSize?: number | undefined;
};

export type TriggersListOccurencesCursor = {
    next?: string | undefined;
    data: Array<components.TriggerOccurence>;
};

/**
 * The request has succeeded.
 */
export type TriggersListOccurencesResponseBody = {
    cursor: TriggersListOccurencesCursor;
};

export type TriggersListOccurencesResponse = {
    result: TriggersListOccurencesResponseBody;
};

/** @internal */
export namespace TriggersListOccurencesRequest$ {
    export const inboundSchema: z.ZodType<TriggersListOccurencesRequest, z.ZodTypeDef, unknown> =
        z.object({
            id: z.string(),
            cursor: z.string().optional(),
            pageSize: z.number().int().optional(),
        });

    export type Outbound = {
        id: string;
        cursor?: string | undefined;
        pageSize?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TriggersListOccurencesRequest> =
        z.object({
            id: z.string(),
            cursor: z.string().optional(),
            pageSize: z.number().int().optional(),
        });
}

/** @internal */
export namespace TriggersListOccurencesCursor$ {
    export const inboundSchema: z.ZodType<TriggersListOccurencesCursor, z.ZodTypeDef, unknown> =
        z.object({
            next: z.string().optional(),
            data: z.array(components.TriggerOccurence$.inboundSchema),
        });

    export type Outbound = {
        next?: string | undefined;
        data: Array<components.TriggerOccurence$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TriggersListOccurencesCursor> =
        z.object({
            next: z.string().optional(),
            data: z.array(components.TriggerOccurence$.outboundSchema),
        });
}

/** @internal */
export namespace TriggersListOccurencesResponseBody$ {
    export const inboundSchema: z.ZodType<
        TriggersListOccurencesResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.object({
        cursor: z.lazy(() => TriggersListOccurencesCursor$.inboundSchema),
    });

    export type Outbound = {
        cursor: TriggersListOccurencesCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TriggersListOccurencesResponseBody
    > = z.object({
        cursor: z.lazy(() => TriggersListOccurencesCursor$.outboundSchema),
    });
}

/** @internal */
export namespace TriggersListOccurencesResponse$ {
    export const inboundSchema: z.ZodType<TriggersListOccurencesResponse, z.ZodTypeDef, unknown> = z
        .object({
            Result: z.lazy(() => TriggersListOccurencesResponseBody$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                Result: "result",
            });
        });

    export type Outbound = {
        Result: TriggersListOccurencesResponseBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TriggersListOccurencesResponse> =
        z
            .object({
                result: z.lazy(() => TriggersListOccurencesResponseBody$.outboundSchema),
            })
            .transform((v) => {
                return remap$(v, {
                    result: "Result",
                });
            });
}
