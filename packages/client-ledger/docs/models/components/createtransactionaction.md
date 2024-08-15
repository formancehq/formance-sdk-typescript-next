# CreateTransactionAction

## Example Usage

```typescript
import { CreateTransactionAction } from "@formance/sdk-ledger/models/components";

let value: CreateTransactionAction = {
    action: "CREATE_TRANSACTION",
    data: {
        metadata: {
            key: "<value>",
        },
        postings: [
            {
                amount: 891773,
                asset: "<value>",
                destination: "<value>",
                source: "<value>",
            },
        ],
    },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `action`                                               | [components.Action](../../models/components/action.md) | :heavy_check_mark:                                     | N/A                                                    |
| `ik`                                                   | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `data`                                                 | *components.Data*                                      | :heavy_check_mark:                                     | N/A                                                    |