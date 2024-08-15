# ClientsListResponse

## Example Usage

```typescript
import { ClientsListResponse } from "@formance/sdk-auth/models/operations";

let value: ClientsListResponse = {
    result: {
        cursor: {
            data: [
                {
                    name: "<value>",
                    trusted: false,
                    id: "<id>",
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [operations.ClientsListResponseBody](../../models/operations/clientslistresponsebody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |