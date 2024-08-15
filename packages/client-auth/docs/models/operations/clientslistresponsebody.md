# ClientsListResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ClientsListResponseBody } from "@formance/sdk-auth/models/operations";

let value: ClientsListResponseBody = {
    cursor: {
        data: [
            {
                name: "<value>",
                trusted: false,
                id: "<id>",
            },
        ],
    },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `cursor`                                               | [operations.Cursor](../../models/operations/cursor.md) | :heavy_check_mark:                                     | N/A                                                    |