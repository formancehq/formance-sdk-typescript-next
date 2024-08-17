# WalletsListResponseBody

The request has succeeded.

## Example Usage

```typescript
import { WalletsListResponseBody } from "@formance/sdk-wallets/models/operations";

let value: WalletsListResponseBody = {
    cursor: {
        data: [
            {
                id: "074ba446-9b6e-4214-9959-890afa563e25",
                metadata: {
                    key: "<value>",
                },
                name: "<value>",
                createdAt: new Date("2022-04-17T14:19:30.394Z"),
                ledger: "<value>",
            },
        ],
    },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `cursor`                                                                     | [operations.WalletsListCursor](../../models/operations/walletslistcursor.md) | :heavy_check_mark:                                                           | N/A                                                                          |