# WorkflowsGetResponseBody

The request has succeeded.

## Example Usage

```typescript
import { WorkflowsGetResponseBody } from "@formance/sdk-flows/models/operations";

let value: WorkflowsGetResponseBody = {
    data: {
        config: {
            stages: [
                {
                    key: "<value>",
                },
            ],
        },
        createdAt: new Date("2024-10-28T17:59:56.945Z"),
        updatedAt: new Date("2024-02-24T06:07:13.993Z"),
        id: "<id>",
    },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                     | [components.Workflow](../../models/components/workflow.md) | :heavy_check_mark:                                         | N/A                                                        |