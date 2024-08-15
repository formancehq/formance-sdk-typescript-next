# AccountsGetResponseBody

The request has succeeded.

## Example Usage

```typescript
import { AccountsGetResponseBody } from "@formance/sdk-ledger/models/operations";

let value: AccountsGetResponseBody = {
    data: {
        address: "73633 Batz Knoll",
        metadata: {
            key: "<value>",
        },
        volumes: {
            key: {
                input: 634274,
                output: 988374,
            },
        },
        effectiveVolumes: {
            key: {
                input: 958950,
                output: 102044,
            },
        },
    },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `data`                                                   | [components.Account](../../models/components/account.md) | :heavy_check_mark:                                       | N/A                                                      |