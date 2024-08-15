# Output5

## Example Usage

```typescript
import { Output5 } from "@formance/sdk-flows/models/components";

let value: Output5 = {
    getWallet: {
        data: {
            id: "7dfb14cd-66ae-4395-afb9-ba88f3a66997",
            metadata: {
                key: "<value>",
            },
            name: "<value>",
            createdAt: new Date("2022-01-22T00:51:28.617Z"),
            ledger: "<value>",
            balances: {
                key: {
                    assets: {
                        key: 470132,
                    },
                },
            },
        },
    },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `getWallet`                                                              | [components.OutputGetWallet](../../models/components/outputgetwallet.md) | :heavy_check_mark:                                                       | N/A                                                                      |