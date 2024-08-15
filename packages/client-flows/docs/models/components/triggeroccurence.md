# TriggerOccurence

## Example Usage

```typescript
import { TriggerOccurence } from "@formance/sdk-flows/models/components";

let value: TriggerOccurence = {
    date: new Date("2022-11-11T11:00:48.081Z"),
    triggerID: "<value>",
    event: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workflowInstanceId`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `workflowInstance`                                                                            | [components.WorkflowInstance](../../models/components/workflowinstance.md)                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `triggerID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `event`                                                                                       | *any*                                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |