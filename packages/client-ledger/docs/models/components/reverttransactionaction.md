# RevertTransactionAction

## Example Usage

```typescript
import { RevertTransactionAction } from "@formance/sdk-ledger/models/components";

let value: RevertTransactionAction = {
    action: "REVERT_TRANSACTION",
    data: {
        id: "<id>",
    },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `action`                                                                                             | [components.RevertTransactionActionAction](../../models/components/reverttransactionactionaction.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `ik`                                                                                                 | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `data`                                                                                               | [components.RevertTransactionActionData](../../models/components/reverttransactionactiondata.md)     | :heavy_check_mark:                                                                                   | N/A                                                                                                  |