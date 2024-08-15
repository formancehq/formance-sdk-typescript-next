# ReconciliationsV1ListResponse

## Example Usage

```typescript
import { ReconciliationsV1ListResponse } from "@formance/sdk-reconciliation/models/operations";

let value: ReconciliationsV1ListResponse = {
    result: {
        cursor: {
            data: [
                {
                    id: "<id>",
                    policyID: "<value>",
                    createdAt: new Date("2024-07-05T08:12:57.367Z"),
                    reconciliedAtLedger: new Date("2022-03-19T20:31:56.958Z"),
                    reconciliedAtPayments: new Date("2023-01-05T18:52:07.088Z"),
                    status: "<value>",
                    paymentsBalances: {
                        key: 87129,
                    },
                    ledgerBalances: {
                        key: 648172,
                    },
                    driftBalances: {
                        key: 20218,
                    },
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [operations.ReconciliationsV1ListResponseBody](../../models/operations/reconciliationsv1listresponsebody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |