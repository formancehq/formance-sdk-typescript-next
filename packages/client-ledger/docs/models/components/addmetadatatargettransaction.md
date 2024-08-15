# AddMetadataTargetTransaction

## Example Usage

```typescript
import { AddMetadataTargetTransaction } from "@formance/sdk-ledger/models/components";

let value: AddMetadataTargetTransaction = {
    targetType: "TRANSACTION",
    targetId: 477665,
    metadata: {
        key: "<value>",
    },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `targetType`                                                                                                           | [components.AddMetadataTargetTransactionTargetType](../../models/components/addmetadatatargettransactiontargettype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `targetId`                                                                                                             | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `metadata`                                                                                                             | Record<string, *string*>                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |