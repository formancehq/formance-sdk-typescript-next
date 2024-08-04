/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dlv } from "../lib/dlv.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { unwrap as unwrap$ } from "../types/fp.js";
import { createPageIterator, PageIterator, Paginator } from "../types/operations.js";
import * as z from "zod";

export class BankAccounts extends ClientSDK {
    async create(
        request: operations.BankAccountsCreateRequestBody,
        options?: RequestOptions
    ): Promise<operations.BankAccountsCreateResponseBody> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.BankAccountsCreateRequestBody$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = pathToFunc("/api/payments/bank-accounts")();

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "BankAccounts_create",
            oAuth2Scopes: ["payments:write"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["default"],
            retryConfig: options?.retries ||
                this.options$.retryConfig || {
                    strategy: "backoff",
                    backoff: {
                        initialInterval: 500,
                        maxInterval: 60000,
                        exponent: 1.5,
                        maxElapsedTime: 3600000,
                    },
                    retryConnectionErrors: true,
                },
            retryCodes: options?.retryCodes || ["5XX"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await m$.match<
            operations.BankAccountsCreateResponseBody,
            errors.PaymentsError | SDKError | SDKValidationError
        >(
            m$.json(200, operations.BankAccountsCreateResponseBody$inboundSchema),
            m$.jsonErr("default", errors.PaymentsError$inboundSchema)
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    async list(
        cursor?: string | undefined,
        pageSize?: number | undefined,
        sort?: Array<string> | undefined,
        options?: RequestOptions
    ): Promise<PageIterator<operations.BankAccountsListResponse>> {
        const input$: operations.BankAccountsListRequest = {
            cursor: cursor,
            pageSize: pageSize,
            sort: sort,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.BankAccountsListRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const path$ = pathToFunc("/api/payments/bank-accounts")();

        const query$ = encodeFormQuery$({
            cursor: payload$.cursor,
            pageSize: payload$.pageSize,
            sort: payload$.sort,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "BankAccounts_list",
            oAuth2Scopes: ["payments:write"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["default"],
            retryConfig: options?.retries ||
                this.options$.retryConfig || {
                    strategy: "backoff",
                    backoff: {
                        initialInterval: 500,
                        maxInterval: 60000,
                        exponent: 1.5,
                        maxElapsedTime: 3600000,
                    },
                    retryConnectionErrors: true,
                },
            retryCodes: options?.retryCodes || ["5XX"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$, raw$] = await m$.match<
            operations.BankAccountsListResponse,
            errors.PaymentsError | SDKError | SDKValidationError
        >(
            m$.json(200, operations.BankAccountsListResponse$inboundSchema, { key: "Result" }),
            m$.jsonErr("default", errors.PaymentsError$inboundSchema)
        )(response, { extraFields: responseFields$ });

        const nextFunc = (
            responseData: unknown
        ): Paginator<operations.BankAccountsListResponse> => {
            const nextCursor = dlv(responseData, "cursor.next");

            if (nextCursor == null) {
                return () => null;
            }
            const results = dlv(responseData, "cursor.data");
            if (!Array.isArray(results) || !results.length) {
                return () => null;
            }

            return () => this.list(nextCursor, pageSize, sort, options);
        };

        const page$ = { ...unwrap$(result$), next: nextFunc(raw$) };
        return { ...page$, ...createPageIterator(page$, !result$.ok) };
    }

    async get(
        bankAccountId: string,
        options?: RequestOptions
    ): Promise<operations.BankAccountsGetResponseBody> {
        const input$: operations.BankAccountsGetRequest = {
            bankAccountId: bankAccountId,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.BankAccountsGetRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            bankAccountId: encodeSimple$("bankAccountId", payload$.bankAccountId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/api/payments/bank-accounts/{bankAccountId}")(pathParams$);

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "BankAccounts_get",
            oAuth2Scopes: ["payments:write"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["default"],
            retryConfig: options?.retries ||
                this.options$.retryConfig || {
                    strategy: "backoff",
                    backoff: {
                        initialInterval: 500,
                        maxInterval: 60000,
                        exponent: 1.5,
                        maxElapsedTime: 3600000,
                    },
                    retryConnectionErrors: true,
                },
            retryCodes: options?.retryCodes || ["5XX"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await m$.match<
            operations.BankAccountsGetResponseBody,
            errors.PaymentsError | SDKError | SDKValidationError
        >(
            m$.json(200, operations.BankAccountsGetResponseBody$inboundSchema),
            m$.jsonErr("default", errors.PaymentsError$inboundSchema)
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    async forward(
        bankAccountId: string,
        requestBody: operations.BankAccountsForwardRequestBody,
        options?: RequestOptions
    ): Promise<operations.BankAccountsForwardResponseBody> {
        const input$: operations.BankAccountsForwardRequest = {
            bankAccountId: bankAccountId,
            requestBody: requestBody,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.BankAccountsForwardRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            bankAccountId: encodeSimple$("bankAccountId", payload$.bankAccountId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/api/payments/bank-accounts/{bankAccountId}/forward")(
            pathParams$
        );

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "BankAccounts_forward",
            oAuth2Scopes: ["payments:write"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["default"],
            retryConfig: options?.retries ||
                this.options$.retryConfig || {
                    strategy: "backoff",
                    backoff: {
                        initialInterval: 500,
                        maxInterval: 60000,
                        exponent: 1.5,
                        maxElapsedTime: 3600000,
                    },
                    retryConnectionErrors: true,
                },
            retryCodes: options?.retryCodes || ["5XX"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await m$.match<
            operations.BankAccountsForwardResponseBody,
            errors.PaymentsError | SDKError | SDKValidationError
        >(
            m$.json(200, operations.BankAccountsForwardResponseBody$inboundSchema),
            m$.jsonErr("default", errors.PaymentsError$inboundSchema)
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    async updateMetatdata(
        bankAccountId: string,
        requestBody: operations.BankAccountsUpdateMetatdataRequestBody,
        options?: RequestOptions
    ): Promise<void> {
        const input$: operations.BankAccountsUpdateMetatdataRequest = {
            bankAccountId: bankAccountId,
            requestBody: requestBody,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.BankAccountsUpdateMetatdataRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            bankAccountId: encodeSimple$("bankAccountId", payload$.bankAccountId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/api/payments/bank-accounts/{bankAccountId}/metadata")(
            pathParams$
        );

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "BankAccounts_updateMetatdata",
            oAuth2Scopes: ["payments:write"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["default"],
            retryConfig: options?.retries ||
                this.options$.retryConfig || {
                    strategy: "backoff",
                    backoff: {
                        initialInterval: 500,
                        maxInterval: 60000,
                        exponent: 1.5,
                        maxElapsedTime: 3600000,
                    },
                    retryConnectionErrors: true,
                },
            retryCodes: options?.retryCodes || ["5XX"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await m$.match<
            void,
            errors.PaymentsError | SDKError | SDKValidationError
        >(m$.nil(204, z.void()), m$.jsonErr("default", errors.PaymentsError$inboundSchema))(
            response,
            { extraFields: responseFields$ }
        );

        return unwrap$(result$);
    }
}
