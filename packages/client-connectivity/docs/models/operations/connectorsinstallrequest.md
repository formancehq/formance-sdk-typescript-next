# ConnectorsInstallRequest

## Example Usage

```typescript
import { ConnectorsInstallRequest } from "@formance/sdk-connectivity/models/operations";

let value: ConnectorsInstallRequest = {
    connector: "WISE",
    requestBody: {
        name: "<value>",
        apiKey: "<value>",
    },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `connector`                                                  | [components.Connector](../../models/components/connector.md) | :heavy_check_mark:                                           | N/A                                                          |
| `requestBody`                                                | *operations.ConnectorsInstallRequestBody*                    | :heavy_check_mark:                                           | N/A                                                          |