import { useStore } from "@nanostores/preact";
import {
  counter,
  counterIncrease
} from "../stores/counter";
import Menu from "./Menu";

function Add({ delta }: { delta: string }) {
  const $counter = useStore(counter);

  return (
    <div>
      <h1>CATEGORY</h1>
      <button onClick={() => counterIncrease(parseInt(delta, 10))}>
        {$counter} | Add
      </button>
      <button onClick={() => counterIncrease(-parseInt(delta, 10))}>
        {$counter} | Sub
      </button>
      <Menu />
    </div>
  );
}

export default Add;
