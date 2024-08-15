# WalletsListResponse

## Example Usage

```typescript
import { WalletsListResponse } from "@formance/sdk-wallets/models/operations";

let value: WalletsListResponse = {
    result: {
        cursor: {
            data: [
                {
                    id: "6fe4c8b7-11e5-4b7f-92ed-028921cddc69",
                    metadata: {
                        key: "<value>",
                    },
                    name: "<value>",
                    createdAt: new Date("2022-06-03T09:50:19.778Z"),
                    ledger: "<value>",
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [operations.WalletsListResponseBody](../../models/operations/walletslistresponsebody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |