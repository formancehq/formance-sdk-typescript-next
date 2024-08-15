# Secret

## Example Usage

```typescript
import { Secret } from "@formance/sdk-auth/models/components";

let value: Secret = {
    lastDigits: "<value>",
    name: "<value>",
    id: "<id>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `lastDigits`             | *string*                 | :heavy_check_mark:       | N/A                      |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `metadata`               | Record<string, *string*> | :heavy_minus_sign:       | N/A                      |