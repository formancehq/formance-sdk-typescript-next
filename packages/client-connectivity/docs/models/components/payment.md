# Payment

## Example Usage

```typescript
import { Payment } from "@formance/sdk-connectivity/models/components";

let value: Payment = {
    reference: "<value>",
    connectorID: "<value>",
    amount: 807319,
    type: "PAYOUT",
    status: "REFUNDED_FAILURE",
    scheme: "mastercard",
    asset: "<value>",
    id: "<id>",
    sourceAccountID: "<value>",
    destinationAccountID: "<value>",
    initialAmount: 407183,
    createdAt: new Date("2022-02-06T09:52:53.944Z"),
    raw: {
        key: "<value>",
    },
    adjustments: [
        {
            reference: "<value>",
            createdAt: new Date("2022-03-17T19:22:06.639Z"),
            status: "OTHER",
            amount: 697429,
            raw: {
                key: "<value>",
            },
        },
    ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [components.PaymentType](../../models/components/paymenttype.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.PaymentStatus](../../models/components/paymentstatus.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scheme`                                                                                      | [components.PaymentScheme](../../models/components/paymentscheme.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `asset`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceAccountID`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `destinationAccountID`                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `provider`                                                                                    | [components.Connector](../../models/components/connector.md)                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `initialAmount`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `raw`                                                                                         | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `adjustments`                                                                                 | [components.PaymentAdjustment](../../models/components/paymentadjustment.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |