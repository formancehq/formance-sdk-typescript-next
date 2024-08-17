# ReconciliationsV1ListResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ReconciliationsV1ListResponseBody } from "@formance/sdk-reconciliation/models/operations";

let value: ReconciliationsV1ListResponseBody = {
    cursor: {
        data: [
            {
                id: "<id>",
                policyID: "<value>",
                createdAt: new Date("2024-06-09T03:17:10.252Z"),
                reconciliedAtLedger: new Date("2023-08-03T16:03:07.258Z"),
                reconciliedAtPayments: new Date("2023-06-11T01:19:10.260Z"),
                status: "<value>",
                paymentsBalances: {
                    key: 568045,
                },
                ledgerBalances: {
                    key: 392785,
                },
                driftBalances: {
                    key: 925597,
                },
            },
        ],
    },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `cursor`                                                                                         | [operations.ReconciliationsV1ListCursor](../../models/operations/reconciliationsv1listcursor.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |