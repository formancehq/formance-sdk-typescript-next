# Output6

## Example Usage

```typescript
import { Output6 } from "@formance/sdk-flows/models/components";

let value: Output6 = {
    listWallet: {
        data: {
            cursor: {
                data: [
                    {
                        id: "1aa52c3f-5ad0-419d-a1ff-e78f097b0074",
                        metadata: {
                            key: "<value>",
                        },
                        name: "<value>",
                        createdAt: new Date("2024-12-09T15:02:57.691Z"),
                        ledger: "<value>",
                    },
                ],
            },
        },
    },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `listWallet`                                                   | [components.ListWallet](../../models/components/listwallet.md) | :heavy_check_mark:                                             | N/A                                                            |