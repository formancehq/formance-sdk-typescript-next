<!-- Start SDK Example Usage [usage] -->
```typescript
import { FlowsClient } from "@formance/sdk-flows";

const flowsClient = new FlowsClient({
    security: {
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
});

async function run() {
    const result = await flowsClient.info();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->