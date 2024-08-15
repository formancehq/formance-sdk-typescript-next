# Account

## Example Usage

```typescript
import { Account } from "@formance/sdk-connectivity/models/components";

let value: Account = {
    id: "<id>",
    createdAt: new Date("2023-10-12T18:11:05.242Z"),
    reference: "<value>",
    connectorID: "<value>",
    defaultCurrency: "<value>",
    defaultAsset: "<value>",
    accountName: "<value>",
    type: "EXTERNAL",
    pools: ["<value>"],
    metadata: {
        key: "<value>",
    },
    raw: "<value>",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `reference`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `connectorID`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `provider`                                                                                                              | [components.Connector](../../models/components/connector.md)                                                            | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| ~~`defaultCurrency`~~                                                                                                   | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `defaultAsset`                                                                                                          | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `accountName`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `type`                                                                                                                  | [components.AccountType](../../models/components/accounttype.md)                                                        | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `pools`                                                                                                                 | *string*[]                                                                                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `metadata`                                                                                                              | Record<string, *string*>                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `raw`                                                                                                                   | *any*                                                                                                                   | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |