# WalletsCreditWalletInput

## Example Usage

```typescript
import { WalletsCreditWalletInput } from "@formance/sdk-flows/models/components";

let value: WalletsCreditWalletInput = {
    amount: {
        asset: "<value>",
        amount: 584476,
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `amount`                                                                                               | [components.WalletsCreditWalletInputAmount](../../models/components/walletscreditwalletinputamount.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `metadata`                                                                                             | Record<string, *string*>                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `source`                                                                                               | *components.WalletCounterpart*                                                                         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `reference`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `balance`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `tinestamp`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |