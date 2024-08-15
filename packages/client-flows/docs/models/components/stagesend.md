# StageSend

## Example Usage

```typescript
import { StageSend } from "@formance/sdk-flows/models/components";

let value: StageSend = {
    destination: {
        account: {
            id: "<id>",
        },
    },
    source: {
        account: {
            id: "<id>",
        },
    },
    timestamp: new Date("2022-11-23T02:21:00.924Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `amount`                                                                                      | [components.Amount](../../models/components/amount.md)                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `destination`                                                                                 | *components.Destination*                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `source`                                                                                      | *components.Source*                                                                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |