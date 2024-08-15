# TransactionsListRequest

## Example Usage

```typescript
import { TransactionsListRequest } from "@formance/sdk-ledger/models/operations";

let value: TransactionsListRequest = {
    ledger: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `ledger`              | *string*              | :heavy_check_mark:    | N/A                   |
| `expand`              | *string*              | :heavy_minus_sign:    | N/A                   |
| `pit`                 | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `cursor`              | *string*              | :heavy_minus_sign:    | N/A                   |
| `pageSize`            | *number*              | :heavy_minus_sign:    | N/A                   |
| `query`               | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |