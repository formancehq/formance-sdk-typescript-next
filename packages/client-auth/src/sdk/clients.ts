/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as retries$ from "../lib/retries.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { createPageIterator, PageIterator, Paginator } from "../types/operations.js";
import jp from "jsonpath";
import * as z from "zod";

export class Clients extends ClientSDK {
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
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<PageIterator<operations.ClientsListResponse>> {
        const input$: operations.ClientsListRequest = {
            cursor: cursor,
            pageSize: pageSize,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ClientsListRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/api/auth/clients")();

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
            operationID: "Clients_list",
            oAuth2Scopes: ["auth:read"],
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
                return this.do$(cloned, { context, errorCodes: ["default"] });
            },
            { config: retryConfig, statusCodes: ["5XX"] }
        );

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$, raw$] = await this.matcher<operations.ClientsListResponse>()
            .json(200, operations.ClientsListResponse$inboundSchema, { key: "Result" })
            .fail("default")
            .match(response, { extraFields: responseFields$ });

        const nextFunc = (responseData: unknown): Paginator<operations.ClientsListResponse> => {
            const nextCursor = jp.value(responseData, "$.cursor.next");
            if (nextCursor == null) {
                return () => null;
            }
            const results = jp.value(responseData, "$.cursor.data");
            if (!results.length) {
                return () => null;
            }

            return () => this.list(nextCursor, pageSize, options);
        };

        const page$ = { ...result$, next: nextFunc(raw$) };
        return { ...page$, ...createPageIterator(page$) };
    }

    async create(
        request: components.ClientData,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.ClientsCreateResponseBody> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.ClientData$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/api/auth/clients")();

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
            operationID: "Clients_create",
            oAuth2Scopes: ["auth:write"],
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
                return this.do$(cloned, { context, errorCodes: ["default"] });
            },
            { config: retryConfig, statusCodes: ["5XX"] }
        );

        const [result$] = await this.matcher<operations.ClientsCreateResponseBody>()
            .json(201, operations.ClientsCreateResponseBody$inboundSchema)
            .fail("default")
            .match(response);

        return result$;
    }

    async get(
        id: string,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.ClientsGetResponseBody> {
        const input$: operations.ClientsGetRequest = {
            id: id,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ClientsGetRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/api/auth/clients/{id}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Clients_get",
            oAuth2Scopes: ["auth:read"],
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
                return this.do$(cloned, { context, errorCodes: ["default"] });
            },
            { config: retryConfig, statusCodes: ["5XX"] }
        );

        const [result$] = await this.matcher<operations.ClientsGetResponseBody>()
            .json(200, operations.ClientsGetResponseBody$inboundSchema)
            .fail("default")
            .match(response);

        return result$;
    }

    async update(
        id: string,
        clientData: components.ClientData,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.ClientsUpdateResponseBody> {
        const input$: operations.ClientsUpdateRequest = {
            id: id,
            clientData: clientData,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ClientsUpdateRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.ClientData, { explode: true });

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/api/auth/clients/{id}")(pathParams$);

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
            operationID: "Clients_update",
            oAuth2Scopes: ["auth:write"],
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
                return this.do$(cloned, { context, errorCodes: ["default"] });
            },
            { config: retryConfig, statusCodes: ["5XX"] }
        );

        const [result$] = await this.matcher<operations.ClientsUpdateResponseBody>()
            .json(200, operations.ClientsUpdateResponseBody$inboundSchema)
            .fail("default")
            .match(response);

        return result$;
    }

    async delete(
        id: string,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<void> {
        const input$: operations.ClientsDeleteRequest = {
            id: id,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ClientsDeleteRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/api/auth/clients/{id}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "*/*",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Clients_delete",
            oAuth2Scopes: ["auth:write"],
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
                return this.do$(cloned, { context, errorCodes: ["default"] });
            },
            { config: retryConfig, statusCodes: ["5XX"] }
        );

        const [result$] = await this.matcher<void>()
            .void(204, z.void())
            .fail("default")
            .match(response);

        return result$;
    }
}
