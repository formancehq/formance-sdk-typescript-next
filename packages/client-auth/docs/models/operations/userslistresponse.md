# UsersListResponse

## Example Usage

```typescript
import { UsersListResponse } from "@formance/sdk-auth/models/operations";

let value: UsersListResponse = {
    result: {
        cursor: {
            data: [
                {
                    id: "<id>",
                    subject: "<value>",
                    email: "Geraldine_Kreiger52@gmail.com",
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `result`                                                                             | [operations.UsersListResponseBody](../../models/operations/userslistresponsebody.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |