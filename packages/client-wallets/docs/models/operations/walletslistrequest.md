# WalletsListRequest

## Example Usage

```typescript
import { WalletsListRequest } from "@formance/sdk-wallets/models/operations";

let value: WalletsListRequest = {
    name: "<value>",
    metadata: {
        key: "<value>",
    },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      |
| `metadata`               | Record<string, *string*> | :heavy_check_mark:       | N/A                      |
| `cursor`                 | *string*                 | :heavy_minus_sign:       | N/A                      |
| `pageSize`               | *number*                 | :heavy_minus_sign:       | N/A                      |