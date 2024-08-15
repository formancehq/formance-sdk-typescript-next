# TaskDummyPay

## Example Usage

```typescript
import { TaskDummyPay } from "@formance/sdk-connectivity/models/components";

let value: TaskDummyPay = {
    id: "78f097b0-074f-4154-b1b5-e6e13b99d488",
    connectorID: "<value>",
    createdAt: new Date("2024-10-01T17:28:50.340Z"),
    updatedAt: new Date("2022-04-13T23:00:39.850Z"),
    status: "OTHER",
    state: {
        key: "<value>",
    },
    descriptor: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.PaymentStatus](../../models/components/paymentstatus.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `state`                                                                                       | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `descriptor`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |