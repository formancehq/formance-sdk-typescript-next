# TransactionsGetResponseBody

The request has succeeded.

## Example Usage

```typescript
import { TransactionsGetResponseBody } from "@formance/sdk-ledger/models/operations";

let value: TransactionsGetResponseBody = {
    data: {
        timestamp: new Date("2023-09-24T05:41:47.792Z"),
        postings: [
            {
                amount: 83112,
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [components.ExpendedTransaction](../../models/components/expendedtransaction.md) | :heavy_check_mark:                                                               | N/A                                                                              |