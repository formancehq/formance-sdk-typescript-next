/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { unwrap as unwrap$ } from "../types/fp.js";
import * as z from "zod";

export class Secrets extends ClientSDK {
    async create(
        clientId: string,
        requestBody: operations.SecretsCreateRequestBody,
        options?: RequestOptions
    ): Promise<operations.SecretsCreateResponseBody> {
        const input$: operations.SecretsCreateRequest = {
            clientId: clientId,
            requestBody: requestBody,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.SecretsCreateRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            clientId: encodeSimple$("clientId", payload$.clientId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/api/auth/{clientId}/secrets")(pathParams$);

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "Secrets_create",
            oAuth2Scopes: ["auth:write"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
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
        const response = unwrap$(doResult);

        const [result$] = await m$.match<
            operations.SecretsCreateResponseBody,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.SecretsCreateResponseBody$inboundSchema),
            m$.fail("default")
        )(response);

        return unwrap$(result$);
    }

    async delete(clientId: string, secretId: string, options?: RequestOptions): Promise<void> {
        const input$: operations.SecretsDeleteRequest = {
            clientId: clientId,
            secretId: secretId,
        };

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.SecretsDeleteRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            clientId: encodeSimple$("clientId", payload$.clientId, {
                explode: false,
                charEncoding: "percent",
            }),
            secretId: encodeSimple$("secretId", payload$.secretId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/api/auth/{clientId}/secrets/{secretId}")(pathParams$);

        const headers$ = new Headers({
            Accept: "*/*",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "Secrets_delete",
            oAuth2Scopes: ["auth:write"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
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
        const response = unwrap$(doResult);

        const [result$] = await m$.match<void, SDKError | SDKValidationError>(
            m$.nil(204, z.void()),
            m$.fail("default")
        )(response);

        return unwrap$(result$);
    }
}
