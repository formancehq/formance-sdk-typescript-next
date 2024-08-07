/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { workflowsCreate } from "../funcs/workflowsCreate.js";
import { workflowsDelete } from "../funcs/workflowsDelete.js";
import { workflowsGet } from "../funcs/workflowsGet.js";
import { workflowsList } from "../funcs/workflowsList.js";
import { workflowsRun } from "../funcs/workflowsRun.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Workflows extends ClientSDK {
    async list(
        cursor?: string | undefined,
        pageSize?: number | undefined,
        options?: RequestOptions
    ): Promise<PageIterator<operations.WorkflowsListResponse>> {
        return unwrapResultIterator(workflowsList(this, cursor, pageSize, options));
    }

    async create(
        request: components.WorkflowConfig,
        options?: RequestOptions
    ): Promise<operations.WorkflowsCreateResponseBody> {
        return unwrapAsync(workflowsCreate(this, request, options));
    }

    async get(id: string, options?: RequestOptions): Promise<operations.WorkflowsGetResponseBody> {
        return unwrapAsync(workflowsGet(this, id, options));
    }

    async delete(id: string, options?: RequestOptions): Promise<void> {
        return unwrapAsync(workflowsDelete(this, id, options));
    }

    async run(
        id: string,
        requestBody: { [k: string]: any },
        wait?: boolean | undefined,
        options?: RequestOptions
    ): Promise<operations.WorkflowsRunResponseBody> {
        return unwrapAsync(workflowsRun(this, id, requestBody, wait, options));
    }
}
