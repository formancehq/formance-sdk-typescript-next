# PoliciesV1CreateRequestBody

## Example Usage

```typescript
import { PoliciesV1CreateRequestBody } from "@formance/sdk-reconciliation/models/operations";

let value: PoliciesV1CreateRequestBody = {
    name: "<value>",
    ledgerName: "<value>",
    ledgerQuery: {
        key: "<value>",
    },
    paymentsPoolID: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `ledgerName`          | *string*              | :heavy_check_mark:    | N/A                   |
| `ledgerQuery`         | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `paymentsPoolID`      | *string*              | :heavy_check_mark:    | N/A                   |