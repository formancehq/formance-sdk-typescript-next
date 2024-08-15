# TaskMoneyCorp

## Example Usage

```typescript
import { TaskMoneyCorp } from "@formance/sdk-connectivity/models/components";

let value: TaskMoneyCorp = {
    id: "63e2516f-e4c8-4b71-9e5b-7fd2ed028921",
    connectorID: "<value>",
    createdAt: new Date("2024-05-03T20:09:28.736Z"),
    updatedAt: new Date("2024-07-18T10:00:30.280Z"),
    status: "DISPUTE_LOST",
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