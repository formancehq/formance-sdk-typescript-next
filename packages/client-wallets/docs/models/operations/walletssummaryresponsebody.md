# WalletsSummaryResponseBody

The request has succeeded.

## Example Usage

```typescript
import { WalletsSummaryResponseBody } from "@formance/sdk-wallets/models/operations";

let value: WalletsSummaryResponseBody = {
    data: {
        balances: {
            name: "<value>",
            assets: {
                key: 944373,
            },
        },
        availableFunds: {
            key: 569574,
        },
        expiredFunds: {
            key: 739551,
        },
        expirableFunds: {
            key: 452109,
        },
        holdFunds: {
            key: 490459,
        },
    },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `data`                                                               | [components.WalletSummary](../../models/components/walletsummary.md) | :heavy_check_mark:                                                   | N/A                                                                  |