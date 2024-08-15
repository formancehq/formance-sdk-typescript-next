# AccountsAddMetadataRequest

## Example Usage

```typescript
import { AccountsAddMetadataRequest } from "@formance/sdk-ledger/models/operations";

let value: AccountsAddMetadataRequest = {
    ledger: "<value>",
    address: "2619 McCullough Flat",
    requestBody: {
        metadata: {
            key: "<value>",
        },
    },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `ledger`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `address`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `requestBody`                                                                                          | [operations.AccountsAddMetadataRequestBody](../../models/operations/accountsaddmetadatarequestbody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |