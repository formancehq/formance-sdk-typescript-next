# TransferInitiationPayment

## Example Usage

```typescript
import { TransferInitiationPayment } from "@formance/sdk-connectivity/models/components";

let value: TransferInitiationPayment = {
    paymentID: "<value>",
    createdAt: new Date("2023-07-26T01:20:48.501Z"),
    status: "VALIDATED",
    error: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `paymentID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.TransferInitiationStatus](../../models/components/transferinitiationstatus.md)    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |