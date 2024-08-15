# TransferInitiationsUpdateStatusRequest

## Example Usage

```typescript
import { TransferInitiationsUpdateStatusRequest } from "@formance/sdk-connectivity/models/operations";

let value: TransferInitiationsUpdateStatusRequest = {
    transferId: "<value>",
    requestBody: {
        status: "PROCESSED",
    },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `transferId`                                                                                                                   | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `requestBody`                                                                                                                  | [operations.TransferInitiationsUpdateStatusRequestBody](../../models/operations/transferinitiationsupdatestatusrequestbody.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |