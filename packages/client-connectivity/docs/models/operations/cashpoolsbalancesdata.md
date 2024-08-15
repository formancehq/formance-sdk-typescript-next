# CashPoolsBalancesData

## Example Usage

```typescript
import { CashPoolsBalancesData } from "@formance/sdk-connectivity/models/operations";

let value: CashPoolsBalancesData = {
    balances: [
        {
            amount: 961571,
            asset: "<value>",
        },
    ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `balances`                                                         | [components.PoolBalance](../../models/components/poolbalance.md)[] | :heavy_check_mark:                                                 | N/A                                                                |