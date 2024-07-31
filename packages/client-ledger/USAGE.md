<!-- Start SDK Example Usage [usage] -->
```typescript
import { LedgerClient } from "@formance/sdk-ledger";

const ledgerClient = new LedgerClient({
    security: {
        bearerAuth: BEARER_AUTH,
    },
});

async function run() {
    const result = await ledgerClient.info();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->