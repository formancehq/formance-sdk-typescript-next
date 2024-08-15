# TransactionsListResponseBody

The request has succeeded.

## Example Usage

```typescript
import { TransactionsListResponseBody } from "@formance/sdk-ledger/models/operations";

let value: TransactionsListResponseBody = {
    cursor: {
        data: [
            {
                timestamp: new Date("2023-09-12T10:43:40.519Z"),
                postings: [
                    {
                        amount: 566602,
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
    },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `cursor`                                                                               | [operations.TransactionsListCursor](../../models/operations/transactionslistcursor.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |