# TransferInitiationsCreateResponseBody

The request has succeeded.

## Example Usage

```typescript
import { TransferInitiationsCreateResponseBody } from "@formance/sdk-connectivity/models/operations";

let value: TransferInitiationsCreateResponseBody = {
    data: {
        id: "<id>",
        reference: "<value>",
        createdAt: new Date("2024-05-25T22:13:29.233Z"),
        scheduledAt: new Date("2023-06-17T19:56:27.688Z"),
        description: "Proactive next generation strategy",
        sourceAccountID: "<value>",
        destinationAccountID: "<value>",
        connectorID: "<value>",
        type: "TRANSFER",
        amount: 293020,
        initialAmount: 844550,
        asset: "<value>",
        status: "PARTIALLY_REVERSED",
        error: "<value>",
    },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [components.TransferInitiation](../../models/components/transferinitiation.md) | :heavy_check_mark:                                                             | N/A                                                                            |