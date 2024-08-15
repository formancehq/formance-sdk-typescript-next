# LogsListCursor

## Example Usage

```typescript
import { LogsListCursor } from "@formance/sdk-ledger/models/operations";

let value: LogsListCursor = {
    data: [
        {
            id: 296140,
            type: "SET_METADATA",
            data: "<value>",
            hash: "<value>",
            date: new Date("2022-05-11T03:00:49.668Z"),
        },
    ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `next`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `data`                                                       | [components.LogEntry](../../models/components/logentry.md)[] | :heavy_check_mark:                                           | N/A                                                          |