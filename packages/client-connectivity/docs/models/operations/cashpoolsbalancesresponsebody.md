# CashPoolsBalancesResponseBody

The request has succeeded.

## Example Usage

```typescript
import { CashPoolsBalancesResponseBody } from "@formance/sdk-connectivity/models/operations";

let value: CashPoolsBalancesResponseBody = {
    data: {
        balances: [
            {
                amount: 455169,
                asset: "<value>",
            },
        ],
    },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [operations.CashPoolsBalancesData](../../models/operations/cashpoolsbalancesdata.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |