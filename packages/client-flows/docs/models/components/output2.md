# Output2

## Example Usage

```typescript
import { Output2 } from "@formance/sdk-flows/models/components";

let value: Output2 = {
    createTransaction: {
        data: [
            {
                timestamp: new Date("2022-08-08T04:42:30.977Z"),
                postings: [
                    {
                        amount: 179490,
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
    },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `createTransaction`                                                                      | [components.OutputCreateTransaction](../../models/components/outputcreatetransaction.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |