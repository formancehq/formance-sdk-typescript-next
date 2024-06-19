# TransferInitiations
(*transferInitiations*)

### Available Operations

* [list](#list)
* [create](#create)
* [get](#get)
* [delete](#delete)
* [retry](#retry)
* [reverse](#reverse)
* [updateStatus](#updatestatus)

## list

### Example Usage

```typescript
import { PaymentsClient } from "@formance/sdk-payments";

const paymentsClient = new PaymentsClient({
  security: {
    formanceOAuth: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
      tokenURL: "<YOUR_TOKEN_URL_HERE>",
    },
  },
});

async function run() {
  const result = await paymentsClient.transferInitiations.list("<value>", 768578, [
    "<value>",
  ], {
    "key": "<value>",
  });

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
| `sort`                                                                                                                                                                         | *string*[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `query`                                                                                                                                                                        | Record<string, *any*>                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.TransferInitiationsListResponse](../../models/operations/transferinitiationslistresponse.md)\>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.PaymentsError | default              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## create

### Example Usage

```typescript
import { PaymentsClient } from "@formance/sdk-payments";
import { TransferInitiationType } from "@formance/sdk-payments/models/components";

const paymentsClient = new PaymentsClient({
  security: {
    formanceOAuth: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
      tokenURL: "<YOUR_TOKEN_URL_HERE>",
    },
  },
});

async function run() {
  const result = await paymentsClient.transferInitiations.create({
    reference: "<value>",
    scheduledAt: new Date("2023-06-18T07:14:55.676Z"),
    description: "Multi-tiered motivating standardization",
    sourceAccountID: "<value>",
    destinationAccountID: "<value>",
    type: TransferInitiationType.Transfer,
    amount: 288408,
    asset: "<value>",
    validated: false,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TransferInitiationsCreateRequestBody](../../models/operations/transferinitiationscreaterequestbody.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.TransferInitiationsCreateResponseBody](../../models/operations/transferinitiationscreateresponsebody.md)\>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.PaymentsError | default              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## get

### Example Usage

```typescript
import { PaymentsClient } from "@formance/sdk-payments";

const paymentsClient = new PaymentsClient({
  security: {
    formanceOAuth: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
      tokenURL: "<YOUR_TOKEN_URL_HERE>",
    },
  },
});

async function run() {
  const result = await paymentsClient.transferInitiations.get("<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transferId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.TransferInitiationsGetResponseBody](../../models/operations/transferinitiationsgetresponsebody.md)\>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.PaymentsError | default              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## delete

### Example Usage

```typescript
import { PaymentsClient } from "@formance/sdk-payments";

const paymentsClient = new PaymentsClient({
  security: {
    formanceOAuth: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
      tokenURL: "<YOUR_TOKEN_URL_HERE>",
    },
  },
});

async function run() {
  await paymentsClient.transferInitiations.delete("<value>");

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transferId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<void\>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.PaymentsError | default              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## retry

### Example Usage

```typescript
import { PaymentsClient } from "@formance/sdk-payments";

const paymentsClient = new PaymentsClient({
  security: {
    formanceOAuth: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
      tokenURL: "<YOUR_TOKEN_URL_HERE>",
    },
  },
});

async function run() {
  await paymentsClient.transferInitiations.retry("<value>");

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transferId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<void\>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.PaymentsError | default              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## reverse

### Example Usage

```typescript
import { PaymentsClient } from "@formance/sdk-payments";

const paymentsClient = new PaymentsClient({
  security: {
    formanceOAuth: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
      tokenURL: "<YOUR_TOKEN_URL_HERE>",
    },
  },
});

async function run() {
  await paymentsClient.transferInitiations.reverse("<value>", {
    reference: "<value>",
    description: "Innovative system-worthy groupware",
    amount: 233332,
    asset: "<value>",
  });

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transferId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `requestBody`                                                                                                                                                                  | [operations.TransferInitiationsReverseRequestBody](../../models/operations/transferinitiationsreverserequestbody.md)                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<void\>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.PaymentsError | default              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## updateStatus

### Example Usage

```typescript
import { PaymentsClient } from "@formance/sdk-payments";
import { TransferInitiationWritableStatus } from "@formance/sdk-payments/models/components";

const paymentsClient = new PaymentsClient({
  security: {
    formanceOAuth: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
      tokenURL: "<YOUR_TOKEN_URL_HERE>",
    },
  },
});

async function run() {
  await paymentsClient.transferInitiations.updateStatus("<value>", {
    status: TransferInitiationWritableStatus.Rejected,
  });

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transferId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `requestBody`                                                                                                                                                                  | [operations.TransferInitiationsUpdateStatusRequestBody](../../models/operations/transferinitiationsupdatestatusrequestbody.md)                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<void\>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.PaymentsError | default              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |
