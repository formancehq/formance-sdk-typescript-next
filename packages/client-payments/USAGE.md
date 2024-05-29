<!-- Start SDK Example Usage [usage] -->
```typescript
import { PaymentsClient } from "@formance/sdk-payments";

const paymentsClient = new PaymentsClient({
    security: {
        clientID: "<YOUR_CLIENT_ID_HERE>",
    },
});

async function run() {
    const result = await paymentsClient.info();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->