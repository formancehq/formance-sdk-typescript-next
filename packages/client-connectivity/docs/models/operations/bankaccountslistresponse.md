# BankAccountsListResponse

## Example Usage

```typescript
import { BankAccountsListResponse } from "@formance/sdk-connectivity/models/operations";

let value: BankAccountsListResponse = {
    result: {
        cursor: {
            data: [
                {
                    id: "<id>",
                    name: "<value>",
                    createdAt: new Date("2024-03-11T05:07:47.206Z"),
                    country: "Venezuela",
                    connectorID: "<value>",
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [operations.BankAccountsListResponseBody](../../models/operations/bankaccountslistresponsebody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |