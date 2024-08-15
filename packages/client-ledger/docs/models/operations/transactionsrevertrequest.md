# TransactionsRevertRequest

## Example Usage

```typescript
import { TransactionsRevertRequest } from "@formance/sdk-ledger/models/operations";

let value: TransactionsRevertRequest = {
    ledger: "<value>",
    id: 277718,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `ledger`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `force`                                                                                       | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `atEffectiveDate`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |