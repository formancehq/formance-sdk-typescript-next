# Logs
(*logs*)

### Available Operations

* [list](#list)
* [export](#export)
* [ingest](#ingest)

## list

### Example Usage

```typescript
import { LedgerClient } from "@formance/sdk-ledger";

const ledgerClient = new LedgerClient({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await ledgerClient.logs.list("<value>");

  for await (const page of result) {
    // handle page
  }
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { LedgerClientCore } from "@formance/sdk-ledger/core.js";
import { logsList } from "@formance/sdk-ledger/funcs/logsList.js";

// Use `LedgerClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ledgerClient = new LedgerClientCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await logsList(ledgerClient, "<value>");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // handle page
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ledger`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `cursor`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `pageSize`                                                                                                                                                                     | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.LogsListResponse](../../models/operations/logslistresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## export

### Example Usage

```typescript
import { LedgerClient } from "@formance/sdk-ledger";

const ledgerClient = new LedgerClient({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await ledgerClient.logs.export("<value>");

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { LedgerClientCore } from "@formance/sdk-ledger/core.js";
import { logsExport } from "@formance/sdk-ledger/funcs/logsExport.js";

// Use `LedgerClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ledgerClient = new LedgerClientCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await logsExport(ledgerClient, "<value>");

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
| `ledger`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[string](../../models/.md)\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.LedgerError | default            | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |

## ingest

### Example Usage

```typescript
import { LedgerClient } from "@formance/sdk-ledger";

const ledgerClient = new LedgerClient({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  await ledgerClient.logs.ingest("<value>", "<value>");

  
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { LedgerClientCore } from "@formance/sdk-ledger/core.js";
import { logsIngest } from "@formance/sdk-ledger/funcs/logsIngest.js";

// Use `LedgerClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ledgerClient = new LedgerClientCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await logsIngest(ledgerClient, "<value>", "<value>");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ledger`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `requestBody`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<void\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.LedgerError | default            | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |
