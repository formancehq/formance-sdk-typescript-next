# LedgerInfo

## Example Usage

```typescript
import { LedgerInfo } from "@formance/sdk-ledger/models/components";

let value: LedgerInfo = {
    name: "<value>",
    storage: {
        migrations: [
            {
                version: 71036,
                name: "<value>",
                date: new Date("2023-01-05T18:52:07.088Z"),
                state: "TO DO",
            },
        ],
    },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `storage`                                                | [components.Storage](../../models/components/storage.md) | :heavy_check_mark:                                       | N/A                                                      |