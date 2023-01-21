import { atom } from "nanostores";
import { actionCreator } from "./actionCreator";

export const counter = atom(0);
export const counterIncrease = actionCreator<number, number>(
  counter,
  "counter/increase",
  (a, b = 0) => a + b
);
