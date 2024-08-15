# BankAccountsGetResponseBody

The request has succeeded.

## Example Usage

```typescript
import { BankAccountsGetResponseBody } from "@formance/sdk-connectivity/models/operations";

let value: BankAccountsGetResponseBody = {
    data: {
        id: "<id>",
        name: "<value>",
        createdAt: new Date("2022-12-08T21:24:04.186Z"),
        country: "Martinique",
        connectorID: "<value>",
    },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [components.BankAccount](../../models/components/bankaccount.md) | :heavy_check_mark:                                               | N/A                                                              |