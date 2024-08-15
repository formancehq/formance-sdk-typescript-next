# BalancesVolumesResponseBody

The request has succeeded.

## Example Usage

```typescript
import { BalancesVolumesResponseBody } from "@formance/sdk-ledger/models/operations";

let value: BalancesVolumesResponseBody = {
    cursor: {
        data: [
            {
                account: "06860998",
                asset: "<value>",
                input: 468651,
                output: 509624,
                balance: 976762,
            },
        ],
    },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `cursor`                                                                             | [operations.BalancesVolumesCursor](../../models/operations/balancesvolumescursor.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |