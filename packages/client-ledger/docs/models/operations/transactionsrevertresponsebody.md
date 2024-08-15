# TransactionsRevertResponseBody

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { TransactionsRevertResponseBody } from "@formance/sdk-ledger/models/operations";

let value: TransactionsRevertResponseBody = {
    data: {
        timestamp: new Date("2022-12-16T03:38:16.047Z"),
        postings: [
            {
                amount: 9356,
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