# WorkflowsListResponse

## Example Usage

```typescript
import { WorkflowsListResponse } from "@formance/sdk-flows/models/operations";

let value: WorkflowsListResponse = {
    result: {
        cursor: {
            data: [
                {
                    config: {
                        stages: [
                            {
                                key: "<value>",
                            },
                        ],
                    },
                    createdAt: new Date("2022-09-11T22:40:46.407Z"),
                    updatedAt: new Date("2024-08-21T05:47:22.603Z"),
                    id: "<id>",
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [operations.WorkflowsListResponseBody](../../models/operations/workflowslistresponsebody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |