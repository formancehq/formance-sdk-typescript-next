/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { dlv } from "../lib/dlv.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { createPageIterator, PageIterator, Paginator } from "../types/operations.js";

export class Users extends ClientSDK {
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
    ): Promise<PageIterator<operations.UsersListResponse>> {
        const input$: operations.UsersListRequest = {
            cursor: cursor,
            pageSize: pageSize,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UsersListRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/api/auth/users")();

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
            operationID: "Users_list",
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

        const [result$, raw$] = await this.matcher<operations.UsersListResponse>()
            .json(200, operations.UsersListResponse$inboundSchema, { key: "Result" })
            .fail("default")
            .match(response, { extraFields: responseFields$ });

        const nextFunc = (responseData: unknown): Paginator<operations.UsersListResponse> => {
            const nextCursor = dlv(responseData, "cursor.next");

            if (nextCursor == null) {
                return () => null;
            }

            const results = dlv(responseData, "cursor.data");
            if (!results.length) {
                return () => null;
            }

            return () => this.list(nextCursor, pageSize, options);
        };

        const page$ = { ...result$, next: nextFunc(raw$) };
        return { ...page$, ...createPageIterator(page$) };
    }

    async get(userid: string, options?: RequestOptions): Promise<operations.UsersGetResponseBody> {
        const input$: operations.UsersGetRequest = {
            userid: userid,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UsersGetRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            userid: encodeSimple$("userid", payload$.userid, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/auth/users/{userid}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Users_get",
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

        const [result$] = await this.matcher<operations.UsersGetResponseBody>()
            .json(200, operations.UsersGetResponseBody$inboundSchema)
            .fail("default")
            .match(response);

        return result$;
    }
}
