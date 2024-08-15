# Data

## Example Usage

```typescript
import { Data } from "@formance/sdk-ledger/models/components";

let value: Data = {
    metadata: {
        key: "<value>",
    },
    postings: [
        {
            amount: 437587,
            asset: "<value>",
            destination: "<value>",
            source: "<value>",
        },
    ],
};
```

## Supported Types

### `components.CreateTransactionWithPostings`

```typescript
const value: components.CreateTransactionWithPostings = /* values here */
```

### `components.CreateTransactionWithNumscript`

```typescript
const value: components.CreateTransactionWithNumscript = /* values here */
```

