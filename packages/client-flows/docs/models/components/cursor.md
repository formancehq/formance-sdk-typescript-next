# Cursor

## Example Usage

```typescript
import { Cursor } from "@formance/sdk-flows/models/components";

let value: Cursor = {
    data: [
        {
            id: "ed151a05-dfc2-4ddf-bcc7-8ca1ba928fc8",
            metadata: {
                key: "<value>",
            },
            name: "<value>",
            createdAt: new Date("2022-04-27T01:47:37.246Z"),
            ledger: "<value>",
        },
    ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `next`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `data`                                                                 | [components.WalletsWallet](../../models/components/walletswallet.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |