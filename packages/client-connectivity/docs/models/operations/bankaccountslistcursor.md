# BankAccountsListCursor

## Example Usage

```typescript
import { BankAccountsListCursor } from "@formance/sdk-connectivity/models/operations";

let value: BankAccountsListCursor = {
    data: [
        {
            id: "<id>",
            name: "<value>",
            createdAt: new Date("2023-08-11T01:17:06.359Z"),
            country: "Switzerland",
            connectorID: "<value>",
        },
    ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `next`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `data`                                                             | [components.BankAccount](../../models/components/bankaccount.md)[] | :heavy_check_mark:                                                 | N/A                                                                |