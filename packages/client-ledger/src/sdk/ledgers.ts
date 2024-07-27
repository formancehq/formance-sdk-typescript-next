/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { dlv } from "../lib/dlv.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";
import { createPageIterator, PageIterator, Paginator } from "../types/operations.js";
import * as z from "zod";

export class Ledgers extends ClientSDK {
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
        cursor?: string | undefined,
        pageSize?: number | undefined,
        options?: RequestOptions
    ): Promise<PageIterator<operations.LedgersListResponse>> {
        const input$: operations.LedgersListRequest = {
            cursor: cursor,
            pageSize: pageSize,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.LedgersListRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/api/ledger/v2")();

        const query$ = encodeFormQuery$({
            cursor: payload$.cursor,
            pageSize: payload$.pageSize,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Ledgers_list",
            oAuth2Scopes: ["ledger:read"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
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

        const response = await this.do$(request$, {
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

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$, raw$] = await this.matcher<operations.LedgersListResponse>()
            .json(200, operations.LedgersListResponse$inboundSchema, { key: "Result" })
            .json("default", errors.LedgerError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        const nextFunc = (responseData: unknown): Paginator<operations.LedgersListResponse> => {
            const nextCursor = dlv(responseData, "cursor.next");

            if (nextCursor == null) {
                return () => null;
            }
            const results = dlv(responseData, "cursor.data");
            if (!Array.isArray(results) || !results.length) {
                return () => null;
            }

            return () => this.list(nextCursor, pageSize, options);
        };

        const page$ = { ...result$, next: nextFunc(raw$) };
        return { ...page$, ...createPageIterator(page$) };
    }

    async get(
        ledger: string,
        options?: RequestOptions
    ): Promise<operations.LedgersGetResponseBody> {
        const input$: operations.LedgersGetRequest = {
            ledger: ledger,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.LedgersGetRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/ledger/v2/{ledger}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Ledgers_get",
            oAuth2Scopes: ["ledger:read"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
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

        const response = await this.do$(request$, {
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

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.LedgersGetResponseBody>()
            .json(200, operations.LedgersGetResponseBody$inboundSchema)
            .json("default", errors.LedgerError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async create(
        ledger: string,
        requestBody: operations.LedgersCreateRequestBody,
        options?: RequestOptions
    ): Promise<void> {
        const input$: operations.LedgersCreateRequest = {
            ledger: ledger,
            requestBody: requestBody,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.LedgersCreateRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/ledger/v2/{ledger}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Ledgers_create",
            oAuth2Scopes: ["ledger:write"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
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

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<void>()
            .void(204, z.void())
            .json("default", errors.LedgerError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async bulk(
        ledger: string,
        requestBody: Array<components.BulkAction>,
        options?: RequestOptions
    ): Promise<operations.LedgersBulkResponseBody> {
        const input$: operations.LedgersBulkRequest = {
            ledger: ledger,
            requestBody: requestBody,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.LedgersBulkRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/ledger/v2/{ledger}/_bulk")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Ledgers_bulk",
            oAuth2Scopes: ["ledger:write"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
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

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.LedgersBulkResponseBody>()
            .json(200, operations.LedgersBulkResponseBody$inboundSchema)
            .json("default", errors.LedgerError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async info(
        ledger: string,
        options?: RequestOptions
    ): Promise<operations.LedgersInfoResponseBody> {
        const input$: operations.LedgersInfoRequest = {
            ledger: ledger,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.LedgersInfoRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/ledger/v2/{ledger}/_info")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Ledgers_info",
            oAuth2Scopes: ["ledger:read"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
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

        const response = await this.do$(request$, {
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

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.LedgersInfoResponseBody>()
            .json(200, operations.LedgersInfoResponseBody$inboundSchema)
            .json("default", errors.LedgerError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async addMetadata(
        ledger: string,
        requestBody: { [k: string]: string },
        options?: RequestOptions
    ): Promise<void> {
        const input$: operations.LedgersAddMetadataRequest = {
            ledger: ledger,
            requestBody: requestBody,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.LedgersAddMetadataRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/ledger/v2/{ledger}/metadata")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Ledgers_addMetadata",
            oAuth2Scopes: ["ledger:write"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
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

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<void>()
            .void(204, z.void())
            .json("default", errors.LedgerError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async removeMetadata(ledger: string, key: string, options?: RequestOptions): Promise<void> {
        const input$: operations.LedgersRemoveMetadataRequest = {
            ledger: ledger,
            key: key,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.LedgersRemoveMetadataRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            key: encodeSimple$("key", payload$.key, { explode: false, charEncoding: "percent" }),
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/ledger/v2/{ledger}/metadata/{key}")(
            pathParams$
        );

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Ledgers_removeMetadata",
            oAuth2Scopes: ["ledger:write"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
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

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<void>()
            .void(204, z.void())
            .json("default", errors.LedgerError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async stats(
        ledger: string,
        options?: RequestOptions
    ): Promise<operations.LedgersStatsResponseBody> {
        const input$: operations.LedgersStatsRequest = {
            ledger: ledger,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.LedgersStatsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/ledger/v2/{ledger}/stats")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Ledgers_stats",
            oAuth2Scopes: ["ledger:read"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
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

        const response = await this.do$(request$, {
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

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.LedgersStatsResponseBody>()
            .json(200, operations.LedgersStatsResponseBody$inboundSchema)
            .json("default", errors.LedgerError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
