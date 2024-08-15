# TriggersListOccurencesCursor

## Example Usage

```typescript
import { TriggersListOccurencesCursor } from "@formance/sdk-flows/models/operations";

let value: TriggersListOccurencesCursor = {
    data: [
        {
            date: new Date("2024-05-13T03:30:31.690Z"),
            triggerID: "<value>",
            event: "<value>",
        },
    ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `next`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `data`                                                                       | [components.TriggerOccurence](../../models/components/triggeroccurence.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |