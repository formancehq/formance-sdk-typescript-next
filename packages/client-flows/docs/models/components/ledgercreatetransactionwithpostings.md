# LedgerCreateTransactionWithPostings

## Example Usage

```typescript
import { LedgerCreateTransactionWithPostings } from "@formance/sdk-flows/models/components";

let value: LedgerCreateTransactionWithPostings = {
    metadata: {
        key: "<value>",
    },
    postings: [
        {
            amount: 552193,
            asset: "<value>",
            destination: "<value>",
            source: "<value>",
        },
    ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `postings`                                                                                    | [components.LedgerPosting](../../models/components/ledgerposting.md)[]                        | :heavy_check_mark:                                                                            | N/A                                                                                           |