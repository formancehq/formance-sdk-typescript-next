/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

/**
 * An unexpected error response.
 */
export type LedgerErrorData = {
    errorCode: components.LedgerErrors;
    errorMessage: string;
    details?: string | undefined;
};

/**
 * An unexpected error response.
 */
export class LedgerError extends Error {
    errorCode: components.LedgerErrors;
    errorMessage: string;
    details?: string | undefined;

    /** The original data that was passed to this error instance. */
    data$: LedgerErrorData;

    constructor(err: LedgerErrorData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.errorCode = err.errorCode;
        this.errorMessage = err.errorMessage;
        if (err.details != null) {
            this.details = err.details;
        }

        this.name = "LedgerError";
    }
}

/** @internal */
export const LedgerError$inboundSchema: z.ZodType<LedgerError, z.ZodTypeDef, unknown> = z
    .object({
        errorCode: components.LedgerErrors$inboundSchema,
        errorMessage: z.string(),
        details: z.string().optional(),
    })
    .transform((v) => {
        return new LedgerError(v);
    });

/** @internal */
export type LedgerError$Outbound = {
    errorCode: string;
    errorMessage: string;
    details?: string | undefined;
};

/** @internal */
export const LedgerError$outboundSchema: z.ZodType<
    LedgerError$Outbound,
    z.ZodTypeDef,
    LedgerError
> = z
    .instanceof(LedgerError)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            errorCode: components.LedgerErrors$outboundSchema,
            errorMessage: z.string(),
            details: z.string().optional(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LedgerError$ {
    /** @deprecated use `LedgerError$inboundSchema` instead. */
    export const inboundSchema = LedgerError$inboundSchema;
    /** @deprecated use `LedgerError$outboundSchema` instead. */
    export const outboundSchema = LedgerError$outboundSchema;
    /** @deprecated use `LedgerError$Outbound` instead. */
    export type Outbound = LedgerError$Outbound;
}
