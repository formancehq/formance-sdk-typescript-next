/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { WalletCounterpart, WalletCounterpart$ } from "./walletcounterpart.js";
import * as z from "zod";

export type WalletsHold = {
    id: string;
    walletID: string;
    metadata: { [k: string]: string };
    description: string;
    destination: WalletCounterpart;
};

/** @internal */
export namespace WalletsHold$ {
    export const inboundSchema: z.ZodType<WalletsHold, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
        walletID: z.string(),
        metadata: z.record(z.string()),
        description: z.string(),
        destination: WalletCounterpart$.inboundSchema,
    });

    export type Outbound = {
        id: string;
        walletID: string;
        metadata: { [k: string]: string };
        description: string;
        destination: WalletCounterpart$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WalletsHold> = z.object({
        id: z.string(),
        walletID: z.string(),
        metadata: z.record(z.string()),
        description: z.string(),
        destination: WalletCounterpart$.outboundSchema,
    });
}
