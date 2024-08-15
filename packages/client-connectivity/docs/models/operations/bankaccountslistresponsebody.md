# BankAccountsListResponseBody

The request has succeeded.

## Example Usage

```typescript
import { BankAccountsListResponseBody } from "@formance/sdk-connectivity/models/operations";

let value: BankAccountsListResponseBody = {
    cursor: {
        data: [
            {
                id: "<id>",
                name: "<value>",
                createdAt: new Date("2023-10-09T12:59:31.397Z"),
                country: "Saint Kitts and Nevis",
                connectorID: "<value>",
            },
        ],
    },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `cursor`                                                                               | [operations.BankAccountsListCursor](../../models/operations/bankaccountslistcursor.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |