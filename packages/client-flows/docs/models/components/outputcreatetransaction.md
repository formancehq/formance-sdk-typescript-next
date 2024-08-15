# OutputCreateTransaction

## Example Usage

```typescript
import { OutputCreateTransaction } from "@formance/sdk-flows/models/components";

let value: OutputCreateTransaction = {
    data: [
        {
            timestamp: new Date("2022-03-01T13:18:22.985Z"),
            postings: [
                {
                    amount: 338985,
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
        },
    ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [components.LedgerTransaction](../../models/components/ledgertransaction.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |