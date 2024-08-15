# InstancesGetHistoryResponseBody

The request has succeeded.

## Example Usage

```typescript
import { InstancesGetHistoryResponseBody } from "@formance/sdk-flows/models/operations";

let value: InstancesGetHistoryResponseBody = {
    data: [
        {
            name: "<value>",
            input: {
                event: "<value>",
            },
            terminated: false,
            startedAt: new Date("2024-12-14T19:48:05.144Z"),
        },
    ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `data`                                                                                     | [components.WorkflowInstanceHistory](../../models/components/workflowinstancehistory.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |