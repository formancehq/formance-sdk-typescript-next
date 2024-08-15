# Five

## Example Usage

```typescript
import { Five } from "@formance/sdk-flows/models/components";

let value: Five = {
    creditWallet: {
        data: {
            amount: {
                asset: "<value>",
                amount: 383441,
            },
            metadata: {
                key: "<value>",
            },
            source: {
                type: "ACCOUNT",
                identifier: "<value>",
            },
        },
    },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `creditWallet`                                                     | [components.CreditWallet](../../models/components/creditwallet.md) | :heavy_check_mark:                                                 | N/A                                                                |