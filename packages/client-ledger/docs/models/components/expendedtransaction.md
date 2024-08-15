# ExpendedTransaction

## Example Usage

```typescript
import { ExpendedTransaction } from "@formance/sdk-ledger/models/components";

let value: ExpendedTransaction = {
    timestamp: new Date("2024-03-18T15:53:44.708Z"),
    postings: [
        {
            amount: 456150,
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
| `postings`                                                                                    | [components.Posting](../../models/components/posting.md)[]                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reverted`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `preCommitVolumes`                                                                            | Record<string, Record<string, [components.Volume](../../models/components/volume.md)>>        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `postCommitVolumes`                                                                           | Record<string, Record<string, [components.Volume](../../models/components/volume.md)>>        | :heavy_minus_sign:                                                                            | N/A                                                                                           |