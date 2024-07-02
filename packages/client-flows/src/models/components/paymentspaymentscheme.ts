/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const PaymentsPaymentScheme = {
    Unknown: "unknown",
    Other: "other",
    Visa: "visa",
    Mastercard: "mastercard",
    Amex: "amex",
    Diners: "diners",
    Discover: "discover",
    Jcb: "jcb",
    Unionpay: "unionpay",
    Alipay: "alipay",
    Cup: "cup",
    SepaDebit: "sepa debit",
    SepaCredit: "sepa credit",
    Sepa: "sepa",
    ApplePay: "apple pay",
    GooglePay: "google pay",
    Doku: "doku",
    Dragonpay: "dragonpay",
    Maestro: "maestro",
    Molpay: "molpay",
    A2a: "a2a",
    AchDebit: "ach debit",
    Ach: "ach",
    Rtp: "rtp",
} as const;
export type PaymentsPaymentScheme = ClosedEnum<typeof PaymentsPaymentScheme>;

/** @internal */
export namespace PaymentsPaymentScheme$ {
    export const inboundSchema: z.ZodNativeEnum<typeof PaymentsPaymentScheme> =
        z.nativeEnum(PaymentsPaymentScheme);
    export const outboundSchema: z.ZodNativeEnum<typeof PaymentsPaymentScheme> = inboundSchema;
}