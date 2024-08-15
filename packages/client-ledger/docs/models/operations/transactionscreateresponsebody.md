# TransactionsCreateResponseBody

The request has succeeded.

## Example Usage

```typescript
import { TransactionsCreateResponseBody } from "@formance/sdk-ledger/models/operations";

let value: TransactionsCreateResponseBody = {
    data: {
        timestamp: new Date("2024-10-01T17:28:50.340Z"),
        postings: [
            {
                amount: 93940,
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
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [components.Transaction](../../models/components/transaction.md) | :heavy_check_mark:                                               | N/A                                                              |