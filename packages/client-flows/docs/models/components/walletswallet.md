# WalletsWallet

## Example Usage

```typescript
import { WalletsWallet } from "@formance/sdk-flows/models/components";

let value: WalletsWallet = {
    id: "db1a8422-bb67-49d2-b227-15bf0cbb1e31",
    metadata: {
        key: "<value>",
    },
    name: "<value>",
    createdAt: new Date("2024-04-01T04:23:17.435Z"),
    ledger: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ledger`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |