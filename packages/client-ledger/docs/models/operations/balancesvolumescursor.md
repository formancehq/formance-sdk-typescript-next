# BalancesVolumesCursor

## Example Usage

```typescript
import { BalancesVolumesCursor } from "@formance/sdk-ledger/models/operations";

let value: BalancesVolumesCursor = {
    data: [
        {
            account: "66317193",
            asset: "<value>",
            input: 662527,
            output: 820994,
            balance: 13571,
        },
    ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `next`                                                           | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `data`                                                           | [components.VolumeItem](../../models/components/volumeitem.md)[] | :heavy_check_mark:                                               | N/A                                                              |