# TransferInitiation

## Example Usage

```typescript
import { TransferInitiation } from "@formance/sdk-connectivity/models/components";

let value: TransferInitiation = {
    id: "<id>",
    reference: "<value>",
    createdAt: new Date("2022-09-10T21:26:47.593Z"),
    scheduledAt: new Date("2022-01-13T20:07:37.920Z"),
    description: "Right-sized executive throughput",
    sourceAccountID: "<value>",
    destinationAccountID: "<value>",
    connectorID: "<value>",
    type: "PAYOUT",
    amount: 749999,
    initialAmount: 171629,
    asset: "<value>",
    status: "REJECTED",
    error: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `reference`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `scheduledAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `description`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `sourceAccountID`                                                                              | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `destinationAccountID`                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `connectorID`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `type`                                                                                         | [components.TransferInitiationType](../../models/components/transferinitiationtype.md)         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `amount`                                                                                       | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `initialAmount`                                                                                | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `asset`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `status`                                                                                       | [components.TransferInitiationStatus](../../models/components/transferinitiationstatus.md)     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `error`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | Record<string, *string*>                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `relatedPayments`                                                                              | [components.TransferInitiationPayment](../../models/components/transferinitiationpayment.md)[] | :heavy_minus_sign:                                                                             | N/A                                                                                            |