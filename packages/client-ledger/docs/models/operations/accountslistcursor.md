# AccountsListCursor

## Example Usage

```typescript
import { AccountsListCursor } from "@formance/sdk-ledger/models/operations";

let value: AccountsListCursor = {
    data: [],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `next`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `data`                                                     | [components.Account](../../models/components/account.md)[] | :heavy_check_mark:                                         | N/A                                                        |