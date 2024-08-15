# ListWallet

## Example Usage

```typescript
import { ListWallet } from "@formance/sdk-flows/models/components";

let value: ListWallet = {
    data: {
        cursor: {
            data: [
                {
                    id: "a2352c59-5590-47af-b1a3-a2fa94677392",
                    metadata: {
                        key: "<value>",
                    },
                    name: "<value>",
                    createdAt: new Date("2023-01-06T10:57:08.535Z"),
                    ledger: "<value>",
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                 | [components.WorkflowInstanceHistoryStageOutputData](../../models/components/workflowinstancehistorystageoutputdata.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |