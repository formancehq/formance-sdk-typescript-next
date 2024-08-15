# DebitWalletInput

## Example Usage

```typescript
import { DebitWalletInput } from "@formance/sdk-wallets/models/components";

let value: DebitWalletInput = {
    amount: {
        asset: "<value>",
        amount: 222321,
    },
    metadata: {
        key: "<value>",
    },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `pending`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | [components.DebitWalletInputAmount](../../models/components/debitwalletinputamount.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `destination`                                                                                 | *components.WalletCounterpart*                                                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `balances`                                                                                    | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |