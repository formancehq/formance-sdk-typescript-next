/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { HTTPClient } from "../lib/http.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity } from "../lib/security.js";
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

    async info(options?: RequestOptions): Promise<components.ServerInfo> {
        const path$ = this.templateURLComponent("/api/payments/_info")();

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
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

        const [result$] = await this.matcher<components.ServerInfo>()
            .json(200, components.ServerInfo$inboundSchema)
            .json("default", errors.PaymentsError$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
