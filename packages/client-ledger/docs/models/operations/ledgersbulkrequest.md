# LedgersBulkRequest

## Example Usage

```typescript
import { LedgersBulkRequest } from "@formance/sdk-ledger/models/operations";

let value: LedgersBulkRequest = {
    ledger: "<value>",
    requestBody: [
        {
            action: "ADD_METADATA",
            data: {
                targetType: "TRANSACTION",
                targetId: 149675,
                metadata: {
                    key: "<value>",
                },
            },
        },
    ],
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `ledger`                  | *string*                  | :heavy_check_mark:        | N/A                       |
| `requestBody`             | *components.BulkAction*[] | :heavy_check_mark:        | N/A                       |