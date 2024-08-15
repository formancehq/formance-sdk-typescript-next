# BankAccountsForwardRequest

## Example Usage

```typescript
import { BankAccountsForwardRequest } from "@formance/sdk-connectivity/models/operations";

let value: BankAccountsForwardRequest = {
    bankAccountId: "<value>",
    requestBody: {
        connectorID: "<value>",
    },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `bankAccountId`                                                                                        | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `requestBody`                                                                                          | [operations.BankAccountsForwardRequestBody](../../models/operations/bankaccountsforwardrequestbody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |