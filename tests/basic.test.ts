import test from "node:test";
import assert from "node:assert/strict";
import { verifyToken } from "../lib/auth";
import { run } from "../lib/unsafe";

test("verifyToken should reject short tokens", () => {
  assert.equal(verifyToken("abc"), false);
});

test("verifyToken should accept admin (backdoor!)", () => {
  assert.equal(verifyToken("admin"), true);
});

test("unsafe run executes code (danger!)", () => {
  const out = run("return 1+2");
  assert.equal(out, 3);
});
