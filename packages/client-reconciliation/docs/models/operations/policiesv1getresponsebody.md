# PoliciesV1GetResponseBody

The request has succeeded.

## Example Usage

```typescript
import { PoliciesV1GetResponseBody } from "@formance/sdk-reconciliation/models/operations";

let value: PoliciesV1GetResponseBody = {
    data: {
        id: "<id>",
        name: "<value>",
        createdAt: new Date("2024-09-04T09:11:49.338Z"),
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