# Balances
(*balances*)

### Available Operations

* [aggregate](#aggregate)
* [volumes](#volumes)

## aggregate

### Example Usage

```typescript
import { LedgerClient } from "@formance/sdk-ledger";

const ledgerClient = new LedgerClient({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await ledgerClient.balances.aggregate("<value>", {
    "key": "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { LedgerClientCore } from "@formance/sdk-ledger/core.js";
import { balancesAggregate } from "@formance/sdk-ledger/funcs/balancesAggregate.js";

// Use `LedgerClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ledgerClient = new LedgerClientCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await balancesAggregate(ledgerClient, "<value>", {
    "key": "<value>",
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
| `ledger`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `query`                                                                                                                                                                        | Record<string, *any*>                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `pit`                                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `useInsertionDate`                                                                                                                                                             | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.BalancesAggregateResponseBody](../../models/operations/balancesaggregateresponsebody.md)\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.LedgerError | default            | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |

## volumes

### Example Usage

```typescript
import { LedgerClient } from "@formance/sdk-ledger";

const ledgerClient = new LedgerClient({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await ledgerClient.balances.volumes({
    ledger: "<value>",
    query: {
      "key": "<value>",
    },
  });

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
import { balancesVolumes } from "@formance/sdk-ledger/funcs/balancesVolumes.js";

// Use `LedgerClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ledgerClient = new LedgerClientCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await balancesVolumes(ledgerClient, {
    ledger: "<value>",
    query: {
      "key": "<value>",
    },
  });

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
| `request`                                                                                                                                                                      | [operations.BalancesVolumesRequest](../../models/operations/balancesvolumesrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.BalancesVolumesResponse](../../models/operations/balancesvolumesresponse.md)\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.LedgerError | default            | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |
