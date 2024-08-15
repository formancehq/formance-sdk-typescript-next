# BankingCircleConfig

## Example Usage

```typescript
import { BankingCircleConfig } from "@formance/sdk-connectivity/models/components";

let value: BankingCircleConfig = {
    name: "<value>",
    username: "Eli96",
    password: "ENlnSNVFxpACpjs",
    endpoint: "<value>",
    authorizationEndpoint: "<value>",
    userCertificate: "<value>",
    userCertificateKey: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `pollingPeriod`                                                                                        | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The frequency at which the connector will try to fetch new BalanceTransaction objects from Stripe API. |
| `username`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `password`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `endpoint`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `authorizationEndpoint`                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `userCertificate`                                                                                      | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `userCertificateKey`                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |