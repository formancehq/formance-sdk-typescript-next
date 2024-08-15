# LogEntry

## Example Usage

```typescript
import { LogEntry } from "@formance/sdk-ledger/models/components";

let value: LogEntry = {
    id: 473600,
    type: "NEW_TRANSACTION",
    data: "<value>",
    hash: "<value>",
    date: new Date("2022-07-24T05:17:09.567Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [components.LogEntryType](../../models/components/logentrytype.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `data`                                                                                        | *any*                                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `hash`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |