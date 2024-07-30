<!-- Start SDK Example Usage [usage] -->
```typescript
import { ReconciliationClient } from "@formance/sdk-reconciliation";

const reconciliationClient = new ReconciliationClient({
    security: {
        formanceOAuth: {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            tokenURL: process.env.TOKEN_URL,
        },
    },
});

async function run() {
    const result = await reconciliationClient.info();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->