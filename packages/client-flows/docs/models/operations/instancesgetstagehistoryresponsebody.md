# InstancesGetStageHistoryResponseBody

The request has succeeded.

## Example Usage

```typescript
import { InstancesGetStageHistoryResponseBody } from "@formance/sdk-flows/models/operations";

let value: InstancesGetStageHistoryResponseBody = {
    data: {
        name: "<value>",
        input: {
            voidHold: {
                id: "<id>",
            },
        },
        terminated: false,
        startedAt: new Date("2023-10-05T16:55:59.198Z"),
        attempt: 181631,
    },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `data`                                                                                             | [components.WorkflowInstanceHistoryStage](../../models/components/workflowinstancehistorystage.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |