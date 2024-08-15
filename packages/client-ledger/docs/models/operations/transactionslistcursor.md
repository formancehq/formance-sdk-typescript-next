# TransactionsListCursor

## Example Usage

```typescript
import { TransactionsListCursor } from "@formance/sdk-ledger/models/operations";

let value: TransactionsListCursor = {
    data: [
        {
            timestamp: new Date("2022-08-26T15:17:21.807Z"),
            postings: [
                {
                    amount: 692472,
                    asset: "<value>",
                    destination: "<value>",
                    source: "<value>",
                },
            ],
            metadata: {
                key: "<value>",
            },
            id: "<id>",
            reverted: false,
        },
    ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `next`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `data`                                                             | [components.Transaction](../../models/components/transaction.md)[] | :heavy_check_mark:                                                 | N/A                                                                |