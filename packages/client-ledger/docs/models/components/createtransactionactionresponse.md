# CreateTransactionActionResponse

## Example Usage

```typescript
import { CreateTransactionActionResponse } from "@formance/sdk-ledger/models/components";

let value: CreateTransactionActionResponse = {
    responseType: "CREATE_TRANSACTION",
    data: {
        timestamp: new Date("2024-07-14T07:33:58.078Z"),
        postings: [
            {
                amount: 602763,
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

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `responseType`                                                     | [components.ResponseType](../../models/components/responsetype.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.Transaction](../../models/components/transaction.md)   | :heavy_check_mark:                                                 | N/A                                                                |