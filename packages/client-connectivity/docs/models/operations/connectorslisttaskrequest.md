# ConnectorsListTaskRequest

## Example Usage

```typescript
import { ConnectorsListTaskRequest } from "@formance/sdk-connectivity/models/operations";

let value: ConnectorsListTaskRequest = {
    connector: "GENERIC",
    connectorId: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `connector`                                                  | [components.Connector](../../models/components/connector.md) | :heavy_check_mark:                                           | N/A                                                          |
| `connectorId`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `pageSize`                                                   | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `cursor`                                                     | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |