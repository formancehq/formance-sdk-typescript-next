# BalancesAggregateRequest

## Example Usage

```typescript
import { BalancesAggregateRequest } from "@formance/sdk-ledger/models/operations";

let value: BalancesAggregateRequest = {
    ledger: "<value>",
    query: {
        key: "<value>",
    },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `ledger`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pit`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `useInsertionDate`                                                                            | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `query`                                                                                       | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |