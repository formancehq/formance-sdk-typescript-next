# Cursor

## Example Usage

```typescript
import { Cursor } from "@formance/sdk-connectivity/models/operations";

let value: Cursor = {
    data: [
        {
            id: "<id>",
            createdAt: new Date("2022-07-16T17:18:43.234Z"),
            reference: "<value>",
            connectorID: "<value>",
            defaultCurrency: "<value>",
            defaultAsset: "<value>",
            accountName: "<value>",
            type: "INTERNAL",
            pools: ["<value>"],
            metadata: {
                key: "<value>",
            },
            raw: "<value>",
        },
    ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `next`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `data`                                                     | [components.Account](../../models/components/account.md)[] | :heavy_check_mark:                                         | N/A                                                        |