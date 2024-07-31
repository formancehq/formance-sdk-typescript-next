<!-- Start SDK Example Usage [usage] -->
```typescript
import { ConnectivityClient } from "@formance/sdk-connectivity";

const connectivityClient = new ConnectivityClient({
    security: {
        formanceOAuth: {
            clientID: "",
            clientSecret: "",
            tokenURL: TOKEN_URL,
        },
    },
});

async function run() {
    const result = await connectivityClient.info();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->