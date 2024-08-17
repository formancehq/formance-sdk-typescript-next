# Policy

## Example Usage

```typescript
import { Policy } from "@formance/sdk-reconciliation/models/components";

let value: Policy = {
    id: "<id>",
    name: "<value>",
    createdAt: new Date("2023-07-25T10:38:22.728Z"),
    ledgerName: "<value>",
    ledgerQuery: {
        key: "<value>",
    },
    paymentsPoolID: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ledgerName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ledgerQuery`                                                                                 | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `paymentsPoolID`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |