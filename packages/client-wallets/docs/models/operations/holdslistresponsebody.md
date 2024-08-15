# HoldsListResponseBody

The request has succeeded.

## Example Usage

```typescript
import { HoldsListResponseBody } from "@formance/sdk-wallets/models/operations";

let value: HoldsListResponseBody = {
    cursor: {
        data: [
            {
                id: "67739251-aa52-4c3f-9ad0-19da1ffe78f0",
                walletID: "<value>",
                metadata: {
                    key: "<value>",
                },
                description: "Phased heuristic policy",
                destination: {
                    type: "ACCOUNT",
                    identifier: "<value>",
                },
            },
        ],
    },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `cursor`                                               | [operations.Cursor](../../models/operations/cursor.md) | :heavy_check_mark:                                     | N/A                                                    |