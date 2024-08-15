# CreateTransactionWithPostings

## Example Usage

```typescript
import { CreateTransactionWithPostings } from "@formance/sdk-ledger/models/components";

let value: CreateTransactionWithPostings = {
    metadata: {
        key: "<value>",
    },
    postings: [
        {
            amount: 56713,
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
| `postings`                                                                                    | [components.Posting](../../models/components/posting.md)[]                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |