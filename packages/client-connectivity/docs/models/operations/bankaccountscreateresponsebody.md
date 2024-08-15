# BankAccountsCreateResponseBody

The request has succeeded.

## Example Usage

```typescript
import { BankAccountsCreateResponseBody } from "@formance/sdk-connectivity/models/operations";

let value: BankAccountsCreateResponseBody = {
    data: {
        id: "<id>",
        name: "<value>",
        createdAt: new Date("2023-11-04T21:45:37.496Z"),
        country: "Palau",
        connectorID: "<value>",
    },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [components.BankAccount](../../models/components/bankaccount.md) | :heavy_check_mark:                                               | N/A                                                              |