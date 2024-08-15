# PaymentsPaymentAdjustment

## Example Usage

```typescript
import { PaymentsPaymentAdjustment } from "@formance/sdk-flows/models/components";

let value: PaymentsPaymentAdjustment = {
    reference: "<value>",
    createdAt: new Date("2022-12-22T20:27:39.283Z"),
    status: "DISPUTE_LOST",
    amount: 519711,
    raw: {
        key: "<value>",
    },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.PaymentsPaymentStatus](../../models/components/paymentspaymentstatus.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `raw`                                                                                         | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |