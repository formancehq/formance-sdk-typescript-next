# StripeConfig

## Example Usage

```typescript
import { StripeConfig } from "@formance/sdk-connectivity/models/components";

let value: StripeConfig = {
    name: "<value>",
    apiKey: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `pollingPeriod`                                                                                        | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The frequency at which the connector will try to fetch new BalanceTransaction objects from Stripe API. |
| `apiKey`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `pageSize`                                                                                             | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |