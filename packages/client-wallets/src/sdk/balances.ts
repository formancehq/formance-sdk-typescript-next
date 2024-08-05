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

export class Balances extends ClientSDK {
    async create(
        walletId: string,
        requestBody: operations.BalancesCreateRequestBody,
        options?: RequestOptions
    ): Promise<operations.BalancesCreateResponseBody> {
        const input$: operations.BalancesCreateRequest = {
            walletId: walletId,
            requestBody: requestBody,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.BalancesCreateRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            walletId: encodeSimple$("walletId", payload$.walletId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/api/wallets/wallets/{walletId}/balances")(pathParams$);

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "Balances_create",
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
            operations.BalancesCreateResponseBody,
            errors.WalletsError | SDKError | SDKValidationError
        >(
            m$.json(201, operations.BalancesCreateResponseBody$inboundSchema),
            m$.jsonErr("default", errors.WalletsError$inboundSchema)
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    async list(
        walletId: string,
        cursor?: string | undefined,
        pageSize?: number | undefined,
        options?: RequestOptions
    ): Promise<PageIterator<operations.BalancesListResponse>> {
        const input$: operations.BalancesListRequest = {
            walletId: walletId,
            cursor: cursor,
            pageSize: pageSize,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.BalancesListRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            walletId: encodeSimple$("walletId", payload$.walletId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/api/wallets/wallets/{walletId}/balances")(pathParams$);

        const query$ = encodeFormQuery$({
            cursor: payload$.cursor,
            pageSize: payload$.pageSize,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "Balances_list",
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
            operations.BalancesListResponse,
            errors.WalletsError | SDKError | SDKValidationError
        >(
            m$.json(200, operations.BalancesListResponse$inboundSchema, { key: "Result" }),
            m$.jsonErr("default", errors.WalletsError$inboundSchema)
        )(response, { extraFields: responseFields$ });

        const nextFunc = (responseData: unknown): Paginator<operations.BalancesListResponse> => {
            const nextCursor = dlv(responseData, "cursor.next");

            if (nextCursor == null) {
                return () => null;
            }
            const results = dlv(responseData, "cursor.data");
            if (!Array.isArray(results) || !results.length) {
                return () => null;
            }

            return () => this.list(walletId, nextCursor, pageSize, options);
        };

        const page$ = { ...unwrap$(result$), next: nextFunc(raw$) };
        return { ...page$, ...createPageIterator(page$, !result$.ok) };
    }

    async get(
        walletId: string,
        balanceName: string,
        options?: RequestOptions
    ): Promise<operations.BalancesGetResponseBody> {
        const input$: operations.BalancesGetRequest = {
            walletId: walletId,
            balanceName: balanceName,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.BalancesGetRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            balanceName: encodeSimple$("balanceName", payload$.balanceName, {
                explode: false,
                charEncoding: "percent",
            }),
            walletId: encodeSimple$("walletId", payload$.walletId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/api/wallets/wallets/{walletId}/balances/{balanceName}")(
            pathParams$
        );

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "Balances_get",
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
            operations.BalancesGetResponseBody,
            errors.WalletsError | SDKError | SDKValidationError
        >(
            m$.json(200, operations.BalancesGetResponseBody$inboundSchema),
            m$.jsonErr("default", errors.WalletsError$inboundSchema)
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }
}
