# ReconcileRequest

## Example Usage

```typescript
import { ReconcileRequest } from "@formance/sdk-reconciliation/models/operations";

let value: ReconcileRequest = {
    policyID: "<value>",
    requestBody: {
        reconciledAtLedger: new Date("2024-02-23T20:20:27.803Z"),
        reconciliedAtPayments: new Date("2024-07-14T07:33:58.078Z"),
    },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `policyID`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `requestBody`                                                                      | [operations.ReconcileRequestBody](../../models/operations/reconcilerequestbody.md) | :heavy_check_mark:                                                                 | N/A                                                                                |