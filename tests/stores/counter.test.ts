import { beforeEach, describe, test, expect } from "vitest";
import { counter, counterIncrease } from "../../src/stores/counter";
import { WritableAtom } from "nanostores";

describe("counterIncrease", () => {
  beforeEach(() => {
    counter.set(0);
  });

  test("check initial amount, add 10, subtract 5", () => {
    expect(counter.get()).toEqual(0);
  });

  test("add 10", () => {
    counterIncrease(10);
    expect(counter.get()).toEqual(10);
  });

  test("subtract 10", () => {
    counterIncrease(-10);
    expect(counter.get()).toEqual(-10);
  });
});
