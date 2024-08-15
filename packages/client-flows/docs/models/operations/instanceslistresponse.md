# InstancesListResponse

## Example Usage

```typescript
import { InstancesListResponse } from "@formance/sdk-flows/models/operations";

let value: InstancesListResponse = {
    result: {
        cursor: {
            data: [
                {
                    workflowId: "<value>",
                    id: "<id>",
                    createdAt: new Date("2024-10-15T18:20:21.062Z"),
                    updatedAt: new Date("2022-01-11T03:03:02.896Z"),
                    terminated: false,
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [operations.InstancesListResponseBody](../../models/operations/instanceslistresponsebody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |