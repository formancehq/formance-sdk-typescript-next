/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const PaymentsConnector = {
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
export type PaymentsConnector = ClosedEnum<typeof PaymentsConnector>;

/** @internal */
export namespace PaymentsConnector$ {
    export const inboundSchema: z.ZodNativeEnum<typeof PaymentsConnector> =
        z.nativeEnum(PaymentsConnector);
    export const outboundSchema: z.ZodNativeEnum<typeof PaymentsConnector> = inboundSchema;
}
