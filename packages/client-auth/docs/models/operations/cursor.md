# Cursor

## Example Usage

```typescript
import { Cursor } from "@formance/sdk-auth/models/operations";

let value: Cursor = {
    data: [
        {
            name: "<value>",
            trusted: false,
            id: "<id>",
        },
    ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `next`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `data`                                                   | [components.Client](../../models/components/client.md)[] | :heavy_check_mark:                                       | N/A                                                      |