# AccountsBalancesResponseBody

The request has succeeded.

## Example Usage

```typescript
import { AccountsBalancesResponseBody } from "@formance/sdk-connectivity/models/operations";

let value: AccountsBalancesResponseBody = {
    cursor: {
        data: [
            {
                accountId: "<value>",
                createdAt: new Date("2023-07-03T00:41:29.875Z"),
                lastUpdatedAt: new Date("2023-11-13T03:22:04.837Z"),
                currency: "Aruban Guilder",
                asset: "<value>",
                balance: 577229,
            },
        ],
    },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `cursor`                                                                               | [operations.AccountsBalancesCursor](../../models/operations/accountsbalancescursor.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |