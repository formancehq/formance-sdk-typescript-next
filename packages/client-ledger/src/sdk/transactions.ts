/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";
import { createPageIterator, PageIterator, Paginator } from "../types/operations.js";
import * as z from "zod";

export class Transactions extends ClientSDK {
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

    async count(
        ledger: string,
        pit?: Date | undefined,
        query?: { [k: string]: any } | undefined,
        options?: RequestOptions
    ): Promise<operations.TransactionsCountResponse | undefined> {
        const input$: operations.TransactionsCountRequest = {
            ledger: ledger,
            pit: pit,
            query: query,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.TransactionsCountRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/ledger/v2/{ledger}/transactions")(
            pathParams$
        );

        const query$ = encodeFormQuery$({
            pit: payload$.pit,
            query: payload$.query,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Transactions_count",
            oAuth2Scopes: ["ledger:read"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
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

        const [result$] = await this.matcher<operations.TransactionsCountResponse | undefined>()
            .void(204, operations.TransactionsCountResponse$inboundSchema.optional(), {
                hdrs: true,
            })
            .json("default", errors.LedgerError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async list(
        request: operations.TransactionsListRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.TransactionsListResponse>> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.TransactionsListRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/ledger/v2/{ledger}/transactions")(
            pathParams$
        );

        const query$ = encodeFormQuery$({
            cursor: payload$.cursor,
            expand: payload$.expand,
            pageSize: payload$.pageSize,
            pit: payload$.pit,
            query: payload$.query,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Transactions_list",
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

        const [result$, raw$] = await this.matcher<operations.TransactionsListResponse>()
            .json(200, operations.TransactionsListResponse$inboundSchema, { key: "Result" })
            .json("default", errors.LedgerError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        const nextFunc = (
            responseData: unknown
        ): Paginator<operations.TransactionsListResponse> => {
            const nextCursor = dlv(responseData, "cursor.next");

            if (nextCursor == null) {
                return () => null;
            }

            const results = dlv(responseData, "cursor.data");
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

    async create(
        ledger: string,
        requestBody: operations.TransactionsCreateRequestBody,
        idempotencyKey?: string | undefined,
        dryRun?: boolean | undefined,
        options?: RequestOptions
    ): Promise<operations.TransactionsCreateResponseBody> {
        const input$: operations.TransactionsCreateRequest = {
            ledger: ledger,
            idempotencyKey: idempotencyKey,
            dryRun: dryRun,
            requestBody: requestBody,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.TransactionsCreateRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/ledger/v2/{ledger}/transactions")(
            pathParams$
        );

        const query$ = encodeFormQuery$({
            dryRun: payload$.dryRun,
        });

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
            "Idempotency-Key": encodeSimple$("Idempotency-Key", payload$["Idempotency-Key"], {
                explode: false,
                charEncoding: "none",
            }),
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Transactions_create",
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

        const [result$] = await this.matcher<operations.TransactionsCreateResponseBody>()
            .json(200, operations.TransactionsCreateResponseBody$inboundSchema)
            .json("default", errors.LedgerError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async get(
        ledger: string,
        id: number,
        expand?: string | undefined,
        pit?: Date | undefined,
        options?: RequestOptions
    ): Promise<operations.TransactionsGetResponseBody> {
        const input$: operations.TransactionsGetRequest = {
            ledger: ledger,
            id: id,
            expand: expand,
            pit: pit,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.TransactionsGetRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/ledger/v2/{ledger}/transactions/{id}")(
            pathParams$
        );

        const query$ = encodeFormQuery$({
            expand: payload$.expand,
            pit: payload$.pit,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Transactions_get",
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

        const [result$] = await this.matcher<operations.TransactionsGetResponseBody>()
            .json(200, operations.TransactionsGetResponseBody$inboundSchema)
            .json("default", errors.LedgerError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async addMetadata(
        request: operations.TransactionsAddMetadataRequest,
        options?: RequestOptions
    ): Promise<void> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.TransactionsAddMetadataRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/api/ledger/v2/{ledger}/transactions/{id}/metadata"
        )(pathParams$);

        const query$ = encodeFormQuery$({
            dryRun: payload$.dryRun,
        });

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
            "Idempotency-Key": encodeSimple$("Idempotency-Key", payload$["Idempotency-Key"], {
                explode: false,
                charEncoding: "none",
            }),
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Transactions_addMetadata",
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

    async deleteMetadata(
        ledger: string,
        id: string,
        key: string,
        options?: RequestOptions
    ): Promise<void> {
        const input$: operations.TransactionsDeleteMetadataRequest = {
            ledger: ledger,
            id: id,
            key: key,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.TransactionsDeleteMetadataRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
            key: encodeSimple$("key", payload$.key, { explode: false, charEncoding: "percent" }),
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/api/ledger/v2/{ledger}/transactions/{id}/metadata/{key}"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Transactions_deleteMetadata",
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

    async revert(
        ledger: string,
        id: number,
        force?: boolean | undefined,
        atEffectiveDate?: Date | undefined,
        options?: RequestOptions
    ): Promise<operations.TransactionsRevertResponseBody> {
        const input$: operations.TransactionsRevertRequest = {
            ledger: ledger,
            id: id,
            force: force,
            atEffectiveDate: atEffectiveDate,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.TransactionsRevertRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/ledger/v2/{ledger}/transactions/{id}/revert")(
            pathParams$
        );

        const query$ = encodeFormQuery$({
            atEffectiveDate: payload$.atEffectiveDate,
            force: payload$.force,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Transactions_revert",
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

        const [result$] = await this.matcher<operations.TransactionsRevertResponseBody>()
            .json(201, operations.TransactionsRevertResponseBody$inboundSchema)
            .json("default", errors.LedgerError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
