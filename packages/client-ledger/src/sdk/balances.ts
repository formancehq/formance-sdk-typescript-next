/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
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

export class Balances extends ClientSDK {
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

    async aggregate(
        ledger: string,
        query: { [k: string]: any },
        pit?: Date | undefined,
        useInsertionDate?: boolean | undefined,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.BalancesAggregateResponseBody> {
        const input$: operations.BalancesAggregateRequest = {
            ledger: ledger,
            pit: pit,
            useInsertionDate: useInsertionDate,
            query: query,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.BalancesAggregateRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/ledger/v2/{ledger}/aggregate/balances")(
            pathParams$
        );

        const query$ = encodeFormQuery$({
            pit: payload$.pit,
            query: payload$.query,
            useInsertionDate: payload$.useInsertionDate,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Balances_aggregate",
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

        const [result$] = await this.matcher<operations.BalancesAggregateResponseBody>()
            .json(200, operations.BalancesAggregateResponseBody$)
            .json("default", errors.LedgerError$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async volumes(
        request: operations.BalancesVolumesRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<PageIterator<operations.BalancesVolumesResponse>> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.BalancesVolumesRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            ledger: encodeSimple$("ledger", payload$.ledger, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/ledger/v2/{ledger}/volumes")(pathParams$);

        const query$ = encodeFormQuery$({
            cursor: payload$.cursor,
            endTime: payload$.endTime,
            groupBy: payload$.groupBy,
            inseritionDate: payload$.inseritionDate,
            pageSize: payload$.pageSize,
            query: payload$.query,
            startTime: payload$.startTime,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "Balances_volumes",
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

        const [result$, raw$] = await this.matcher<operations.BalancesVolumesResponse>()
            .json(200, operations.BalancesVolumesResponse$, { key: "Result" })
            .json("default", errors.LedgerError$, { err: true })
            .match(response, { extraFields: responseFields$ });

        const nextFunc = (responseData: unknown): Paginator<operations.BalancesVolumesResponse> => {
            const nextCursor = jp.value(responseData, "$.cursor.next");
            if (nextCursor == null) {
                return () => null;
            }
            const results = jp.value(responseData, "$.cursor.data");
            if (!results.length) {
                return () => null;
            }

            return () =>
                this.volumes(
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
}
