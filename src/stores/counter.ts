import { atom } from "nanostores";
import { actionCreator } from "./actionCreator";

export const counter = atom(0);
export const counterIncrease = actionCreator<number>(
  counter,
  "counter/increase",
  (a, b) => a + b
);
