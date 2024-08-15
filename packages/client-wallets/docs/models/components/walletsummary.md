# WalletSummary

## Example Usage

```typescript
import { WalletSummary } from "@formance/sdk-wallets/models/components";

let value: WalletSummary = {
    balances: {
        name: "<value>",
        assets: {
            key: 616934,
        },
    },
    availableFunds: {
        key: 386489,
    },
    expiredFunds: {
        key: 943749,
    },
    expirableFunds: {
        key: 902599,
    },
    holdFunds: {
        key: 681820,
    },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `balances`                                                                     | [components.BalancesWithAssets](../../models/components/balanceswithassets.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `availableFunds`                                                               | Record<string, *number*>                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `expiredFunds`                                                                 | Record<string, *number*>                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `expirableFunds`                                                               | Record<string, *number*>                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `holdFunds`                                                                    | Record<string, *number*>                                                       | :heavy_check_mark:                                                             | N/A                                                                            |