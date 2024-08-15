# TriggersListResponse

## Example Usage

```typescript
import { TriggersListResponse } from "@formance/sdk-flows/models/operations";

let value: TriggersListResponse = {
    result: {
        cursor: {
            data: [
                [
                    {
                        event: "<value>",
                        workflowId: "<value>",
                        id: "<id>",
                        createdAt: new Date("2023-06-17T05:56:53.587Z"),
                    },
                ],
            ],
        },
    },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [operations.TriggersListResponseBody](../../models/operations/triggerslistresponsebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |