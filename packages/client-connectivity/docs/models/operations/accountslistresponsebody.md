# AccountsListResponseBody

The request has succeeded.

## Example Usage

```typescript
import { AccountsListResponseBody } from "@formance/sdk-connectivity/models/operations";

let value: AccountsListResponseBody = {
    cursor: {
        data: [
            {
                id: "<id>",
                createdAt: new Date("2022-07-07T09:37:52.810Z"),
                reference: "<value>",
                connectorID: "<value>",
                defaultCurrency: "<value>",
                defaultAsset: "<value>",
                accountName: "<value>",
                type: "EXTERNAL",
                pools: ["<value>"],
                metadata: {
                    key: "<value>",
                },
                raw: "<value>",
            },
        ],
    },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `cursor`                                               | [operations.Cursor](../../models/operations/cursor.md) | :heavy_check_mark:                                     | N/A                                                    |