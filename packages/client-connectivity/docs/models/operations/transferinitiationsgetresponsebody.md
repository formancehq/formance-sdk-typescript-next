# TransferInitiationsGetResponseBody

The request has succeeded.

## Example Usage

```typescript
import { TransferInitiationsGetResponseBody } from "@formance/sdk-connectivity/models/operations";

let value: TransferInitiationsGetResponseBody = {
    data: {
        id: "<id>",
        reference: "<value>",
        createdAt: new Date("2022-08-01T23:58:39.870Z"),
        scheduledAt: new Date("2023-11-09T04:37:42.621Z"),
        description: "Robust 24/7 utilisation",
        sourceAccountID: "<value>",
        destinationAccountID: "<value>",
        connectorID: "<value>",
        type: "TRANSFER",
        amount: 862310,
        initialAmount: 148141,
        asset: "<value>",
        status: "REVERSE_FAILED",
        error: "<value>",
    },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [components.TransferInitiation](../../models/components/transferinitiation.md) | :heavy_check_mark:                                                             | N/A                                                                            |