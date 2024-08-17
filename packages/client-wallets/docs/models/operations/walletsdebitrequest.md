# WalletsDebitRequest

## Example Usage

```typescript
import { WalletsDebitRequest } from "@formance/sdk-wallets/models/operations";

let value: WalletsDebitRequest = {
    id: "<id>",
    debitWalletInput: {
        amount: {
            asset: "<value>",
            amount: 223924,
        },
        metadata: {
            key: "<value>",
        },
    },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `debitWalletInput`                                                         | [components.DebitWalletInput](../../models/components/debitwalletinput.md) | :heavy_check_mark:                                                         | N/A                                                                        |