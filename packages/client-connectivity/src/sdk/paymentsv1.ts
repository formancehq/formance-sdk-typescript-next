/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { paymentsV1Create } from "../funcs/paymentsV1Create.js";
import { paymentsV1Get } from "../funcs/paymentsV1Get.js";
import { paymentsV1List } from "../funcs/paymentsV1List.js";
import { paymentsV1UpdateMetatdata } from "../funcs/paymentsV1UpdateMetatdata.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class PaymentsV1 extends ClientSDK {
    async create(
        request: components.CreatePaymentRequest,
        options?: RequestOptions
    ): Promise<operations.PaymentsV1CreateResponseBody> {
        return unwrapAsync(paymentsV1Create(this, request, options));
    }

    async list(
        pageSize?: number | undefined,
        cursor?: string | undefined,
        sort?: Array<string> | undefined,
        query?: string | undefined,
        options?: RequestOptions
    ): Promise<PageIterator<operations.PaymentsV1ListResponse>> {
        return unwrapResultIterator(paymentsV1List(this, pageSize, cursor, sort, query, options));
    }

    async get(
        payementId: string,
        options?: RequestOptions
    ): Promise<operations.PaymentsV1GetResponseBody> {
        return unwrapAsync(paymentsV1Get(this, payementId, options));
    }

    async updateMetatdata(
        paymentId: string,
        requestBody: { [k: string]: string },
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(paymentsV1UpdateMetatdata(this, paymentId, requestBody, options));
    }
}
