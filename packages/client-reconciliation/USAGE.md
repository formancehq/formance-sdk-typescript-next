<!-- Start SDK Example Usage [usage] -->
```typescript
import { ReconciliationClient } from "@formance/sdk-reconciliation";

const reconciliationClient = new ReconciliationClient({
    security: {
        formanceOAuth: {
            clientID: "<YOUR_CLIENT_ID_HERE>",
            clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
            tokenURL: "<YOUR_TOKEN_URL_HERE>",
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