# CreditWalletInput

## Example Usage

```typescript
import { CreditWalletInput } from "@formance/sdk-wallets/models/components";

let value: CreditWalletInput = {
    amount: {
        asset: "<value>",
        amount: 617636,
    },
    metadata: {
        key: "<value>",
    },
    source: {
        type: "ACCOUNT",
        identifier: "<value>",
    },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `amount`                                               | [components.Amount](../../models/components/amount.md) | :heavy_check_mark:                                     | N/A                                                    |
| `metadata`                                             | Record<string, *string*>                               | :heavy_check_mark:                                     | N/A                                                    |
| `source`                                               | *components.WalletCounterpart*                         | :heavy_check_mark:                                     | N/A                                                    |
| `reference`                                            | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `balance`                                              | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `tinestamp`                                            | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |