# PoliciesV1CreateResponseBody

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { PoliciesV1CreateResponseBody } from "@formance/sdk-reconciliation/models/operations";

let value: PoliciesV1CreateResponseBody = {
    data: {
        id: "<id>",
        name: "<value>",
        createdAt: new Date("2023-12-09T21:35:55.692Z"),
        ledgerName: "<value>",
        ledgerQuery: {
            key: "<value>",
        },
        paymentsPoolID: "<value>",
    },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `data`                                                 | [components.Policy](../../models/components/policy.md) | :heavy_check_mark:                                     | N/A                                                    |