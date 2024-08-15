# ConnectorsGetTaskResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ConnectorsGetTaskResponseBody } from "@formance/sdk-connectivity/models/operations";

let value: ConnectorsGetTaskResponseBody = {
    data: {
        id: "d2322715-bf0c-4bb1-a31b-8b90f3443a11",
        connectorID: "<value>",
        createdAt: new Date("2022-01-19T00:09:54.075Z"),
        updatedAt: new Date("2023-09-01T23:47:51.131Z"),
        status: "OTHER",
        state: {
            key: "<value>",
        },
        descriptor: "<value>",
    },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `data`                             | *operations.ConnectorsGetTaskData* | :heavy_check_mark:                 | N/A                                |