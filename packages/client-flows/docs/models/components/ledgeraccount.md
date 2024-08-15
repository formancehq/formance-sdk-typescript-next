# LedgerAccount

## Example Usage

```typescript
import { LedgerAccount } from "@formance/sdk-flows/models/components";

let value: LedgerAccount = {
    address: "76446 Mohr Turnpike",
    metadata: {
        key: "<value>",
    },
    volumes: {
        key: {
            input: 714697,
            output: 990339,
        },
    },
    effectiveVolumes: {
        key: {
            input: 469497,
            output: 216897,
        },
    },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `address`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `metadata`                                                                         | Record<string, *string*>                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `volumes`                                                                          | Record<string, [components.LedgerVolume](../../models/components/ledgervolume.md)> | :heavy_check_mark:                                                                 | N/A                                                                                |
| `effectiveVolumes`                                                                 | Record<string, [components.LedgerVolume](../../models/components/ledgervolume.md)> | :heavy_check_mark:                                                                 | N/A                                                                                |