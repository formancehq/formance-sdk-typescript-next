# HoldsListResponse

## Example Usage

```typescript
import { HoldsListResponse } from "@formance/sdk-wallets/models/operations";

let value: HoldsListResponse = {
    result: {
        cursor: {
            data: [
                {
                    id: "074f1547-1b5e-46e1-bb99-d488e1e91e45",
                    walletID: "<value>",
                    metadata: {
                        key: "<value>",
                    },
                    description: "Adaptive multi-tasking software",
                    destination: {
                        type: "ACCOUNT",
                        identifier: "<value>",
                    },
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `result`                                                                             | [operations.HoldsListResponseBody](../../models/operations/holdslistresponsebody.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |