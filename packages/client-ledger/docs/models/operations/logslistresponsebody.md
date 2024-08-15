# LogsListResponseBody

The request has succeeded.

## Example Usage

```typescript
import { LogsListResponseBody } from "@formance/sdk-ledger/models/operations";

let value: LogsListResponseBody = {
    cursor: {
        data: [
            {
                id: 688661,
                type: "NEW_TRANSACTION",
                data: "<value>",
                hash: "<value>",
                date: new Date("2024-08-23T00:02:16.417Z"),
            },
        ],
    },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `cursor`                                                               | [operations.LogsListCursor](../../models/operations/logslistcursor.md) | :heavy_check_mark:                                                     | N/A                                                                    |