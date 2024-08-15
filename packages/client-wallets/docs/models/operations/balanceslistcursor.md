# BalancesListCursor

## Example Usage

```typescript
import { BalancesListCursor } from "@formance/sdk-wallets/models/operations";

let value: BalancesListCursor = {
    data: [
        {
            name: "<value>",
        },
    ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `next`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `data`                                                     | [components.Balance](../../models/components/balance.md)[] | :heavy_check_mark:                                         | N/A                                                        |