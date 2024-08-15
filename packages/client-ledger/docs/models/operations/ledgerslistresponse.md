# LedgersListResponse

## Example Usage

```typescript
import { LedgersListResponse } from "@formance/sdk-ledger/models/operations";

let value: LedgersListResponse = {
    result: {
        cursor: {
            data: [
                {
                    name: "<value>",
                    addedAt: new Date("2022-05-29T04:46:43.786Z"),
                    bucket: "<value>",
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [operations.LedgersListResponseBody](../../models/operations/ledgerslistresponsebody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |