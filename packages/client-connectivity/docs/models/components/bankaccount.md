# BankAccount

## Example Usage

```typescript
import { BankAccount } from "@formance/sdk-connectivity/models/components";

let value: BankAccount = {
    id: "<id>",
    name: "<value>",
    createdAt: new Date("2023-11-15T10:13:10.092Z"),
    country: "Niger",
    connectorID: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `country`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `connectorID`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `accountID`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `provider`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `iban`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `accountNumber`                                                                                | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `swiftBicCode`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `relatedAccounts`                                                                              | [components.BankAccountRelatedAccount](../../models/components/bankaccountrelatedaccount.md)[] | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | Record<string, *string*>                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |