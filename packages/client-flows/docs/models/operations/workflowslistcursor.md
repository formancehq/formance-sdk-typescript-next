# WorkflowsListCursor

## Example Usage

```typescript
import { WorkflowsListCursor } from "@formance/sdk-flows/models/operations";

let value: WorkflowsListCursor = {
    data: [
        {
            config: {
                stages: [
                    {
                        key: "<value>",
                    },
                ],
            },
            createdAt: new Date("2023-01-06T14:55:59.446Z"),
            updatedAt: new Date("2022-08-28T08:52:06.660Z"),
            id: "<id>",
        },
    ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `next`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `data`                                                       | [components.Workflow](../../models/components/workflow.md)[] | :heavy_check_mark:                                           | N/A                                                          |