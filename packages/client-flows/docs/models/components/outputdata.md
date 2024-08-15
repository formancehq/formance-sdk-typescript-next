# OutputData

## Example Usage

```typescript
import { OutputData } from "@formance/sdk-flows/models/components";

let value: OutputData = {
    id: "5471b5e6-e13b-499d-888e-1e91e450ad2a",
    metadata: {
        key: "<value>",
    },
    name: "<value>",
    createdAt: new Date("2024-02-25T02:16:14.204Z"),
    ledger: "<value>",
    balances: {
        key: {
            assets: {
                key: 841386,
            },
        },
    },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ledger`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `balances`                                                                                    | Record<string, [components.Balances](../../models/components/balances.md)>                    | :heavy_check_mark:                                                                            | N/A                                                                                           |