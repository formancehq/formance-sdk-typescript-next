# AccountsCreateResponseBody

The request has succeeded.

## Example Usage

```typescript
import { AccountsCreateResponseBody } from "@formance/sdk-connectivity/models/operations";

let value: AccountsCreateResponseBody = {
    data: {
        id: "<id>",
        createdAt: new Date("2024-10-31T18:07:33.348Z"),
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