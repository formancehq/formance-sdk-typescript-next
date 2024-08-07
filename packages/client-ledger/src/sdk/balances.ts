/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { balancesAggregate } from "../funcs/balancesAggregate.js";
import { balancesVolumes } from "../funcs/balancesVolumes.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Balances extends ClientSDK {
    async aggregate(
        ledger: string,
        query: { [k: string]: any },
        pit?: Date | undefined,
        useInsertionDate?: boolean | undefined,
        options?: RequestOptions
    ): Promise<operations.BalancesAggregateResponseBody> {
        return unwrapAsync(balancesAggregate(this, ledger, query, pit, useInsertionDate, options));
    }

    async volumes(
        request: operations.BalancesVolumesRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.BalancesVolumesResponse>> {
        return unwrapResultIterator(balancesVolumes(this, request, options));
    }
}
