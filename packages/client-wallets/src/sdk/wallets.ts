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
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { unwrap as unwrap$ } from "../types/fp.js";
import { createPageIterator, PageIterator, Paginator } from "../types/operations.js";
import * as z from "zod";

export class Wallets extends ClientSDK {
    async list(
        name: string,
        metadata: { [k: string]: string },
        cursor?: string | undefined,
        pageSize?: number | undefined,
        options?: RequestOptions
    ): Promise<PageIterator<operations.WalletsListResponse>> {
        const input$: operations.WalletsListRequest = {
            name: name,
            metadata: metadata,
            cursor: cursor,
            pageSize: pageSize,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.WalletsListRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const path$ = pathToFunc("/api/wallets/wallets")();

        const query$ = encodeFormQuery$({
            cursor: payload$.cursor,
            metadata: payload$.metadata,
            name: payload$.name,
            pageSize: payload$.pageSize,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "wallets_list",
            oAuth2Scopes: ["wallets:read"],
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
            operations.WalletsListResponse,
            errors.WalletsError | SDKError | SDKValidationError
        >(
            m$.json(200, operations.WalletsListResponse$inboundSchema, { key: "Result" }),
            m$.jsonErr("default", errors.WalletsError$inboundSchema)
        )(response, { extraFields: responseFields$ });

        const nextFunc = (responseData: unknown): Paginator<operations.WalletsListResponse> => {
            const nextCursor = dlv(responseData, "cursor.next");

            if (nextCursor == null) {
                return () => null;
            }
            const results = dlv(responseData, "cursor.data");
            if (!Array.isArray(results) || !results.length) {
                return () => null;
            }

            return () => this.list(name, metadata, nextCursor, pageSize, options);
        };

        const page$ = { ...unwrap$(result$), next: nextFunc(raw$) };
        return { ...page$, ...createPageIterator(page$, !result$.ok) };
    }

    async create(
        request: operations.WalletsCreateRequestBody,
        options?: RequestOptions
    ): Promise<void> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.WalletsCreateRequestBody$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = pathToFunc("/api/wallets/wallets")();

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "wallets_create",
            oAuth2Scopes: ["wallets:write"],
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

        const [result$] = await m$.match<void, errors.WalletsError | SDKError | SDKValidationError>(
            m$.nil(201, z.void()),
            m$.jsonErr("default", errors.WalletsError$inboundSchema)
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    async get(
        id: string,
        options?: RequestOptions
    ): Promise<operations.WalletsGetResponseBody | undefined> {
        const input$: operations.WalletsGetRequest = {
            id: id,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.WalletsGetRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = pathToFunc("/api/wallets/wallets/{id}")(pathParams$);

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "wallets_get",
            oAuth2Scopes: ["wallets:read"],
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
            operations.WalletsGetResponseBody | undefined,
            errors.WalletsError | SDKError | SDKValidationError
        >(
            m$.json(200, operations.WalletsGetResponseBody$inboundSchema.optional()),
            m$.nil(404, operations.WalletsGetResponseBody$inboundSchema.optional()),
            m$.jsonErr("default", errors.WalletsError$inboundSchema)
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    async update(
        id: string,
        requestBody: operations.WalletsUpdateRequestBody,
        options?: RequestOptions
    ): Promise<void> {
        const input$: operations.WalletsUpdateRequest = {
            id: id,
            requestBody: requestBody,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.WalletsUpdateRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = pathToFunc("/api/wallets/wallets/{id}")(pathParams$);

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "*/*",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "wallets_update",
            oAuth2Scopes: ["wallets:write"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PATCH",
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

        const [result$] = await m$.match<void, SDKError | SDKValidationError>(
            m$.nil([204, 404], z.void()),
            m$.fail("default")
        )(response);

        return unwrap$(result$);
    }

    async credit(
        id: string,
        creditWalletInput: components.CreditWalletInput,
        options?: RequestOptions
    ): Promise<void> {
        const input$: operations.WalletsCreditRequest = {
            id: id,
            creditWalletInput: creditWalletInput,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.WalletsCreditRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$.CreditWalletInput, { explode: true });

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = pathToFunc("/api/wallets/wallets/{id}/credit")(pathParams$);

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "wallets_credit",
            oAuth2Scopes: ["wallets:write"],
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

        const [result$] = await m$.match<void, errors.WalletsError | SDKError | SDKValidationError>(
            m$.nil(204, z.void()),
            m$.jsonErr("default", errors.WalletsError$inboundSchema)
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    async debit(
        id: string,
        debitWalletInput: components.DebitWalletInput,
        options?: RequestOptions
    ): Promise<operations.WalletsDebitResponseBody | undefined> {
        const input$: operations.WalletsDebitRequest = {
            id: id,
            debitWalletInput: debitWalletInput,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.WalletsDebitRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$.DebitWalletInput, { explode: true });

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = pathToFunc("/api/wallets/wallets/{id}/debit")(pathParams$);

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "wallets_debit",
            oAuth2Scopes: ["wallets:write"],
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
            operations.WalletsDebitResponseBody | undefined,
            errors.WalletsError | SDKError | SDKValidationError
        >(
            m$.json(201, operations.WalletsDebitResponseBody$inboundSchema.optional()),
            m$.nil(204, operations.WalletsDebitResponseBody$inboundSchema.optional()),
            m$.jsonErr("default", errors.WalletsError$inboundSchema)
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    async summary(
        id: string,
        options?: RequestOptions
    ): Promise<operations.WalletsSummaryResponseBody | undefined> {
        const input$: operations.WalletsSummaryRequest = {
            id: id,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.WalletsSummaryRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = pathToFunc("/api/wallets/wallets/{id}/summary")(pathParams$);

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "wallets_summary",
            oAuth2Scopes: ["wallets:read"],
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
            operations.WalletsSummaryResponseBody | undefined,
            errors.WalletsError | SDKError | SDKValidationError
        >(
            m$.json(200, operations.WalletsSummaryResponseBody$inboundSchema.optional()),
            m$.nil(404, operations.WalletsSummaryResponseBody$inboundSchema.optional()),
            m$.jsonErr("default", errors.WalletsError$inboundSchema)
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }
}
