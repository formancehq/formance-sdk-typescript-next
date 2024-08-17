# ReconcileResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ReconcileResponseBody } from "@formance/sdk-reconciliation/models/operations";

let value: ReconcileResponseBody = {
    data: {
        id: "<id>",
        policyID: "<value>",
        createdAt: new Date("2023-10-23T15:05:15.700Z"),
        reconciliedAtLedger: new Date("2024-07-29T07:24:05.705Z"),
        reconciliedAtPayments: new Date("2023-08-21T04:36:25.552Z"),
        status: "<value>",
        paymentsBalances: {
            key: 847252,
        },
        ledgerBalances: {
            key: 423655,
        },
        driftBalances: {
            key: 623564,
        },
    },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `data`                                                                 | [components.Reconciliation](../../models/components/reconciliation.md) | :heavy_check_mark:                                                     | N/A                                                                    |