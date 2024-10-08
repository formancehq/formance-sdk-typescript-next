/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { balancesCreate } from "../funcs/balancesCreate.js";
import { balancesGet } from "../funcs/balancesGet.js";
import { balancesList } from "../funcs/balancesList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Balances extends ClientSDK {
    async create(
        walletId: string,
        requestBody: operations.BalancesCreateRequestBody,
        options?: RequestOptions
    ): Promise<operations.BalancesCreateResponseBody> {
        return unwrapAsync(balancesCreate(this, walletId, requestBody, options));
    }

    async list(
        walletId: string,
        cursor?: string | undefined,
        pageSize?: number | undefined,
        options?: RequestOptions
    ): Promise<PageIterator<operations.BalancesListResponse>> {
        return unwrapResultIterator(balancesList(this, walletId, cursor, pageSize, options));
    }

    async get(
        walletId: string,
        balanceName: string,
        options?: RequestOptions
    ): Promise<operations.BalancesGetResponseBody> {
        return unwrapAsync(balancesGet(this, walletId, balanceName, options));
    }
}
