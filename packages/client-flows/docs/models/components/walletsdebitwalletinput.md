# WalletsDebitWalletInput

## Example Usage

```typescript
import { WalletsDebitWalletInput } from "@formance/sdk-flows/models/components";

let value: WalletsDebitWalletInput = {
    amount: {
        asset: "<value>",
        amount: 209157,
    },
    metadata: {
        key: "<value>",
    },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `pending`                                                                                            | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `amount`                                                                                             | [components.WalletsDebitWalletInputAmount](../../models/components/walletsdebitwalletinputamount.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `metadata`                                                                                           | Record<string, *string*>                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `destination`                                                                                        | *components.WalletCounterpart*                                                                       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `balances`                                                                                           | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `timestamp`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |