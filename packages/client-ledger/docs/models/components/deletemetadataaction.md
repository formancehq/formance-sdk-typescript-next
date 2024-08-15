# DeleteMetadataAction

## Example Usage

```typescript
import { DeleteMetadataAction } from "@formance/sdk-ledger/models/components";

let value: DeleteMetadataAction = {
    action: "DELETE_METADATA",
    data: {
        targetId: 812169,
        targetType: "TRANSACTION",
        key: "<key>",
    },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `action`                                                                                       | [components.DeleteMetadataActionAction](../../models/components/deletemetadataactionaction.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `ik`                                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `data`                                                                                         | *components.DeleteMetadataTarget*                                                              | :heavy_check_mark:                                                                             | N/A                                                                                            |