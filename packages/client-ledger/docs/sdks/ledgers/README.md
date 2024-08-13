# Ledgers
(*ledgers*)

### Available Operations

* [list](#list)
* [get](#get)
* [create](#create)
* [bulk](#bulk)
* [info](#info)
* [addMetadata](#addmetadata)
* [removeMetadata](#removemetadata)
* [stats](#stats)

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
  const result = await ledgerClient.ledgers.list();

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
import { ledgersList } from "@formance/sdk-ledger/funcs/ledgersList.js";

// Use `LedgerClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ledgerClient = new LedgerClientCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await ledgersList(ledgerClient);

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
| `cursor`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `pageSize`                                                                                                                                                                     | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.LedgersListResponse](../../models/operations/ledgerslistresponse.md)\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.LedgerError | default            | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |

## get

### Example Usage

```typescript
import { LedgerClient } from "@formance/sdk-ledger";

const ledgerClient = new LedgerClient({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await ledgerClient.ledgers.get("<value>");

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { LedgerClientCore } from "@formance/sdk-ledger/core.js";
import { ledgersGet } from "@formance/sdk-ledger/funcs/ledgersGet.js";

// Use `LedgerClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ledgerClient = new LedgerClientCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await ledgersGet(ledgerClient, "<value>");

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

**Promise\<[operations.LedgersGetResponseBody](../../models/operations/ledgersgetresponsebody.md)\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.LedgerError | default            | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |

## create

### Example Usage

```typescript
import { LedgerClient } from "@formance/sdk-ledger";

const ledgerClient = new LedgerClient({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  await ledgerClient.ledgers.create("<value>", {});

  
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { LedgerClientCore } from "@formance/sdk-ledger/core.js";
import { ledgersCreate } from "@formance/sdk-ledger/funcs/ledgersCreate.js";

// Use `LedgerClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ledgerClient = new LedgerClientCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await ledgersCreate(ledgerClient, "<value>", {});

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
| `requestBody`                                                                                                                                                                  | [operations.LedgersCreateRequestBody](../../models/operations/ledgerscreaterequestbody.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
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

## bulk

### Example Usage

```typescript
import { LedgerClient } from "@formance/sdk-ledger";

const ledgerClient = new LedgerClient({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await ledgerClient.ledgers.bulk("<value>", [
      {
        action: "ADD_METADATA",
      data:     {
            targetType: "ACCOUNT",
            targetId: "<value>",
            metadata: {
              "key": "<value>",
            },
          },
      },
  ]);

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { LedgerClientCore } from "@formance/sdk-ledger/core.js";
import { ledgersBulk } from "@formance/sdk-ledger/funcs/ledgersBulk.js";

// Use `LedgerClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ledgerClient = new LedgerClientCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await ledgersBulk(ledgerClient, "<value>", [
      {
        action: "CREATE_TRANSACTION",
      data:     {
            metadata: {
              "key": "<value>",
            },
            script: {
              plain: "<value>",
            },
          },
      },
  ]);

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
| `requestBody`                                                                                                                                                                  | *components.BulkAction*[]                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.LedgersBulkResponseBody](../../models/operations/ledgersbulkresponsebody.md)\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.LedgerError | default            | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |

## info

### Example Usage

```typescript
import { LedgerClient } from "@formance/sdk-ledger";

const ledgerClient = new LedgerClient({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await ledgerClient.ledgers.info("<value>");

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { LedgerClientCore } from "@formance/sdk-ledger/core.js";
import { ledgersInfo } from "@formance/sdk-ledger/funcs/ledgersInfo.js";

// Use `LedgerClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ledgerClient = new LedgerClientCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await ledgersInfo(ledgerClient, "<value>");

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

**Promise\<[operations.LedgersInfoResponseBody](../../models/operations/ledgersinforesponsebody.md)\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.LedgerError | default            | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |

## addMetadata

### Example Usage

```typescript
import { LedgerClient } from "@formance/sdk-ledger";

const ledgerClient = new LedgerClient({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  await ledgerClient.ledgers.addMetadata("<value>", {
    "key": "<value>",
  });

  
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { LedgerClientCore } from "@formance/sdk-ledger/core.js";
import { ledgersAddMetadata } from "@formance/sdk-ledger/funcs/ledgersAddMetadata.js";

// Use `LedgerClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ledgerClient = new LedgerClientCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await ledgersAddMetadata(ledgerClient, "<value>", {
    "key": "<value>",
  });

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
| `requestBody`                                                                                                                                                                  | Record<string, *string*>                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
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

## removeMetadata

### Example Usage

```typescript
import { LedgerClient } from "@formance/sdk-ledger";

const ledgerClient = new LedgerClient({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  await ledgerClient.ledgers.removeMetadata("<value>", "<value>");

  
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { LedgerClientCore } from "@formance/sdk-ledger/core.js";
import { ledgersRemoveMetadata } from "@formance/sdk-ledger/funcs/ledgersRemoveMetadata.js";

// Use `LedgerClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ledgerClient = new LedgerClientCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await ledgersRemoveMetadata(ledgerClient, "<value>", "<value>");

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
| `key`                                                                                                                                                                          | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
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

## stats

### Example Usage

```typescript
import { LedgerClient } from "@formance/sdk-ledger";

const ledgerClient = new LedgerClient({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await ledgerClient.ledgers.stats("<value>");

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { LedgerClientCore } from "@formance/sdk-ledger/core.js";
import { ledgersStats } from "@formance/sdk-ledger/funcs/ledgersStats.js";

// Use `LedgerClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ledgerClient = new LedgerClientCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await ledgersStats(ledgerClient, "<value>");

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

**Promise\<[operations.LedgersStatsResponseBody](../../models/operations/ledgersstatsresponsebody.md)\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.LedgerError | default            | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |
