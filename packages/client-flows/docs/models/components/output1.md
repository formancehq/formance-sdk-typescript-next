# Output1

## Example Usage

```typescript
import { Output1 } from "@formance/sdk-flows/models/components";

let value: Output1 = {
    getAccount: {
        data: {
            address: "156 Kitty Ramp",
            metadata: {
                key: "<value>",
            },
            volumes: {
                key: {
                    input: 237893,
                    output: 992397,
                },
            },
            effectiveVolumes: {
                key: {
                    input: 934214,
                    output: 267262,
                },
            },
        },
    },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `getAccount`                                                               | [components.OutputGetAccount](../../models/components/outputgetaccount.md) | :heavy_check_mark:                                                         | N/A                                                                        |