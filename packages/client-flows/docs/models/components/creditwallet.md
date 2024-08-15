# CreditWallet

## Example Usage

```typescript
import { CreditWallet } from "@formance/sdk-flows/models/components";

let value: CreditWallet = {
    data: {
        amount: {
            asset: "<value>",
            amount: 963663,
        },
        metadata: {
            key: "<value>",
        },
        source: {
            type: "ACCOUNT",
            identifier: "<value>",
        },
    },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [components.WalletsCreditWalletInput](../../models/components/walletscreditwalletinput.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |