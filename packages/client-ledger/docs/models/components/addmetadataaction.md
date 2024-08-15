# AddMetadataAction

## Example Usage

```typescript
import { AddMetadataAction } from "@formance/sdk-ledger/models/components";

let value: AddMetadataAction = {
    action: "ADD_METADATA",
    data: {
        targetType: "TRANSACTION",
        targetId: 272656,
        metadata: {
            key: "<value>",
        },
    },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `action`                                                                                 | [components.AddMetadataActionAction](../../models/components/addmetadataactionaction.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `ik`                                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `data`                                                                                   | *components.AddMetadataTarget*                                                           | :heavy_check_mark:                                                                       | N/A                                                                                      |