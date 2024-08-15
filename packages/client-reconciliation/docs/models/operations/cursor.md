# Cursor

## Example Usage

```typescript
import { Cursor } from "@formance/sdk-reconciliation/models/operations";

let value: Cursor = {
    data: [
        {
            id: "<id>",
            name: "<value>",
            createdAt: new Date("2023-02-26T06:46:35.231Z"),
            ledgerName: "<value>",
            ledgerQuery: {
                key: "<value>",
            },
            paymentsPoolID: "<value>",
        },
    ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `next`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `data`                                                   | [components.Policy](../../models/components/policy.md)[] | :heavy_check_mark:                                       | N/A                                                      |