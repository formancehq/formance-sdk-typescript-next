# RevertTransactionActionResponse

## Example Usage

```typescript
import { RevertTransactionActionResponse } from "@formance/sdk-ledger/models/components";

let value: RevertTransactionActionResponse = {
    responseType: "REVERT_TRANSACTION",
    data: {
        timestamp: new Date("2023-04-10T07:48:56.789Z"),
        postings: [
            {
                amount: 623564,
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

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `responseType`                                                                                                                   | [components.RevertTransactionActionResponseResponseType](../../models/components/reverttransactionactionresponseresponsetype.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `data`                                                                                                                           | [components.Transaction](../../models/components/transaction.md)                                                                 | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |