# WorkflowsListResponseBody

The request has succeeded.

## Example Usage

```typescript
import { WorkflowsListResponseBody } from "@formance/sdk-flows/models/operations";

let value: WorkflowsListResponseBody = {
    cursor: {
        data: [
            {
                config: {
                    stages: [
                        {
                            key: "<value>",
                        },
                    ],
                },
                createdAt: new Date("2024-11-19T21:08:29.139Z"),
                updatedAt: new Date("2023-05-14T20:45:38.043Z"),
                id: "<id>",
            },
        ],
    },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `cursor`                                                                         | [operations.WorkflowsListCursor](../../models/operations/workflowslistcursor.md) | :heavy_check_mark:                                                               | N/A                                                                              |