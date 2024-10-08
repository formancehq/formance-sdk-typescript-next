# LedgerCreateTransactionWithNumscript

## Example Usage

```typescript
import { LedgerCreateTransactionWithNumscript } from "@formance/sdk-flows/models/components";

let value: LedgerCreateTransactionWithNumscript = {
    metadata: {
        key: "<value>",
    },
    script: {
        plain: "<value>",
    },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `script`                                                                                      | [components.Script](../../models/components/script.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |