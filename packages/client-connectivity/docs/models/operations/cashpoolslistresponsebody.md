# CashPoolsListResponseBody

The request has succeeded.

## Example Usage

```typescript
import { CashPoolsListResponseBody } from "@formance/sdk-connectivity/models/operations";

let value: CashPoolsListResponseBody = {
    cursor: {
        data: [
            {
                id: "<id>",
                name: "<value>",
                accounts: ["<value>"],
            },
        ],
    },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `cursor`                                                                         | [operations.CashPoolsListCursor](../../models/operations/cashpoolslistcursor.md) | :heavy_check_mark:                                                               | N/A                                                                              |