# OutputGetAccount

## Example Usage

```typescript
import { OutputGetAccount } from "@formance/sdk-flows/models/components";

let value: OutputGetAccount = {
    data: {
        address: "17428 Tyreek Via",
        metadata: {
            key: "<value>",
        },
        volumes: {
            key: {
                input: 608253,
                output: 704415,
            },
        },
        effectiveVolumes: {
            key: {
                input: 596656,
                output: 31838,
            },
        },
    },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `data`                                                               | [components.LedgerAccount](../../models/components/ledgeraccount.md) | :heavy_check_mark:                                                   | N/A                                                                  |