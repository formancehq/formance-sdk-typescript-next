# Hold

## Example Usage

```typescript
import { Hold } from "@formance/sdk-wallets/models/components";

let value: Hold = {
    id: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    walletID: "<value>",
    metadata: {
        key: "<value>",
    },
    description: "Profit-focused 3rd generation framework",
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