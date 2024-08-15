# CashPoolsListResponse

## Example Usage

```typescript
import { CashPoolsListResponse } from "@formance/sdk-connectivity/models/operations";

let value: CashPoolsListResponse = {
    result: {
        cursor: {
            data: [
                {
                    id: "<id>",
                    name: "<value>",
                    accounts: ["<value>"],
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [operations.CashPoolsListResponseBody](../../models/operations/cashpoolslistresponsebody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |