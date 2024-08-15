# OutputDebitWallet

## Example Usage

```typescript
import { OutputDebitWallet } from "@formance/sdk-flows/models/components";

let value: OutputDebitWallet = {
    data: {
        id: "4ba4469b-6e21-4419-9989-0afa563e2516",
        walletID: "<value>",
        metadata: {
            key: "<value>",
        },
        description: "Visionary tertiary data-warehouse",
        destination: {
            type: "WALLET",
            identifier: "<value>",
        },
    },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [components.WalletsHold](../../models/components/walletshold.md) | :heavy_check_mark:                                               | N/A                                                              |