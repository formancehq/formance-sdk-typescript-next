/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { HTTPClient } from "../lib/http.js";
import * as retries$ from "../lib/retries.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import { Accounts } from "./accounts.js";
import { BankAccounts } from "./bankaccounts.js";
import { CashPools } from "./cashpools.js";
import { Connectors } from "./connectors.js";
import { PaymentsV1 } from "./paymentsv1.js";
import { TransferInitiations } from "./transferinitiations.js";

export class ConnectivityClient extends ClientSDK {
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

    private _accounts?: Accounts;
    get accounts(): Accounts {
        return (this._accounts ??= new Accounts(this.options$));
    }

    private _bankAccounts?: BankAccounts;
    get bankAccounts(): BankAccounts {
        return (this._bankAccounts ??= new BankAccounts(this.options$));
    }

    private _connectors?: Connectors;
    get connectors(): Connectors {
        return (this._connectors ??= new Connectors(this.options$));
    }

    private _paymentsV1?: PaymentsV1;
    get paymentsV1(): PaymentsV1 {
        return (this._paymentsV1 ??= new PaymentsV1(this.options$));
    }

    private _cashPools?: CashPools;
    get cashPools(): CashPools {
        return (this._cashPools ??= new CashPools(this.options$));
    }

    private _transferInitiations?: TransferInitiations;
    get transferInitiations(): TransferInitiations {
        return (this._transferInitiations ??= new TransferInitiations(this.options$));
    }

    async info(
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<components.ServerInfo> {
        const path$ = this.templateURLComponent("/api/payments/_info")();

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "_info",
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

        const [result$] = await this.matcher<components.ServerInfo>()
            .json(200, components.ServerInfo$)
            .json("default", errors.PaymentsError$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
