# WalletsHold

## Example Usage

```typescript
import { WalletsHold } from "@formance/sdk-flows/models/components";

let value: WalletsHold = {
    id: "46ce2af7-a73c-4f3b-a453-f870b326b5a7",
    walletID: "<value>",
    metadata: {
        key: "<value>",
    },
    description: "Down-sized directional collaboration",
    destination: {
        type: "WALLET",
        identifier: "<value>",
    },
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `id`                           | *string*                       | :heavy_check_mark:             | N/A                            |
| `walletID`                     | *string*                       | :heavy_check_mark:             | N/A                            |
| `metadata`                     | Record<string, *string*>       | :heavy_check_mark:             | N/A                            |
| `description`                  | *string*                       | :heavy_check_mark:             | N/A                            |
| `destination`                  | *components.WalletCounterpart* | :heavy_check_mark:             | N/A                            |