# TriggersListResponseBody

The request has succeeded.

## Example Usage

```typescript
import { TriggersListResponseBody } from "@formance/sdk-flows/models/operations";

let value: TriggersListResponseBody = {
    cursor: {
        data: [
            [
                {
                    event: "<value>",
                    workflowId: "<value>",
                    id: "<id>",
                    createdAt: new Date("2023-07-16T13:59:51.779Z"),
                },
            ],
        ],
    },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `cursor`                                                                       | [operations.TriggersListCursor](../../models/operations/triggerslistcursor.md) | :heavy_check_mark:                                                             | N/A                                                                            |