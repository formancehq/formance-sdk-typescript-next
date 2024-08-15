# Account

## Example Usage

```typescript
import { Account } from "@formance/sdk-ledger/models/components";

let value: Account = {
    address: "718 Wolff Light",
    metadata: {
        key: "<value>",
    },
    volumes: {
        key: {
            input: 799159,
            output: 800911,
        },
    },
    effectiveVolumes: {
        key: {
            input: 461479,
            output: 520478,
        },
    },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `address`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `metadata`                                                             | Record<string, *string*>                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `volumes`                                                              | Record<string, [components.Volume](../../models/components/volume.md)> | :heavy_check_mark:                                                     | N/A                                                                    |
| `effectiveVolumes`                                                     | Record<string, [components.Volume](../../models/components/volume.md)> | :heavy_check_mark:                                                     | N/A                                                                    |