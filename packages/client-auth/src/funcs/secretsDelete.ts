/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { AuthClientCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
import * as z from "zod";

export async function secretsDelete(
    client$: AuthClientCore,
    clientId: string,
    secretId: string,
    options?: RequestOptions
): Promise<
    Result<
        void,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: operations.SecretsDeleteRequest = {
        clientId: clientId,
        secretId: secretId,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.SecretsDeleteRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
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

    const security$ = await extractSecurity(client$.options$.security);
    const context = {
        operationID: "Secrets_delete",
        oAuth2Scopes: ["auth:write"],
        securitySource: client$.options$.security,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "DELETE",
            path: path$,
            headers: headers$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["default"],
        retryConfig: options?.retries ||
            client$.options$.retryConfig || {
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
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        void,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.nil(204, z.void()),
        m$.fail("default")
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
