# OutputGetPayment

## Example Usage

```typescript
import { OutputGetPayment } from "@formance/sdk-flows/models/components";

let value: OutputGetPayment = {
    data: {
        reference: "<value>",
        connectorID: "<value>",
        amount: 722056,
        type: "PAY-IN",
        status: "DISPUTE_LOST",
        scheme: "unionpay",
        asset: "<value>",
        id: "<id>",
        sourceAccountID: "<value>",
        destinationAccountID: "<value>",
        initialAmount: 975522,
        createdAt: new Date("2022-01-19T05:22:55.590Z"),
        raw: {
            key: "<value>",
        },
        adjustments: [
            {
                reference: "<value>",
                createdAt: new Date("2024-07-26T23:03:04.084Z"),
                status: "CANCELLED",
                amount: 11714,
                raw: {
                    key: "<value>",
                },
            },
        ],
    },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [components.PaymentsPayment](../../models/components/paymentspayment.md) | :heavy_check_mark:                                                       | N/A                                                                      |