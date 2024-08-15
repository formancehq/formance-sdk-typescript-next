# ClientsUpdateResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ClientsUpdateResponseBody } from "@formance/sdk-auth/models/operations";

let value: ClientsUpdateResponseBody = {
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