# UsersListCursor

## Example Usage

```typescript
import { UsersListCursor } from "@formance/sdk-auth/models/operations";

let value: UsersListCursor = {
    data: [
        {
            id: "<id>",
            subject: "<value>",
            email: "Roselyn_Kassulke@yahoo.com",
        },
    ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `next`                                               | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `data`                                               | [components.User](../../models/components/user.md)[] | :heavy_check_mark:                                   | N/A                                                  |