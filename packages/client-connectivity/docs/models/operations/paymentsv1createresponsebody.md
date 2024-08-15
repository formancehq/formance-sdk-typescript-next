# PaymentsV1CreateResponseBody

The request has succeeded.

## Example Usage

```typescript
import { PaymentsV1CreateResponseBody } from "@formance/sdk-connectivity/models/operations";

let value: PaymentsV1CreateResponseBody = {
    data: {
        reference: "<value>",
        connectorID: "<value>",
        amount: 9240,
        type: "TRANSFER",
        status: "DISPUTE_LOST",
        scheme: "maestro",
        asset: "<value>",
        id: "<id>",
        sourceAccountID: "<value>",
        destinationAccountID: "<value>",
        initialAmount: 984330,
        createdAt: new Date("2022-11-05T18:37:43.183Z"),
        raw: {
            key: "<value>",
        },
        adjustments: [
            {
                reference: "<value>",
                createdAt: new Date("2024-02-11T00:43:36.602Z"),
                status: "REFUNDED_FAILURE",
                amount: 181631,
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