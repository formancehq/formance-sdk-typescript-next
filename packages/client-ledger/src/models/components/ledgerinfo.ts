/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Migration, Migration$ } from "./migration.js";
import * as z from "zod";

export type Storage = {
    migrations: Array<Migration>;
};

export type LedgerInfo = {
    name: string;
    storage: Storage;
};

/** @internal */
export namespace Storage$ {
    export const inboundSchema: z.ZodType<Storage, z.ZodTypeDef, unknown> = z.object({
        migrations: z.array(Migration$.inboundSchema),
    });

    export type Outbound = {
        migrations: Array<Migration$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Storage> = z.object({
        migrations: z.array(Migration$.outboundSchema),
    });
}

/** @internal */
export namespace LedgerInfo$ {
    export const inboundSchema: z.ZodType<LedgerInfo, z.ZodTypeDef, unknown> = z.object({
        name: z.string(),
        storage: z.lazy(() => Storage$.inboundSchema),
    });

    export type Outbound = {
        name: string;
        storage: Storage$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LedgerInfo> = z.object({
        name: z.string(),
        storage: z.lazy(() => Storage$.outboundSchema),
    });
}