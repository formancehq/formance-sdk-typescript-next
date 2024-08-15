# LedgersInfoResponseBody

The request has succeeded.

## Example Usage

```typescript
import { LedgersInfoResponseBody } from "@formance/sdk-ledger/models/operations";

let value: LedgersInfoResponseBody = {
    data: {
        name: "<value>",
        storage: {
            migrations: [
                {
                    version: 612096,
                    name: "<value>",
                    date: new Date("2022-09-01T15:56:30.208Z"),
                    state: "DONE",
                },
            ],
        },
    },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `data`                                                         | [components.LedgerInfo](../../models/components/ledgerinfo.md) | :heavy_check_mark:                                             | N/A                                                            |