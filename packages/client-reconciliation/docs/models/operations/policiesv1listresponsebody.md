# PoliciesV1ListResponseBody

The request has succeeded.

## Example Usage

```typescript
import { PoliciesV1ListResponseBody } from "@formance/sdk-reconciliation/models/operations";

let value: PoliciesV1ListResponseBody = {
    cursor: {
        data: [
            {
                id: "<id>",
                name: "<value>",
                createdAt: new Date("2023-04-25T14:17:38.296Z"),
                ledgerName: "<value>",
                ledgerQuery: {
                    key: "<value>",
                },
                paymentsPoolID: "<value>",
            },
        ],
    },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `cursor`                                               | [operations.Cursor](../../models/operations/cursor.md) | :heavy_check_mark:                                     | N/A                                                    |