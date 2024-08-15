# AccountsGetResponseBody

The request has succeeded.

## Example Usage

```typescript
import { AccountsGetResponseBody } from "@formance/sdk-connectivity/models/operations";

let value: AccountsGetResponseBody = {
    data: {
        id: "<id>",
        createdAt: new Date("2023-10-29T15:29:00.345Z"),
        reference: "<value>",
        connectorID: "<value>",
        defaultCurrency: "<value>",
        defaultAsset: "<value>",
        accountName: "<value>",
        type: "EXTERNAL",
        pools: ["<value>"],
        metadata: {
            key: "<value>",
        },
        raw: "<value>",
    },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `data`                                                   | [components.Account](../../models/components/account.md) | :heavy_check_mark:                                       | N/A                                                      |