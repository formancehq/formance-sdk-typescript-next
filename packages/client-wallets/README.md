# @formance/sdk-wallets

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/advanced-setup/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @formance/sdk-wallets
```

### PNPM

```bash
pnpm add @formance/sdk-wallets
```

### Bun

```bash
bun add @formance/sdk-wallets
```

### Yarn

```bash
yarn add @formance/sdk-wallets zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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
    const result = await walletsClient.info();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [WalletsClient SDK](docs/sdks/walletsclient/README.md)

* [info](docs/sdks/walletsclient/README.md#info)

### [holds](docs/sdks/holds/README.md)

* [list](docs/sdks/holds/README.md#list)
* [get](docs/sdks/holds/README.md#get)
* [confirm](docs/sdks/holds/README.md#confirm)
* [cancel](docs/sdks/holds/README.md#cancel)

### [wallets](docs/sdks/wallets/README.md)

* [list](docs/sdks/wallets/README.md#list)
* [create](docs/sdks/wallets/README.md#create)
* [get](docs/sdks/wallets/README.md#get)
* [update](docs/sdks/wallets/README.md#update)
* [credit](docs/sdks/wallets/README.md#credit)
* [debit](docs/sdks/wallets/README.md#debit)
* [summary](docs/sdks/wallets/README.md#summary)

### [balances](docs/sdks/balances/README.md)

* [create](docs/sdks/balances/README.md#create)
* [list](docs/sdks/balances/README.md#list)
* [get](docs/sdks/balances/README.md#get)
<!-- End Available Resources and Operations [operations] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

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
    const result = await walletsClient.holds.list("<value>");

    for await (const page of result) {
        // handle page
    }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
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
    const result = await walletsClient.info({
        retries: {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        },
    });

    // Handle the result
    console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { WalletsClient } from "@formance/sdk-wallets";

const walletsClient = new WalletsClient({
    retryConfig: {
        strategy: "backoff",
        backoff: {
            initialInterval: 1,
            maxInterval: 50,
            exponent: 1.1,
            maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
    },
    security: {
        formanceOAuth: {
            clientID: "<YOUR_CLIENT_ID_HERE>",
            clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
            tokenURL: "<YOUR_TOKEN_URL_HERE>",
        },
    },
});

async function run() {
    const result = await walletsClient.info();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.WalletsError | default             | application/json    |
| errors.SDKError     | 4xx-5xx             | */*                 |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { WalletsClient } from "@formance/sdk-wallets";
import { SDKValidationError } from "@formance/sdk-wallets/models/errors";

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
    let result;
    try {
        result = await walletsClient.holds.list("<value>");
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.WalletsError: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    for await (const page of result) {
        // handle page
    }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `http://localhost` | None |

```typescript
import { WalletsClient } from "@formance/sdk-wallets";

const walletsClient = new WalletsClient({
    serverIdx: 0,
    security: {
        formanceOAuth: {
            clientID: "<YOUR_CLIENT_ID_HERE>",
            clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
            tokenURL: "<YOUR_TOKEN_URL_HERE>",
        },
    },
});

async function run() {
    const result = await walletsClient.info();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { WalletsClient } from "@formance/sdk-wallets";

const walletsClient = new WalletsClient({
    serverURL: "http://localhost",
    security: {
        formanceOAuth: {
            clientID: "<YOUR_CLIENT_ID_HERE>",
            clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
            tokenURL: "<YOUR_TOKEN_URL_HERE>",
        },
    },
});

async function run() {
    const result = await walletsClient.info();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { WalletsClient } from "@formance/sdk-wallets";
import { HTTPClient } from "@formance/sdk-wallets/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new WalletsClient({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name            | Type            | Scheme          |
| --------------- | --------------- | --------------- |
| `formanceOAuth` | oauth2          | OAuth2 token    |
| `bearerAuth`    | http            | HTTP Bearer     |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
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
    const result = await walletsClient.info();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

To log HTTP requests and responses, you can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { WalletsClient } from "@formance/sdk-wallets";

const sdk = new WalletsClient({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [balancesCreate](docs/sdks/balances/README.md#create)
- [balancesGet](docs/sdks/balances/README.md#get)
- [balancesList](docs/sdks/balances/README.md#list)
- [holdsCancel](docs/sdks/holds/README.md#cancel)
- [holdsConfirm](docs/sdks/holds/README.md#confirm)
- [holdsGet](docs/sdks/holds/README.md#get)
- [holdsList](docs/sdks/holds/README.md#list)
- [info](docs/sdks/walletsclient/README.md#info)
- [walletsCreate](docs/sdks/wallets/README.md#create)
- [walletsCredit](docs/sdks/wallets/README.md#credit)
- [walletsDebit](docs/sdks/wallets/README.md#debit)
- [walletsGet](docs/sdks/wallets/README.md#get)
- [walletsList](docs/sdks/wallets/README.md#list)
- [walletsSummary](docs/sdks/wallets/README.md#summary)
- [walletsUpdate](docs/sdks/wallets/README.md#update)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
