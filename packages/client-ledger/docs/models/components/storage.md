# Storage

## Example Usage

```typescript
import { Storage } from "@formance/sdk-ledger/models/components";

let value: Storage = {
    migrations: [
        {
            version: 392785,
            name: "<value>",
            date: new Date("2024-10-11T10:53:37.826Z"),
            state: "DONE",
        },
    ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `migrations`                                                   | [components.Migration](../../models/components/migration.md)[] | :heavy_check_mark:                                             | N/A                                                            |