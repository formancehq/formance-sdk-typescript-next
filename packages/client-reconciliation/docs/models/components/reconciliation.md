# Reconciliation

## Example Usage

```typescript
import { Reconciliation } from "@formance/sdk-reconciliation/models/components";

let value: Reconciliation = {
    id: "<id>",
    policyID: "<value>",
    createdAt: new Date("2024-08-11T14:46:30.188Z"),
    reconciliedAtLedger: new Date("2024-12-08T13:34:36.810Z"),
    reconciliedAtPayments: new Date("2023-06-04T01:47:09.185Z"),
    status: "<value>",
    paymentsBalances: {
        key: 799159,
    },
    ledgerBalances: {
        key: 800911,
    },
    driftBalances: {
        key: 461479,
    },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `policyID`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reconciliedAtLedger`                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reconciliedAtPayments`                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `paymentsBalances`                                                                            | Record<string, *number*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ledgerBalances`                                                                              | Record<string, *number*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `driftBalances`                                                                               | Record<string, *number*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |