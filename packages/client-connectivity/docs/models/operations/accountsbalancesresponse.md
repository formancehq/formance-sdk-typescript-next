# AccountsBalancesResponse

## Example Usage

```typescript
import { AccountsBalancesResponse } from "@formance/sdk-connectivity/models/operations";

let value: AccountsBalancesResponse = {
    result: {
        cursor: {
            data: [
                {
                    accountId: "<value>",
                    createdAt: new Date("2024-02-06T05:04:33.000Z"),
                    lastUpdatedAt: new Date("2022-09-18T17:31:57.372Z"),
                    currency: "Zambian Kwacha",
                    asset: "<value>",
                    balance: 934214,
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [operations.AccountsBalancesResponseBody](../../models/operations/accountsbalancesresponsebody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |