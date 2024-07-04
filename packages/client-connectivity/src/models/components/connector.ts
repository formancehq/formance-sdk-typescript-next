/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const Connector = {
    Stripe: "STRIPE",
    DummyPay: "DUMMY-PAY",
    Wise: "WISE",
    Modulr: "MODULR",
    CurrencyCloud: "CURRENCY-CLOUD",
    BankingCircle: "BANKING-CIRCLE",
    Mangopay: "MANGOPAY",
    Moneycorp: "MONEYCORP",
    Atlar: "ATLAR",
    Adyen: "ADYEN",
    Generic: "GENERIC",
} as const;
export type Connector = ClosedEnum<typeof Connector>;

/** @internal */
export namespace Connector$ {
    export const inboundSchema: z.ZodNativeEnum<typeof Connector> = z.nativeEnum(Connector);
    export const outboundSchema: z.ZodNativeEnum<typeof Connector> = inboundSchema;
}