# Balances
(*balances*)

### Available Operations

* [create](#create)
* [list](#list)
* [get](#get)

## create

### Example Usage

```typescript
import { WalletsClient } from "@formance/sdk-wallets";

const walletsClient = new WalletsClient({
  security: {
    formanceOAuth: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
      tokenURL: "<YOUR_TOKEN_URL_HERE>",
    },
  },
});

async function run() {
  const result = await walletsClient.balances.create("<value>", {
    name: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { WalletsClientCore } from "@formance/sdk-wallets/core.js";
import { balancesCreate } from "@formance/sdk-wallets/funcs/balancesCreate.js";

// Use `WalletsClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const walletsClient = new WalletsClientCore({
  security: {
    formanceOAuth: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
      tokenURL: "<YOUR_TOKEN_URL_HERE>",
    },
  },
});

async function run() {
  const res = await balancesCreate(walletsClient, "<value>", {
    name: "<value>",
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
| `walletId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `requestBody`                                                                                                                                                                  | [operations.BalancesCreateRequestBody](../../models/operations/balancescreaterequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.BalancesCreateResponseBody](../../models/operations/balancescreateresponsebody.md)\>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.WalletsError | default             | application/json    |
| errors.SDKError     | 4xx-5xx             | */*                 |

## list

### Example Usage

```typescript
import { WalletsClient } from "@formance/sdk-wallets";

const walletsClient = new WalletsClient({
  security: {
    formanceOAuth: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
      tokenURL: "<YOUR_TOKEN_URL_HERE>",
    },
  },
});

async function run() {
  const result = await walletsClient.balances.list("<value>");

  for await (const page of result) {
    // handle page
  }
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { WalletsClientCore } from "@formance/sdk-wallets/core.js";
import { balancesList } from "@formance/sdk-wallets/funcs/balancesList.js";

// Use `WalletsClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const walletsClient = new WalletsClientCore({
  security: {
    formanceOAuth: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
      tokenURL: "<YOUR_TOKEN_URL_HERE>",
    },
  },
});

async function run() {
  const res = await balancesList(walletsClient, "<value>");

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
| `walletId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `cursor`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `pageSize`                                                                                                                                                                     | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.BalancesListResponse](../../models/operations/balanceslistresponse.md)\>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.WalletsError | default             | application/json    |
| errors.SDKError     | 4xx-5xx             | */*                 |

## get

### Example Usage

```typescript
import { WalletsClient } from "@formance/sdk-wallets";

const walletsClient = new WalletsClient({
  security: {
    formanceOAuth: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
      tokenURL: "<YOUR_TOKEN_URL_HERE>",
    },
  },
});

async function run() {
  const result = await walletsClient.balances.get("<value>", "<value>");

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { WalletsClientCore } from "@formance/sdk-wallets/core.js";
import { balancesGet } from "@formance/sdk-wallets/funcs/balancesGet.js";

// Use `WalletsClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const walletsClient = new WalletsClientCore({
  security: {
    formanceOAuth: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
      tokenURL: "<YOUR_TOKEN_URL_HERE>",
    },
  },
});

async function run() {
  const res = await balancesGet(walletsClient, "<value>", "<value>");

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
| `walletId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `balanceName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.BalancesGetResponseBody](../../models/operations/balancesgetresponsebody.md)\>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.WalletsError | default             | application/json    |
| errors.SDKError     | 4xx-5xx             | */*                 |
