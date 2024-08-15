# TransactionsAddMetadataRequest

## Example Usage

```typescript
import { TransactionsAddMetadataRequest } from "@formance/sdk-ledger/models/operations";

let value: TransactionsAddMetadataRequest = {
    ledger: "<value>",
    id: 929297,
    requestBody: {
        metadata: {
            key: "<value>",
        },
    },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `ledger`                                                                                                       | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `id`                                                                                                           | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `dryRun`                                                                                                       | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `idempotencyKey`                                                                                               | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `requestBody`                                                                                                  | [operations.TransactionsAddMetadataRequestBody](../../models/operations/transactionsaddmetadatarequestbody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |