# TriggersListOccurencesResponse

## Example Usage

```typescript
import { TriggersListOccurencesResponse } from "@formance/sdk-flows/models/operations";

let value: TriggersListOccurencesResponse = {
    result: {
        cursor: {
            data: [
                {
                    date: new Date("2023-10-27T16:43:50.008Z"),
                    triggerID: "<value>",
                    event: "<value>",
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [operations.TriggersListOccurencesResponseBody](../../models/operations/triggerslistoccurencesresponsebody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |