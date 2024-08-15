# BankAccountsForwardResponseBody

The request has succeeded.

## Example Usage

```typescript
import { BankAccountsForwardResponseBody } from "@formance/sdk-connectivity/models/operations";

let value: BankAccountsForwardResponseBody = {
    data: {
        id: "<id>",
        name: "<value>",
        createdAt: new Date("2023-03-13T10:48:25.043Z"),
        country: "Cote d'Ivoire",
        connectorID: "<value>",
    },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [components.BankAccount](../../models/components/bankaccount.md) | :heavy_check_mark:                                               | N/A                                                              |