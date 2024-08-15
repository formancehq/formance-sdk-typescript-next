# AccountsBalancesCursor

## Example Usage

```typescript
import { AccountsBalancesCursor } from "@formance/sdk-connectivity/models/operations";

let value: AccountsBalancesCursor = {
    data: [
        {
            accountId: "<value>",
            createdAt: new Date("2023-10-16T22:25:26.323Z"),
            lastUpdatedAt: new Date("2022-02-04T21:29:27.797Z"),
            currency: "Manat",
            asset: "<value>",
            balance: 164694,
        },
    ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `next`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `data`                                                                   | [components.AccountBalance](../../models/components/accountbalance.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |