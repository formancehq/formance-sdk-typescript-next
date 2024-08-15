# WorkflowsRunResponseBody

The request has succeeded.

## Example Usage

```typescript
import { WorkflowsRunResponseBody } from "@formance/sdk-flows/models/operations";

let value: WorkflowsRunResponseBody = {
    data: {
        workflowId: "<value>",
        id: "<id>",
        createdAt: new Date("2024-05-25T22:13:29.233Z"),
        updatedAt: new Date("2023-06-17T19:56:27.688Z"),
        terminated: false,
    },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [components.WorkflowInstance](../../models/components/workflowinstance.md) | :heavy_check_mark:                                                         | N/A                                                                        |