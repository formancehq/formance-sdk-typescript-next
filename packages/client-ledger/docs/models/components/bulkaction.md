# BulkAction

## Example Usage

```typescript
import { BulkAction } from "@formance/sdk-ledger/models/components";

let value: BulkAction = {
    action: "REVERT_TRANSACTION",
    data: {
        id: "<id>",
    },
};
```

## Supported Types

### `components.CreateTransactionAction`

```typescript
const value: components.CreateTransactionAction = /* values here */
```

### `components.AddMetadataAction`

```typescript
const value: components.AddMetadataAction = /* values here */
```

### `components.RevertTransactionAction`

```typescript
const value: components.RevertTransactionAction = /* values here */
```

### `components.DeleteMetadataAction`

```typescript
const value: components.DeleteMetadataAction = /* values here */
```

