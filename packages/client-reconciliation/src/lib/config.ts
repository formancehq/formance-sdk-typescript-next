/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../models/components/index.js";
import { HTTPClient } from "./http.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Default localhost endpoint
     */
    "http://localhost",
] as const;

export type SDKOptions = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: components.Security | (() => Promise<components.Security>);

    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
    let serverURL = options.serverURL;

    const params: Params = {};

    if (!serverURL) {
        const serverIdx = options.serverIdx ?? 0;
        if (serverIdx < 0 || serverIdx >= ServerList.length) {
            throw new Error(`Invalid server index ${serverIdx}`);
        }
        serverURL = ServerList[serverIdx] || "";
    }

    const u = pathToFunc(serverURL)(params);
    return new URL(u);
}

export const SDK_METADATA = {
    language: "typescript",
    openapiDocVersion: "0.0.0",
    sdkVersion: "1.0.0-alpha",
    genVersion: "2.359.0",
    userAgent: "speakeasy-sdk/typescript 1.0.0-alpha 2.359.0 0.0.0 @formance/sdk-reconciliation",
} as const;
