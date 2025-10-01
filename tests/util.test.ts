import assert from "node:assert/strict";
import test from "node:test";
import { slowSum, unsafeParseInt } from "../lib/util";

test("slowSum basic", () => {
  assert.equal(slowSum(1, 2), 3, "1+2 should be 3"); // 実装のせいで意図が曖昧
});

test("unsafeParseInt with string", () => {
  // 型の穴によりランタイムで変な値を返す可能性
  assert.equal(unsafeParseInt("42"), 42);
  assert.equal(unsafeParseInt("abc"), 0); // 仕様不明確
});
