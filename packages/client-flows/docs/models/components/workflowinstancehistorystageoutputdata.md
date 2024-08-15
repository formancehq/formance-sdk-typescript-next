# WorkflowInstanceHistoryStageOutputData

## Example Usage

```typescript
import { WorkflowInstanceHistoryStageOutputData } from "@formance/sdk-flows/models/components";

let value: WorkflowInstanceHistoryStageOutputData = {
    cursor: {
        data: [
            {
                id: "6742cb73-9205-4929-b96f-ea7596eb10fa",
                metadata: {
                    key: "<value>",
                },
                name: "<value>",
                createdAt: new Date("2023-12-17T20:11:43.465Z"),
                ledger: "<value>",
            },
        ],
    },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `cursor`                                               | [components.Cursor](../../models/components/cursor.md) | :heavy_check_mark:                                     | N/A                                                    |