# Migration

## Example Usage

```typescript
import { Migration } from "@formance/sdk-ledger/models/components";

let value: Migration = {
    version: 648172,
    name: "<value>",
    date: new Date("2022-01-23T03:49:29.173Z"),
    state: "TO DO",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `version`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [components.MigrationState](../../models/components/migrationstate.md)                        | :heavy_check_mark:                                                                            | N/A                                                                                           |