<!-- Start SDK Example Usage [usage] -->
```typescript
import { AuthClient } from "@formance/sdk-auth";

const authClient = new AuthClient({
    security: {
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
});

async function run() {
    const result = await authClient.info();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->