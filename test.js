import assert from "node:assert/strict";
import test from "node:test";
import { createId, createPrefixedId } from "./src/index.js";
test("creates IDs with the requested length", () => assert.equal(createId(24).length, 24));
test("adds a stable prefix", () => assert.match(createPrefixedId("user", 6), /^user_.{6}$/));
test("rejects invalid options", () => assert.throws(() => createId(0), TypeError));
