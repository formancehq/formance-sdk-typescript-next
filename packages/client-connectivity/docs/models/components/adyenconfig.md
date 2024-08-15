# AdyenConfig

## Example Usage

```typescript
import { AdyenConfig } from "@formance/sdk-connectivity/models/components";

let value: AdyenConfig = {
    name: "<value>",
    apiKey: "<value>",
    hmacKey: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `pollingPeriod`                                                                                        | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The frequency at which the connector will try to fetch new BalanceTransaction objects from Stripe API. |
| `apiKey`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `hmacKey`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `liveEndpointPrefix`                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |