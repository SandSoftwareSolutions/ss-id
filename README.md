# @sandsoftwaresolutions/id

[![CI](https://github.com/SandSoftwareSolutions/ss-id/actions/workflows/ci.yml/badge.svg)](https://github.com/SandSoftwareSolutions/ss-id/actions/workflows/ci.yml)

Small, dependency-free helpers for generating URL-safe IDs. Works in Node.js 18+ and browsers with Web Crypto.

## Install

```bash
npm install @sandsoftwaresolutions/id
```

## Usage

```js
import { createId, createPrefixedId } from "@sandsoftwaresolutions/id";

createId();                   // "aT7kX2pQm9Ls"
createId(24);                 // 24-character random ID
createPrefixedId("customer"); // "customer_aT7kX2pQm9Ls"
```

## API

- `createId(length = 12, alphabet?)` returns a random ID. The default alphabet contains letters and numbers.
- `createPrefixedId(prefix, length = 12, alphabet?)` adds `prefix_` to a generated ID.

`length` must be a positive integer, `prefix` cannot be empty, and a custom alphabet needs at least two characters. IDs are for application identifiers, not password generation or authorization tokens.
