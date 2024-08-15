# ConnectorsUpdateRequest

## Example Usage

```typescript
import { ConnectorsUpdateRequest } from "@formance/sdk-connectivity/models/operations";

let value: ConnectorsUpdateRequest = {
    connector: "MANGOPAY",
    connectorID: "<value>",
    requestBody: {
        name: "<value>",
        accessKey: "<value>",
        secret: "<value>",
    },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `connector`                                                  | [components.Connector](../../models/components/connector.md) | :heavy_check_mark:                                           | N/A                                                          |
| `connectorID`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `requestBody`                                                | *operations.ConnectorsUpdateRequestBody*                     | :heavy_check_mark:                                           | N/A                                                          |