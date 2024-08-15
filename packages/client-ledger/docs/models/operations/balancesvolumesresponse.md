# BalancesVolumesResponse

## Example Usage

```typescript
import { BalancesVolumesResponse } from "@formance/sdk-ledger/models/operations";

let value: BalancesVolumesResponse = {
    result: {
        cursor: {
            data: [
                {
                    account: "06470042",
                    asset: "<value>",
                    input: 979587,
                    output: 120196,
                    balance: 359444,
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `result`                                                                                         | [operations.BalancesVolumesResponseBody](../../models/operations/balancesvolumesresponsebody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |