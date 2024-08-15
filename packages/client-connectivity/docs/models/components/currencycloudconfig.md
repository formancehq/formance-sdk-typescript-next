# CurrencyCloudConfig

## Example Usage

```typescript
import { CurrencyCloudConfig } from "@formance/sdk-connectivity/models/components";

let value: CurrencyCloudConfig = {
    name: "<value>",
    apiKey: "<value>",
    loginID: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `apiKey`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `loginID`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `pollingPeriod`                                                                                        | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The frequency at which the connector will try to fetch new BalanceTransaction objects from Stripe API. |
| `endpoint`                                                                                             | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The endpoint to use for the API                                                                        |