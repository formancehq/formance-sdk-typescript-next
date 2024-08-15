# WorkflowInstanceHistoryStage

## Example Usage

```typescript
import { WorkflowInstanceHistoryStage } from "@formance/sdk-flows/models/components";

let value: WorkflowInstanceHistoryStage = {
    name: "<value>",
    input: {
        createTransaction: {
            data: {
                metadata: {
                    key: "<value>",
                },
                script: {
                    plain: "<value>",
                },
            },
        },
    },
    terminated: false,
    startedAt: new Date("2022-01-28T01:08:57.414Z"),
    attempt: 854614,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `input`                                                                                       | *components.WorkflowInstanceHistoryStageInput*                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `output`                                                                                      | *components.Output*                                                                           | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `terminated`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `terminatedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `astFailure`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `attempt`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nextExecution`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |