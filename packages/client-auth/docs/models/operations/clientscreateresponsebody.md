# ClientsCreateResponseBody

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { ClientsCreateResponseBody } from "@formance/sdk-auth/models/operations";

let value: ClientsCreateResponseBody = {
    data: {
        name: "<value>",
        trusted: false,
        id: "<id>",
    },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `data`                                                 | [components.Client](../../models/components/client.md) | :heavy_check_mark:                                     | N/A                                                    |