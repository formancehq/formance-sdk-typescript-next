# OutputGetWallet

## Example Usage

```typescript
import { OutputGetWallet } from "@formance/sdk-flows/models/components";

let value: OutputGetWallet = {
    data: {
        id: "44269802-d502-4a94-bb4f-63c969e9a3ef",
        metadata: {
            key: "<value>",
        },
        name: "<value>",
        createdAt: new Date("2024-01-16T08:10:54.441Z"),
        ledger: "<value>",
        balances: {
            key: {
                assets: {
                    key: 447125,
                },
            },
        },
    },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `data`                                                         | [components.OutputData](../../models/components/outputdata.md) | :heavy_check_mark:                                             | N/A                                                            |