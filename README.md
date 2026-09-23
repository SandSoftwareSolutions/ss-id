# @sandsoftwaresolutions/id

Dependency-free, URL-safe ID helpers.

```js
import { createId, createPrefixedId } from "@sandsoftwaresolutions/id";
createId(); // "aT7..."
createPrefixedId("customer"); // "customer_aT7..."
```

Requires Node.js 18+ or a browser with Web Crypto.
