<!-- Start SDK Example Usage [usage] -->
```typescript
import { LedgerWallets } from "@formance/sdk-wallets";

const ledgerWallets = new LedgerWallets({
    security: {
        clientID: "<YOUR_CLIENT_ID_HERE>",
    },
});

async function run() {
    const result = await ledgerWallets.info();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->