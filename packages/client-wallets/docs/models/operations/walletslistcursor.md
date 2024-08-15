# WalletsListCursor

## Example Usage

```typescript
import { WalletsListCursor } from "@formance/sdk-wallets/models/operations";

let value: WalletsListCursor = {
    data: [
        {
            id: "77dfb14c-d66a-4e39-9efb-9ba88f3a6699",
            metadata: {
                key: "<value>",
            },
            name: "<value>",
            createdAt: new Date("2023-06-05T10:54:55.033Z"),
            ledger: "<value>",
        },
    ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `next`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `data`                                                   | [components.Wallet](../../models/components/wallet.md)[] | :heavy_check_mark:                                       | N/A                                                      |