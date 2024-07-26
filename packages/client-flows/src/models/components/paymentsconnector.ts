/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
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
export const PaymentsConnector$inboundSchema: z.ZodNativeEnum<typeof PaymentsConnector> =
    z.nativeEnum(PaymentsConnector);

/** @internal */
export const PaymentsConnector$outboundSchema: z.ZodNativeEnum<typeof PaymentsConnector> =
    PaymentsConnector$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentsConnector$ {
    /** @deprecated use `PaymentsConnector$inboundSchema` instead. */
    export const inboundSchema = PaymentsConnector$inboundSchema;
    /** @deprecated use `PaymentsConnector$outboundSchema` instead. */
    export const outboundSchema = PaymentsConnector$outboundSchema;
}
