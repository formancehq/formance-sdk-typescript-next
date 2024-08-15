# LogsListResponse

## Example Usage

```typescript
import { LogsListResponse } from "@formance/sdk-ledger/models/operations";

let value: LogsListResponse = {
    result: {
        cursor: {
            data: [
                {
                    id: 414263,
                    type: "REVERT_TRANSACTION",
                    data: "<value>",
                    hash: "<value>",
                    date: new Date("2022-03-12T07:20:09.120Z"),
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [operations.LogsListResponseBody](../../models/operations/logslistresponsebody.md) | :heavy_check_mark:                                                                 | N/A                                                                                |