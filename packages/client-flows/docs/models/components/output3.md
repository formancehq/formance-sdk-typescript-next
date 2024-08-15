# Output3

## Example Usage

```typescript
import { Output3 } from "@formance/sdk-flows/models/components";

let value: Output3 = {
    getPayment: {
        data: {
            reference: "<value>",
            connectorID: "<value>",
            amount: 764912,
            type: "PAYOUT",
            status: "OTHER",
            scheme: "dragonpay",
            asset: "<value>",
            id: "<id>",
            sourceAccountID: "<value>",
            destinationAccountID: "<value>",
            initialAmount: 749999,
            createdAt: new Date("2022-07-08T02:32:49.335Z"),
            raw: {
                key: "<value>",
            },
            adjustments: [
                {
                    reference: "<value>",
                    createdAt: new Date("2023-01-07T23:40:40.717Z"),
                    status: "REFUNDED",
                    amount: 489549,
                    raw: {
                        key: "<value>",
                    },
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `getPayment`                                                               | [components.OutputGetPayment](../../models/components/outputgetpayment.md) | :heavy_check_mark:                                                         | N/A                                                                        |