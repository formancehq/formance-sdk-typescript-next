# TriggersListCursor

## Example Usage

```typescript
import { TriggersListCursor } from "@formance/sdk-flows/models/operations";

let value: TriggersListCursor = {
    data: [
        [
            {
                event: "<value>",
                workflowId: "<value>",
                id: "<id>",
                createdAt: new Date("2022-03-12T02:16:45.521Z"),
            },
        ],
    ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `next`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `data`                                                       | [components.Trigger](../../models/components/trigger.md)[][] | :heavy_check_mark:                                           | N/A                                                          |