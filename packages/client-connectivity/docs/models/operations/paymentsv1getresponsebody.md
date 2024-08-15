# PaymentsV1GetResponseBody

The request has succeeded.

## Example Usage

```typescript
import { PaymentsV1GetResponseBody } from "@formance/sdk-connectivity/models/operations";

let value: PaymentsV1GetResponseBody = {
    data: {
        reference: "<value>",
        connectorID: "<value>",
        amount: 63955,
        type: "TRANSFER",
        status: "REFUNDED",
        scheme: "sepa",
        asset: "<value>",
        id: "<id>",
        sourceAccountID: "<value>",
        destinationAccountID: "<value>",
        initialAmount: 977496,
        createdAt: new Date("2024-05-13T03:30:31.690Z"),
        raw: {
            key: "<value>",
        },
        adjustments: [
            {
                reference: "<value>",
                createdAt: new Date("2024-08-18T15:35:38.029Z"),
                status: "REFUNDED_FAILURE",
                amount: 338159,
                raw: {
                    key: "<value>",
                },
            },
        ],
    },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `data`                                                   | [components.Payment](../../models/components/payment.md) | :heavy_check_mark:                                       | N/A                                                      |