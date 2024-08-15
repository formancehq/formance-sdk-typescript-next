# AddMetadataTargetAccount

## Example Usage

```typescript
import { AddMetadataTargetAccount } from "@formance/sdk-ledger/models/components";

let value: AddMetadataTargetAccount = {
    targetType: "ACCOUNT",
    targetId: "<value>",
    metadata: {
        key: "<value>",
    },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `targetType`                                                   | [components.TargetType](../../models/components/targettype.md) | :heavy_check_mark:                                             | N/A                                                            |
| `targetId`                                                     | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `metadata`                                                     | Record<string, *string*>                                       | :heavy_check_mark:                                             | N/A                                                            |