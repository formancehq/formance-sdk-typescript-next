# Cursor

## Example Usage

```typescript
import { Cursor } from "@formance/sdk-ledger/models/operations";

let value: Cursor = {
    data: [
        {
            name: "<value>",
            addedAt: new Date("2022-08-26T08:08:26.098Z"),
            bucket: "<value>",
        },
    ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `next`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `data`                                                   | [components.Ledger](../../models/components/ledger.md)[] | :heavy_check_mark:                                       | N/A                                                      |