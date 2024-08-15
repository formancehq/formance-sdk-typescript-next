# CreatePaymentRequest

## Example Usage

```typescript
import { CreatePaymentRequest } from "@formance/sdk-connectivity/models/components";

let value: CreatePaymentRequest = {
    reference: "<value>",
    connectorID: "<value>",
    amount: 866383,
    type: "PAYOUT",
    status: "OTHER",
    scheme: "unknown",
    asset: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `reference`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `connectorID`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `amount`                                                             | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `type`                                                               | [components.PaymentType](../../models/components/paymenttype.md)     | :heavy_check_mark:                                                   | N/A                                                                  |
| `status`                                                             | [components.PaymentStatus](../../models/components/paymentstatus.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `scheme`                                                             | [components.PaymentScheme](../../models/components/paymentscheme.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `asset`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `sourceAccountID`                                                    | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `destinationAccountID`                                               | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |