# InstancesListResponseBody

The request has succeeded.

## Example Usage

```typescript
import { InstancesListResponseBody } from "@formance/sdk-flows/models/operations";

let value: InstancesListResponseBody = {
    cursor: {
        data: [
            {
                workflowId: "<value>",
                id: "<id>",
                createdAt: new Date("2022-01-19T00:09:54.075Z"),
                updatedAt: new Date("2023-09-01T23:47:51.131Z"),
                terminated: false,
            },
        ],
    },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `cursor`                                               | [operations.Cursor](../../models/operations/cursor.md) | :heavy_check_mark:                                     | N/A                                                    |