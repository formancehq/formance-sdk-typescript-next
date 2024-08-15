# Cursor

## Example Usage

```typescript
import { Cursor } from "@formance/sdk-wallets/models/operations";

let value: Cursor = {
    data: [
        {
            id: "596eb10f-aaa2-4352-8595-5907aff1a3a2",
            walletID: "<value>",
            metadata: {
                key: "<value>",
            },
            description: "Vision-oriented multimedia leverage",
            destination: {
                type: "ACCOUNT",
                identifier: "<value>",
            },
        },
    ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `next`                                               | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `data`                                               | [components.Hold](../../models/components/hold.md)[] | :heavy_check_mark:                                   | N/A                                                  |