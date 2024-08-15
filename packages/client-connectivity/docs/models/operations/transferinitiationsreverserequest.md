# TransferInitiationsReverseRequest

## Example Usage

```typescript
import { TransferInitiationsReverseRequest } from "@formance/sdk-connectivity/models/operations";

let value: TransferInitiationsReverseRequest = {
    transferId: "<value>",
    requestBody: {
        reference: "<value>",
        description: "Networked 24 hour model",
        amount: 269479,
        asset: "<value>",
    },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `transferId`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `requestBody`                                                                                                        | [operations.TransferInitiationsReverseRequestBody](../../models/operations/transferinitiationsreverserequestbody.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |