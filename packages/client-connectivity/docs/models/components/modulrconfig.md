# ModulrConfig

## Example Usage

```typescript
import { ModulrConfig } from "@formance/sdk-connectivity/models/components";

let value: ModulrConfig = {
    name: "<value>",
    apiKey: "<value>",
    apiSecret: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `apiKey`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `apiSecret`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `endpoint`                                                                                             | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `pollingPeriod`                                                                                        | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The frequency at which the connector will try to fetch new BalanceTransaction objects from Stripe API. |