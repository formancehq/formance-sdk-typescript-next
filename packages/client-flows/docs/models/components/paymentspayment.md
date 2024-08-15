# PaymentsPayment

## Example Usage

```typescript
import { PaymentsPayment } from "@formance/sdk-flows/models/components";

let value: PaymentsPayment = {
    reference: "<value>",
    connectorID: "<value>",
    amount: 20651,
    type: "PAY-IN",
    status: "DISPUTE_WON",
    scheme: "ach debit",
    asset: "<value>",
    id: "<id>",
    sourceAccountID: "<value>",
    destinationAccountID: "<value>",
    initialAmount: 320017,
    createdAt: new Date("2024-09-18T05:59:40.567Z"),
    raw: {
        key: "<value>",
    },
    adjustments: [
        {
            reference: "<value>",
            createdAt: new Date("2023-02-25T06:38:03.101Z"),
            status: "DISPUTE",
            amount: 588317,
            raw: {
                key: "<value>",
            },
        },
    ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `reference`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `connectorID`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `amount`                                                                                       | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `type`                                                                                         | [components.PaymentsPaymentType](../../models/components/paymentspaymenttype.md)               | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `status`                                                                                       | [components.PaymentsPaymentStatus](../../models/components/paymentspaymentstatus.md)           | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `scheme`                                                                                       | [components.PaymentsPaymentScheme](../../models/components/paymentspaymentscheme.md)           | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `asset`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `sourceAccountID`                                                                              | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `destinationAccountID`                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `provider`                                                                                     | [components.PaymentsConnector](../../models/components/paymentsconnector.md)                   | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `initialAmount`                                                                                | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `raw`                                                                                          | Record<string, *any*>                                                                          | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `adjustments`                                                                                  | [components.PaymentsPaymentAdjustment](../../models/components/paymentspaymentadjustment.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | Record<string, *string*>                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |