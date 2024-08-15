# TransactionsCreateRequest

## Example Usage

```typescript
import { TransactionsCreateRequest } from "@formance/sdk-ledger/models/operations";

let value: TransactionsCreateRequest = {
    ledger: "<value>",
    requestBody: {
        metadata: {
            key: "<value>",
        },
        script: {
            plain: "<value>",
        },
    },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `ledger`                                   | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `idempotencyKey`                           | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `dryRun`                                   | *boolean*                                  | :heavy_minus_sign:                         | N/A                                        |
| `requestBody`                              | *operations.TransactionsCreateRequestBody* | :heavy_check_mark:                         | N/A                                        |