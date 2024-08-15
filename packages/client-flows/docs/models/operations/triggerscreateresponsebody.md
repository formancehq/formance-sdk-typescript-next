# TriggersCreateResponseBody

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { TriggersCreateResponseBody } from "@formance/sdk-flows/models/operations";

let value: TriggersCreateResponseBody = {
    data: {
        event: "<value>",
        workflowId: "<value>",
        id: "<id>",
        createdAt: new Date("2023-09-29T04:04:52.764Z"),
    },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `data`                                                   | [components.Trigger](../../models/components/trigger.md) | :heavy_check_mark:                                       | N/A                                                      |