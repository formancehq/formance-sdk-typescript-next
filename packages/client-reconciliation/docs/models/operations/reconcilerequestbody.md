# ReconcileRequestBody

## Example Usage

```typescript
import { ReconcileRequestBody } from "@formance/sdk-reconciliation/models/operations";

let value: ReconcileRequestBody = {
    reconciledAtLedger: new Date("2023-08-25T11:59:25.313Z"),
    reconciliedAtPayments: new Date("2023-10-12T18:11:05.242Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `reconciledAtLedger`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reconciliedAtPayments`                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |