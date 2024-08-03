<!-- Start SDK Example Usage [usage] -->
```typescript
import { WalletsClient } from "@formance/sdk-wallets";

const walletsClient = new WalletsClient({
    security: {
        formanceOAuth: {
            clientID: "",
            clientSecret: "",
            tokenURL: process.env.TOKEN_URL,
        },
    },
});

async function run() {
    const result = await walletsClient.info();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->