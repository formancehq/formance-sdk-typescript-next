# WorkflowsRunRequest

## Example Usage

```typescript
import { WorkflowsRunRequest } from "@formance/sdk-flows/models/operations";

let value: WorkflowsRunRequest = {
    id: "<id>",
    requestBody: {
        key: "<value>",
    },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `id`                  | *string*              | :heavy_check_mark:    | N/A                   |
| `wait`                | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `requestBody`         | Record<string, *any*> | :heavy_check_mark:    | N/A                   |