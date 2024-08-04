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

export class Accounts extends ClientSDK {
    async list(
        request: operations.AccountsListRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.AccountsListResponse>> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.AccountsListRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/api/ledger/v2/{ledger}/accounts")(pathParams$);

        const query$ = encodeFormQuery$({
            cursor: payload$.cursor,
            expand: payload$.expand,
            pageSize: payload$.pageSize,
            pit: payload$.pit,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "Accounts_list",
            oAuth2Scopes: ["ledger:read"],
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
            operations.AccountsListResponse,
            errors.LedgerError | SDKError | SDKValidationError
        >(
            m$.json(200, operations.AccountsListResponse$inboundSchema, { key: "Result" }),
            m$.jsonErr("default", errors.LedgerError$inboundSchema)
        )(response, { extraFields: responseFields$ });

        const nextFunc = (responseData: unknown): Paginator<operations.AccountsListResponse> => {
            const nextCursor = dlv(responseData, "cursor.next");

            if (nextCursor == null) {
                return () => null;
            }
            const results = dlv(responseData, "cursor.data");
            if (!Array.isArray(results) || !results.length) {
                return () => null;
            }

            return () =>
                this.list(
                    {
                        ...input$,
                        cursor: nextCursor,
                    },
                    options
                );
        };

        const page$ = { ...unwrap$(result$), next: nextFunc(raw$) };
        return { ...page$, ...createPageIterator(page$, !result$.ok) };
    }

    async count(
        ledger: string,
        address: string,
        query: { [k: string]: any },
        pit?: Date | undefined,
        options?: RequestOptions
    ): Promise<operations.AccountsCountResponse | undefined> {
        const input$: operations.AccountsCountRequest = {
            ledger: ledger,
            address: address,
            pit: pit,
            query: query,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.AccountsCountRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/api/ledger/v2/{ledger}/accounts")(pathParams$);

        const query$ = encodeFormQuery$({
            address: payload$.address,
            pit: payload$.pit,
            query: payload$.query,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "Accounts_count",
            oAuth2Scopes: ["ledger:read"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "HEAD",
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

        const [result$] = await m$.match<
            operations.AccountsCountResponse | undefined,
            errors.LedgerError | SDKError | SDKValidationError
        >(
            m$.nil(204, operations.AccountsCountResponse$inboundSchema.optional(), { hdrs: true }),
            m$.jsonErr("default", errors.LedgerError$inboundSchema)
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    async get(
        ledger: string,
        address: string,
        pit?: Date | undefined,
        expand?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.AccountsGetResponseBody> {
        const input$: operations.AccountsGetRequest = {
            ledger: ledger,
            address: address,
            pit: pit,
            expand: expand,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.AccountsGetRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            address: encodeSimple$("address", payload$.address, {
                explode: false,
                charEncoding: "percent",
            }),
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/api/ledger/v2/{ledger}/accounts/{address}")(pathParams$);

        const query$ = encodeFormQuery$({
            expand: payload$.expand,
            pit: payload$.pit,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "Accounts_get",
            oAuth2Scopes: ["ledger:read"],
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

        const [result$] = await m$.match<
            operations.AccountsGetResponseBody,
            errors.LedgerError | SDKError | SDKValidationError
        >(
            m$.json(200, operations.AccountsGetResponseBody$inboundSchema),
            m$.jsonErr("default", errors.LedgerError$inboundSchema)
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    async addMetadata(
        ledger: string,
        address: string,
        requestBody: operations.AccountsAddMetadataRequestBody,
        options?: RequestOptions
    ): Promise<void> {
        const input$: operations.AccountsAddMetadataRequest = {
            ledger: ledger,
            address: address,
            requestBody: requestBody,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.AccountsAddMetadataRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            address: encodeSimple$("address", payload$.address, {
                explode: false,
                charEncoding: "percent",
            }),
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/api/ledger/v2/{ledger}/accounts/{address}/metadata")(
            pathParams$
        );

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "Accounts_addMetadata",
            oAuth2Scopes: ["ledger:write"],
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

        const [result$] = await m$.match<void, errors.LedgerError | SDKError | SDKValidationError>(
            m$.nil(204, z.void()),
            m$.jsonErr("default", errors.LedgerError$inboundSchema)
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    async removeMetadata(
        ledger: string,
        address: string,
        key: string,
        options?: RequestOptions
    ): Promise<void> {
        const input$: operations.AccountsRemoveMetadataRequest = {
            ledger: ledger,
            address: address,
            key: key,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.AccountsRemoveMetadataRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            address: encodeSimple$("address", payload$.address, {
                explode: false,
                charEncoding: "percent",
            }),
            key: encodeSimple$("key", payload$.key, { explode: false, charEncoding: "percent" }),
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/api/ledger/v2/{ledger}/accounts/{address}/metatdata/{key}")(
            pathParams$
        );

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "Accounts_removeMetadata",
            oAuth2Scopes: ["ledger:write"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
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

        const [result$] = await m$.match<void, errors.LedgerError | SDKError | SDKValidationError>(
            m$.nil(204, z.void()),
            m$.jsonErr("default", errors.LedgerError$inboundSchema)
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }
}
