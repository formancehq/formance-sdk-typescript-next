# DebitWallet

## Example Usage

```typescript
import { DebitWallet } from "@formance/sdk-flows/models/components";

let value: DebitWallet = {
    data: {
        amount: {
            asset: "<value>",
            amount: 891773,
        },
        metadata: {
            key: "<value>",
        },
    },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `data`                                                                                   | [components.WalletsDebitWalletInput](../../models/components/walletsdebitwalletinput.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |