# Client

## Example Usage

```typescript
import { Client } from "@formance/sdk-auth/models/components";

let value: Client = {
    name: "<value>",
    trusted: false,
    id: "<id>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `public`                                                 | *boolean*                                                | :heavy_minus_sign:                                       | N/A                                                      |
| `redirectUris`                                           | *string*[]                                               | :heavy_minus_sign:                                       | N/A                                                      |
| `description`                                            | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `trusted`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `postLogoutRedirectUris`                                 | *string*[]                                               | :heavy_minus_sign:                                       | N/A                                                      |
| `metadata`                                               | Record<string, *string*>                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `secrets`                                                | [components.Secret](../../models/components/secret.md)[] | :heavy_minus_sign:                                       | N/A                                                      |
| `scopes`                                                 | *string*[]                                               | :heavy_minus_sign:                                       | N/A                                                      |