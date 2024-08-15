# Workflow

## Example Usage

```typescript
import { Workflow } from "@formance/sdk-flows/models/components";

let value: Workflow = {
    config: {
        stages: [
            {
                key: "<value>",
            },
        ],
    },
    createdAt: new Date("2022-09-21T22:45:36.559Z"),
    updatedAt: new Date("2024-01-13T06:44:02.469Z"),
    id: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `config`                                                                                      | [components.WorkflowConfig](../../models/components/workflowconfig.md)                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |