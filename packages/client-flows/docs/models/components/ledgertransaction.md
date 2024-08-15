# LedgerTransaction

## Example Usage

```typescript
import { LedgerTransaction } from "@formance/sdk-flows/models/components";

let value: LedgerTransaction = {
    timestamp: new Date("2024-09-20T10:25:17.071Z"),
    postings: [
        {
            amount: 263322,
            asset: "<value>",
            destination: "<value>",
            source: "<value>",
        },
    ],
    metadata: {
        key: "<value>",
    },
    id: "<id>",
    reverted: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `postings`                                                                                    | [components.LedgerPosting](../../models/components/ledgerposting.md)[]                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reverted`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |