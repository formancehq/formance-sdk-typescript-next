# WalletsDebitResponseBody

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { WalletsDebitResponseBody } from "@formance/sdk-wallets/models/operations";

let value: WalletsDebitResponseBody = {
    data: {
        id: "d5fe9b90-c289-409b-bfe4-9a8d9cbf4863",
        walletID: "<value>",
        metadata: {
            key: "<value>",
        },
        description: "Diverse context-sensitive collaboration",
        destination: {
            type: "ACCOUNT",
            identifier: "<value>",
        },
    },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `data`                                             | [components.Hold](../../models/components/hold.md) | :heavy_check_mark:                                 | N/A                                                |