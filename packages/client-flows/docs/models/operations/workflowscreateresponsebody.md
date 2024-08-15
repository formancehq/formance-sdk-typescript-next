# WorkflowsCreateResponseBody

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { WorkflowsCreateResponseBody } from "@formance/sdk-flows/models/operations";

let value: WorkflowsCreateResponseBody = {
    data: {
        config: {
            stages: [
                {
                    key: "<value>",
                },
            ],
        },
        createdAt: new Date("2024-11-06T10:52:56.237Z"),
        updatedAt: new Date("2023-06-24T12:37:25.611Z"),
        id: "<id>",
    },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                     | [components.Workflow](../../models/components/workflow.md) | :heavy_check_mark:                                         | N/A                                                        |