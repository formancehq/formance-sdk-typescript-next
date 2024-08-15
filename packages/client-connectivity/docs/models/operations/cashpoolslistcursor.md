# CashPoolsListCursor

## Example Usage

```typescript
import { CashPoolsListCursor } from "@formance/sdk-connectivity/models/operations";

let value: CashPoolsListCursor = {
    data: [
        {
            id: "<id>",
            name: "<value>",
            accounts: ["<value>"],
        },
    ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `next`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `data`                                                       | [components.CashPool](../../models/components/cashpool.md)[] | :heavy_check_mark:                                           | N/A                                                          |