<!-- Start SDK Example Usage [usage] -->
```typescript
import { AuthClient } from "@formance/sdk-auth";

const authClient = new AuthClient({
    security: {
        bearerAuth: process.env.BEARER_AUTH,
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