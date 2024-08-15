# ClientsUpdateRequest

## Example Usage

```typescript
import { ClientsUpdateRequest } from "@formance/sdk-auth/models/operations";

let value: ClientsUpdateRequest = {
    id: "<id>",
    clientData: {
        name: "<value>",
    },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `clientData`                                                   | [components.ClientData](../../models/components/clientdata.md) | :heavy_check_mark:                                             | N/A                                                            |