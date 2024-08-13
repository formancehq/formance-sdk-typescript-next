# ReconciliationClient SDK


## Overview

### Available Operations

* [info](#info)
* [reconcile](#reconcile)

## info

### Example Usage

```typescript
import { ReconciliationClient } from "@formance/sdk-reconciliation";

const reconciliationClient = new ReconciliationClient({
  security: {
    formanceOAuth: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
      tokenURL: "<YOUR_TOKEN_URL_HERE>",
    },
  },
});

async function run() {
  const result = await reconciliationClient.info();

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { ReconciliationClientCore } from "@formance/sdk-reconciliation/core.js";
import { info } from "@formance/sdk-reconciliation/funcs/info.js";

// Use `ReconciliationClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const reconciliationClient = new ReconciliationClientCore({
  security: {
    formanceOAuth: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
      tokenURL: "<YOUR_TOKEN_URL_HERE>",
    },
  },
});

async function run() {
  const res = await info(reconciliationClient);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.InfoResponseBody](../../models/operations/inforesponsebody.md)\>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ReconciliationError | default                    | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## reconcile

### Example Usage

```typescript
import { ReconciliationClient } from "@formance/sdk-reconciliation";

const reconciliationClient = new ReconciliationClient({
  security: {
    formanceOAuth: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
      tokenURL: "<YOUR_TOKEN_URL_HERE>",
    },
  },
});

async function run() {
  const result = await reconciliationClient.reconcile("<value>", {
    reconciledAtLedger: new Date("2023-03-22T09:41:01.330Z"),
    reconciliedAtPayments: new Date("2024-09-22T22:17:49.227Z"),
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { ReconciliationClientCore } from "@formance/sdk-reconciliation/core.js";
import { reconcile } from "@formance/sdk-reconciliation/funcs/reconcile.js";

// Use `ReconciliationClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const reconciliationClient = new ReconciliationClientCore({
  security: {
    formanceOAuth: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
      tokenURL: "<YOUR_TOKEN_URL_HERE>",
    },
  },
});

async function run() {
  const res = await reconcile(reconciliationClient, "<value>", {
    reconciledAtLedger: new Date("2024-11-27T00:52:16.478Z"),
    reconciliedAtPayments: new Date("2022-03-03T20:26:12.979Z"),
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `policyID`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `requestBody`                                                                                                                                                                  | [operations.ReconcileRequestBody](../../models/operations/reconcilerequestbody.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ReconcileResponseBody](../../models/operations/reconcileresponsebody.md)\>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ReconciliationError | default                    | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |
