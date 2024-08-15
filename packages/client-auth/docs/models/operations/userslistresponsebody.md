# UsersListResponseBody

The request has succeeded.

## Example Usage

```typescript
import { UsersListResponseBody } from "@formance/sdk-auth/models/operations";

let value: UsersListResponseBody = {
    cursor: {
        data: [
            {
                id: "<id>",
                subject: "<value>",
                email: "Hunter.Gulgowski96@yahoo.com",
            },
        ],
    },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `cursor`                                                                 | [operations.UsersListCursor](../../models/operations/userslistcursor.md) | :heavy_check_mark:                                                       | N/A                                                                      |