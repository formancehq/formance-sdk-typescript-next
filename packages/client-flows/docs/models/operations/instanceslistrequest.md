# InstancesListRequest

## Example Usage

```typescript
import { InstancesListRequest } from "@formance/sdk-flows/models/operations";

let value: InstancesListRequest = {
    workflowId: "<value>",
    running: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `workflowId`       | *string*           | :heavy_check_mark: | N/A                |
| `running`          | *boolean*          | :heavy_check_mark: | N/A                |
| `cursor`           | *string*           | :heavy_minus_sign: | N/A                |
| `pageSize`         | *number*           | :heavy_minus_sign: | N/A                |