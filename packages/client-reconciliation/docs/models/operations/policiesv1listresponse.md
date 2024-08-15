# PoliciesV1ListResponse

## Example Usage

```typescript
import { PoliciesV1ListResponse } from "@formance/sdk-reconciliation/models/operations";

let value: PoliciesV1ListResponse = {
    result: {
        cursor: {
            data: [
                {
                    id: "<id>",
                    name: "<value>",
                    createdAt: new Date("2022-11-23T02:21:00.924Z"),
                    ledgerName: "<value>",
                    ledgerQuery: {
                        key: "<value>",
                    },
                    paymentsPoolID: "<value>",
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [operations.PoliciesV1ListResponseBody](../../models/operations/policiesv1listresponsebody.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |