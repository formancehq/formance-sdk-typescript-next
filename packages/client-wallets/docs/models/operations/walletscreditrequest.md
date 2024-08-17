# WalletsCreditRequest

## Example Usage

```typescript
import { WalletsCreditRequest } from "@formance/sdk-wallets/models/operations";

let value: WalletsCreditRequest = {
    id: "<id>",
    creditWalletInput: {
        amount: {
            asset: "<value>",
            amount: 793698,
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `creditWalletInput`                                                          | [components.CreditWalletInput](../../models/components/creditwalletinput.md) | :heavy_check_mark:                                                           | N/A                                                                          |