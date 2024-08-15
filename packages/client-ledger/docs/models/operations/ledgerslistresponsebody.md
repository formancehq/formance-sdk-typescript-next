# LedgersListResponseBody

The request has succeeded.

## Example Usage

```typescript
import { LedgersListResponseBody } from "@formance/sdk-ledger/models/operations";

let value: LedgersListResponseBody = {
    cursor: {
        data: [
            {
                name: "<value>",
                addedAt: new Date("2023-09-16T00:05:11.677Z"),
                bucket: "<value>",
            },
        ],
    },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `cursor`                                               | [operations.Cursor](../../models/operations/cursor.md) | :heavy_check_mark:                                     | N/A                                                    |