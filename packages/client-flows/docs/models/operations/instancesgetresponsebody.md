# InstancesGetResponseBody

The request has succeeded.

## Example Usage

```typescript
import { InstancesGetResponseBody } from "@formance/sdk-flows/models/operations";

let value: InstancesGetResponseBody = {
    data: {
        workflowId: "<value>",
        id: "<id>",
        createdAt: new Date("2024-01-05T05:29:05.018Z"),
        updatedAt: new Date("2024-07-02T00:14:02.554Z"),
        terminated: false,
    },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [components.WorkflowInstance](../../models/components/workflowinstance.md) | :heavy_check_mark:                                                         | N/A                                                                        |