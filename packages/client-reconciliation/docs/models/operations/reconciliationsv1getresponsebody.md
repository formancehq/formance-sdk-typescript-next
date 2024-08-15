# ReconciliationsV1GetResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ReconciliationsV1GetResponseBody } from "@formance/sdk-reconciliation/models/operations";

let value: ReconciliationsV1GetResponseBody = {
    data: {
        id: "<id>",
        policyID: "<value>",
        createdAt: new Date("2023-02-08T14:13:31.435Z"),
        reconciliedAtLedger: new Date("2024-07-01T13:13:56.446Z"),
        reconciliedAtPayments: new Date("2024-11-15T01:00:33.046Z"),
        status: "<value>",
        paymentsBalances: {
            key: 778157,
        },
        ledgerBalances: {
            key: 140350,
        },
        driftBalances: {
            key: 870013,
        },
    },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `data`                                                                 | [components.Reconciliation](../../models/components/reconciliation.md) | :heavy_check_mark:                                                     | N/A                                                                    |