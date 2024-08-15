# DumypayConfig

## Example Usage

```typescript
import { DumypayConfig } from "@formance/sdk-connectivity/models/components";

let value: DumypayConfig = {
    name: "<value>",
    directory: "/opt/share",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `filePollingPeriod`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The frequency at which the connector will try to fetch new payment objects from the directory |
| `directory`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `prefixFileToIngest`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `numberOfAccountsPreGenerated`                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `numberOfPaymentsPreGenerated`                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |