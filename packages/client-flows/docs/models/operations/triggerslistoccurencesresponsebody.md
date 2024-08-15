# TriggersListOccurencesResponseBody

The request has succeeded.

## Example Usage

```typescript
import { TriggersListOccurencesResponseBody } from "@formance/sdk-flows/models/operations";

let value: TriggersListOccurencesResponseBody = {
    cursor: {
        data: [
            {
                date: new Date("2024-08-18T15:35:38.029Z"),
                triggerID: "<value>",
                event: "<value>",
            },
        ],
    },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                           | [operations.TriggersListOccurencesCursor](../../models/operations/triggerslistoccurencescursor.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |