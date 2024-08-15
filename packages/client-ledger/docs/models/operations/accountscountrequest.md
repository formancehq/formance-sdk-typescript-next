# AccountsCountRequest

## Example Usage

```typescript
import { AccountsCountRequest } from "@formance/sdk-ledger/models/operations";

let value: AccountsCountRequest = {
    ledger: "<value>",
    address: "3649 Boyle Cape",
    query: {
        key: "<value>",
    },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `ledger`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `address`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pit`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `query`                                                                                       | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |