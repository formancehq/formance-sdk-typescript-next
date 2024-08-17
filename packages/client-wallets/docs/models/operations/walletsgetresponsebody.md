# WalletsGetResponseBody

The request has succeeded.

## Example Usage

```typescript
import { WalletsGetResponseBody } from "@formance/sdk-wallets/models/operations";

let value: WalletsGetResponseBody = {
    data: {
        id: "601fb576-b0d5-4f0d-b0c5-fbb258705320",
        metadata: {
            key: "<value>",
        },
        name: "<value>",
        createdAt: new Date("2022-07-07T09:37:52.810Z"),
        ledger: "<value>",
    },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `data`                                                 | [components.Wallet](../../models/components/wallet.md) | :heavy_check_mark:                                     | N/A                                                    |