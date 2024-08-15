# Output4

## Example Usage

```typescript
import { Output4 } from "@formance/sdk-flows/models/components";

let value: Output4 = {
    debitWallet: {
        data: {
            id: "8b711e5b-7fd2-4ed0-a892-1cddc692601f",
            walletID: "<value>",
            metadata: {
                key: "<value>",
            },
            description: "Quality-focused explicit hub",
            destination: {
                type: "ACCOUNT",
                identifier: "<value>",
            },
        },
    },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `debitWallet`                                                                | [components.OutputDebitWallet](../../models/components/outputdebitwallet.md) | :heavy_check_mark:                                                           | N/A                                                                          |