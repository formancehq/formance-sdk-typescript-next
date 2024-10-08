# BalancesWithAssets

## Example Usage

```typescript
import { BalancesWithAssets } from "@formance/sdk-wallets/models/components";

let value: BalancesWithAssets = {
    name: "<value>",
    assets: {
        key: 449950,
    },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `priority`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `assets`                                                                                      | Record<string, *number*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |