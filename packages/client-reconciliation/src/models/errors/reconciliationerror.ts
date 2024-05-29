/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * An unexpected error response.
 */
export type ReconciliationErrorData = {
    errorCode: string;
    errorMessage: string;
    details?: string | undefined;
};

/**
 * An unexpected error response.
 */
export class ReconciliationError extends Error {
    errorCode: string;
    errorMessage: string;
    details?: string | undefined;

    /** The original data that was passed to this error instance. */
    data$: ReconciliationErrorData;

    constructor(err: ReconciliationErrorData) {
        super("");
        this.data$ = err;

        this.errorCode = err.errorCode;
        this.errorMessage = err.errorMessage;
        if (err.details != null) {
            this.details = err.details;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "ReconciliationError";
    }
}

/** @internal */
export namespace ReconciliationError$ {
    export const inboundSchema: z.ZodType<ReconciliationError, z.ZodTypeDef, unknown> = z
        .object({
            errorCode: z.string(),
            errorMessage: z.string(),
            details: z.string().optional(),
        })
        .transform((v) => {
            return new ReconciliationError({
                errorCode: v.errorCode,
                errorMessage: v.errorMessage,
                ...(v.details === undefined ? null : { details: v.details }),
            });
        });

    export type Outbound = {
        errorCode: string;
        errorMessage: string;
        details?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReconciliationError> = z
        .instanceof(ReconciliationError)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errorCode: z.string(),
                    errorMessage: z.string(),
                    details: z.string().optional(),
                })
                .transform((v) => {
                    return {
                        errorCode: v.errorCode,
                        errorMessage: v.errorMessage,
                        ...(v.details === undefined ? null : { details: v.details }),
                    };
                })
        );
}
