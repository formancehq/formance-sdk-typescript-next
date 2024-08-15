# CreateTransaction

## Example Usage

```typescript
import { CreateTransaction } from "@formance/sdk-flows/models/components";

let value: CreateTransaction = {
    data: {
        metadata: {
            key: "<value>",
        },
        script: {
            plain: "<value>",
        },
    },
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `ledger`           | *string*           | :heavy_minus_sign: | N/A                |
| `data`             | *components.Data*  | :heavy_check_mark: | N/A                |