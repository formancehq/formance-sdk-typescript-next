# WorkflowConfig

## Example Usage

```typescript
import { WorkflowConfig } from "@formance/sdk-flows/models/components";

let value: WorkflowConfig = {
    stages: [
        {
            key: "<value>",
        },
    ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `name`                  | *string*                | :heavy_minus_sign:      | N/A                     |
| `stages`                | Record<string, *any*>[] | :heavy_check_mark:      | N/A                     |