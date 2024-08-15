# AccountsListResponse

## Example Usage

```typescript
import { AccountsListResponse } from "@formance/sdk-connectivity/models/operations";

let value: AccountsListResponse = {
    result: {
        cursor: {
            data: [
                {
                    id: "<id>",
                    createdAt: new Date("2023-05-23T22:36:52.119Z"),
                    reference: "<value>",
                    connectorID: "<value>",
                    defaultCurrency: "<value>",
                    defaultAsset: "<value>",
                    accountName: "<value>",
                    type: "INTERNAL",
                    pools: ["<value>"],
                    metadata: {
                        key: "<value>",
                    },
                    raw: "<value>",
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [operations.AccountsListResponseBody](../../models/operations/accountslistresponsebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |