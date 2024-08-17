# ReconciliationsV1ListCursor

## Example Usage

```typescript
import { ReconciliationsV1ListCursor } from "@formance/sdk-reconciliation/models/operations";

let value: ReconciliationsV1ListCursor = {
    data: [
        {
            id: "<id>",
            policyID: "<value>",
            createdAt: new Date("2022-03-04T03:46:41.208Z"),
            reconciliedAtLedger: new Date("2024-11-22T04:11:07.245Z"),
            reconciliedAtPayments: new Date("2022-10-26T19:57:04.215Z"),
            status: "<value>",
            paymentsBalances: {
                key: 383441,
            },
            ledgerBalances: {
                key: 477665,
            },
            driftBalances: {
                key: 791725,
            },
        },
    ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `next`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `data`                                                                   | [components.Reconciliation](../../models/components/reconciliation.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |