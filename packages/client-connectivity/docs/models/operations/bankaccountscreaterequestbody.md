# BankAccountsCreateRequestBody

## Example Usage

```typescript
import { BankAccountsCreateRequestBody } from "@formance/sdk-connectivity/models/operations";

let value: BankAccountsCreateRequestBody = {
    country: "Estonia",
    connectorID: "<value>",
    name: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `country`                | *string*                 | :heavy_check_mark:       | N/A                      |
| `connectorID`            | *string*                 | :heavy_check_mark:       | N/A                      |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      |
| `accountNumber`          | *string*                 | :heavy_minus_sign:       | N/A                      |
| `iban`                   | *string*                 | :heavy_minus_sign:       | N/A                      |
| `swiftBicCode`           | *string*                 | :heavy_minus_sign:       | N/A                      |
| `metadata`               | Record<string, *string*> | :heavy_minus_sign:       | N/A                      |