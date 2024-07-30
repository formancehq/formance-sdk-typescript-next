<!-- Start SDK Example Usage [usage] -->
```typescript
import { ConnectivityClient } from "@formance/sdk-connectivity";

const connectivityClient = new ConnectivityClient({
    security: {
        formanceOAuth: {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            tokenURL: process.env.TOKEN_URL,
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