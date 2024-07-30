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
import { extractSecurity } from "../lib/security.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";
import { createPageIterator, PageIterator, Paginator } from "../types/operations.js";
import * as z from "zod";

export class Connectors extends ClientSDK {
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

    async install(
        connector: components.Connector,
        requestBody: operations.ConnectorsInstallRequestBody,
        options?: RequestOptions
    ): Promise<operations.ConnectorsInstallResponseBody> {
        const input$: operations.ConnectorsInstallRequest = {
            connector: connector,
            requestBody: requestBody,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ConnectorsInstallRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            connector: encodeSimple$("connector", payload$.connector, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/payments/connectors/{connector}")(
            pathParams$
        );

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "Connectors_install",
            oAuth2Scopes: ["payments:write"],
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

        const [result$] = await this.matcher<operations.ConnectorsInstallResponseBody>()
            .json(201, operations.ConnectorsInstallResponseBody$inboundSchema)
            .json("default", errors.PaymentsError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async uninstall(
        connector: components.Connector,
        connectorID: string,
        options?: RequestOptions
    ): Promise<void> {
        const input$: operations.ConnectorsUninstallRequest = {
            connector: connector,
            connectorID: connectorID,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ConnectorsUninstallRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            connector: encodeSimple$("connector", payload$.connector, {
                explode: false,
                charEncoding: "percent",
            }),
            connectorID: encodeSimple$("connectorID", payload$.connectorID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/api/payments/connectors/{connector}/{connectorID}"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "Connectors_uninstall",
            oAuth2Scopes: ["payments:write"],
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
            .json("default", errors.PaymentsError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async update(
        connector: components.Connector,
        connectorID: string,
        requestBody: operations.ConnectorsUpdateRequestBody,
        options?: RequestOptions
    ): Promise<void> {
        const input$: operations.ConnectorsUpdateRequest = {
            connector: connector,
            connectorID: connectorID,
            requestBody: requestBody,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ConnectorsUpdateRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            connector: encodeSimple$("connector", payload$.connector, {
                explode: false,
                charEncoding: "percent",
            }),
            connectorID: encodeSimple$("connectorID", payload$.connectorID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/api/payments/connectors/{connector}/{connectorID}"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "Connectors_update",
            oAuth2Scopes: ["payments:write"],
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
            .json("default", errors.PaymentsError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async get(
        connector: components.Connector,
        connectorId: string,
        options?: RequestOptions
    ): Promise<operations.ConnectorsGetResponseBody> {
        const input$: operations.ConnectorsGetRequest = {
            connector: connector,
            connectorId: connectorId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ConnectorsGetRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            connector: encodeSimple$("connector", payload$.connector, {
                explode: false,
                charEncoding: "percent",
            }),
            connectorId: encodeSimple$("connectorId", payload$.connectorId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/api/payments/connectors/{connector}/{connectorId}/config"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "Connectors_get",
            oAuth2Scopes: ["payments:read"],
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

        const [result$] = await this.matcher<operations.ConnectorsGetResponseBody>()
            .json(200, operations.ConnectorsGetResponseBody$inboundSchema)
            .json("default", errors.PaymentsError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async reset(
        connector: components.Connector,
        connectorId: string,
        options?: RequestOptions
    ): Promise<void> {
        const input$: operations.ConnectorsResetRequest = {
            connector: connector,
            connectorId: connectorId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ConnectorsResetRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            connector: encodeSimple$("connector", payload$.connector, {
                explode: false,
                charEncoding: "percent",
            }),
            connectorId: encodeSimple$("connectorId", payload$.connectorId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/api/payments/connectors/{connector}/{connectorId}/reset"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "Connectors_reset",
            oAuth2Scopes: ["payments:write"],
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
            .json("default", errors.PaymentsError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async listTask(
        connector: components.Connector,
        connectorId: string,
        pageSize?: number | undefined,
        cursor?: string | undefined,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ConnectorsListTaskResponse>> {
        const input$: operations.ConnectorsListTaskRequest = {
            connector: connector,
            connectorId: connectorId,
            pageSize: pageSize,
            cursor: cursor,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ConnectorsListTaskRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            connector: encodeSimple$("connector", payload$.connector, {
                explode: false,
                charEncoding: "percent",
            }),
            connectorId: encodeSimple$("connectorId", payload$.connectorId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/api/payments/connectors/{connector}/{connectorId}/tasks"
        )(pathParams$);

        const query$ = encodeFormQuery$({
            cursor: payload$.cursor,
            pageSize: payload$.pageSize,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "Connectors_listTask",
            oAuth2Scopes: ["payments:read"],
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

        const [result$, raw$] = await this.matcher<operations.ConnectorsListTaskResponse>()
            .json(200, operations.ConnectorsListTaskResponse$inboundSchema, { key: "Result" })
            .json("default", errors.PaymentsError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        const nextFunc = (
            responseData: unknown
        ): Paginator<operations.ConnectorsListTaskResponse> => {
            const nextCursor = dlv(responseData, "cursor.next");

            if (nextCursor == null) {
                return () => null;
            }
            const results = dlv(responseData, "cursor.data");
            if (!Array.isArray(results) || !results.length) {
                return () => null;
            }

            return () => this.listTask(connector, connectorId, pageSize, nextCursor, options);
        };

        const page$ = { ...result$, next: nextFunc(raw$) };
        return { ...page$, ...createPageIterator(page$) };
    }

    async getTask(
        connector: components.Connector,
        connectorId: string,
        taskId: string,
        options?: RequestOptions
    ): Promise<operations.ConnectorsGetTaskResponseBody> {
        const input$: operations.ConnectorsGetTaskRequest = {
            connector: connector,
            connectorId: connectorId,
            taskId: taskId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ConnectorsGetTaskRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            connector: encodeSimple$("connector", payload$.connector, {
                explode: false,
                charEncoding: "percent",
            }),
            connectorId: encodeSimple$("connectorId", payload$.connectorId, {
                explode: false,
                charEncoding: "percent",
            }),
            taskId: encodeSimple$("taskId", payload$.taskId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/api/payments/connectors/{connector}/{connectorId}/tasks/{taskId}"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "Connectors_getTask",
            oAuth2Scopes: ["payments:read"],
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

        const [result$] = await this.matcher<operations.ConnectorsGetTaskResponseBody>()
            .json(200, operations.ConnectorsGetTaskResponseBody$inboundSchema)
            .json("default", errors.PaymentsError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
