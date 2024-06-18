/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import * as retries$ from "../lib/retries";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import { Balances } from "./balances";
import { Holds } from "./holds";
import { Wallets } from "./wallets";

export class LedgerWallets extends ClientSDK {
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

    private _holds?: Holds;
    get holds(): Holds {
        return (this._holds ??= new Holds(this.options$));
    }

    private _wallets?: Wallets;
    get wallets(): Wallets {
        return (this._wallets ??= new Wallets(this.options$));
    }

    private _balances?: Balances;
    get balances(): Balances {
        return (this._balances ??= new Balances(this.options$));
    }

    async info(
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<components.ServerInfo> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/api/wallets/_info")();

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "_info",
            oAuth2Scopes: ["wallets:read", "wallets:read"],
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

        const [result$] = await this.matcher<components.ServerInfo>()
            .json(200, components.ServerInfo$)
            .fail("default")
            .match(response);

        return result$;
    }
}
