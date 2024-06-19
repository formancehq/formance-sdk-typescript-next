/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as retries$ from "../lib/retries.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";
import { createPageIterator, PageIterator, Paginator } from "../types/operations.js";
import jp from "jsonpath";
import * as z from "zod";

export class Accounts extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    async list(
        request: operations.AccountsListRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<PageIterator<operations.AccountsListResponse>> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.AccountsListRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/ledger/v2/{ledger}/accounts")(pathParams$);

        const query$ = encodeFormQuery$({
            cursor: payload$.cursor,
            expand: payload$.expand,
            pageSize: payload$.pageSize,
            pit: payload$.pit,
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Accounts_list",
            oAuth2Scopes: ["ledger:read"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["default"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["5XX"] }
        );

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$, raw$] = await this.matcher<operations.AccountsListResponse>()
            .json(200, operations.AccountsListResponse$, { key: "Result" })
            .json("default", errors.LedgerError$, { err: true })
            .match(response, { extraFields: responseFields$ });

        const nextFunc = (responseData: unknown): Paginator<operations.AccountsListResponse> => {
            const nextCursor = jp.value(responseData, "$.cursor.next");
            if (nextCursor == null) {
                return () => null;
            }
            const results = jp.value(responseData, "$.cursor.data");
            if (!results.length) {
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

        const page$ = { ...result$, next: nextFunc(raw$) };
        return { ...page$, ...createPageIterator(page$) };
    }

    async count(
        ledger: string,
        address: string,
        query: { [k: string]: any },
        pit?: Date | undefined,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.AccountsCountResponse | undefined> {
        const input$: operations.AccountsCountRequest = {
            ledger: ledger,
            address: address,
            pit: pit,
            query: query,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.AccountsCountRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/ledger/v2/{ledger}/accounts")(pathParams$);

        const query$ = encodeFormQuery$({
            address: payload$.address,
            pit: payload$.pit,
            query: payload$.query,
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Accounts_count",
            oAuth2Scopes: ["ledger:read"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["default"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "HEAD",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["5XX"] }
        );

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.AccountsCountResponse | undefined>()
            .void(204, operations.AccountsCountResponse$.inboundSchema.optional(), { hdrs: true })
            .json("default", errors.LedgerError$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async get(
        ledger: string,
        address: string,
        pit?: Date | undefined,
        expand?: string | undefined,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.AccountsGetResponseBody> {
        const input$: operations.AccountsGetRequest = {
            ledger: ledger,
            address: address,
            pit: pit,
            expand: expand,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.AccountsGetRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
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
        const path$ = this.templateURLComponent("/api/ledger/v2/{ledger}/accounts/{address}")(
            pathParams$
        );

        const query$ = encodeFormQuery$({
            expand: payload$.expand,
            pit: payload$.pit,
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Accounts_get",
            oAuth2Scopes: ["ledger:read"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["default"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["5XX"] }
        );

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.AccountsGetResponseBody>()
            .json(200, operations.AccountsGetResponseBody$)
            .json("default", errors.LedgerError$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async addMetadata(
        ledger: string,
        address: string,
        requestBody: operations.AccountsAddMetadataRequestBody,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<void> {
        const input$: operations.AccountsAddMetadataRequest = {
            ledger: ledger,
            address: address,
            requestBody: requestBody,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.AccountsAddMetadataRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
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
        const path$ = this.templateURLComponent(
            "/api/ledger/v2/{ledger}/accounts/{address}/metadata"
        )(pathParams$);

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Accounts_addMetadata",
            oAuth2Scopes: ["ledger:write"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["default"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["5XX"] }
        );

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<void>()
            .void(204, z.void())
            .json("default", errors.LedgerError$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async removeMetadata(
        ledger: string,
        address: string,
        key: string,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<void> {
        const input$: operations.AccountsRemoveMetadataRequest = {
            ledger: ledger,
            address: address,
            key: key,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.AccountsRemoveMetadataRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
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
        const path$ = this.templateURLComponent(
            "/api/ledger/v2/{ledger}/accounts/{address}/metatdata/{key}"
        )(pathParams$);

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Accounts_removeMetadata",
            oAuth2Scopes: ["ledger:write"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["default"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["5XX"] }
        );

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<void>()
            .void(204, z.void())
            .json("default", errors.LedgerError$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}