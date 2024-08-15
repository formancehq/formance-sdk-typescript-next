# Cursor

## Example Usage

```typescript
import { Cursor } from "@formance/sdk-flows/models/operations";

let value: Cursor = {
    data: [
        {
            workflowId: "<value>",
            id: "<id>",
            createdAt: new Date("2022-04-20T22:07:54.906Z"),
            updatedAt: new Date("2022-03-11T02:09:33.292Z"),
            terminated: false,
        },
    ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `next`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `data`                                                                       | [components.WorkflowInstance](../../models/components/workflowinstance.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |