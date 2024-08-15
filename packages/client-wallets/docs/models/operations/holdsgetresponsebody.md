# HoldsGetResponseBody

The request has succeeded.

## Example Usage

```typescript
import { HoldsGetResponseBody } from "@formance/sdk-wallets/models/operations";

let value: HoldsGetResponseBody = {
    data: {
        id: "abd44269-802d-4502-a94b-b4f63c969e9a",
        walletID: "<value>",
        metadata: {
            key: "<value>",
        },
        description: "Enhanced tertiary time-frame",
        destination: {
            type: "WALLET",
            identifier: "<value>",
        },
    },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `data`                                             | [components.Hold](../../models/components/hold.md) | :heavy_check_mark:                                 | N/A                                                |