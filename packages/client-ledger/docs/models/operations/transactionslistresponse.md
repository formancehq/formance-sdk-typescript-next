# TransactionsListResponse

## Example Usage

```typescript
import { TransactionsListResponse } from "@formance/sdk-ledger/models/operations";

let value: TransactionsListResponse = {
    result: {
        cursor: {
            data: [
                {
                    timestamp: new Date("2024-08-06T03:39:28.235Z"),
                    postings: [
                        {
                            amount: 265389,
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
    },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [operations.TransactionsListResponseBody](../../models/operations/transactionslistresponsebody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |