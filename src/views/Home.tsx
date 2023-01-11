import { useStore } from "@nanostores/preact";
import {
  counter,
  counterIncrease,
} from "../stores/counter";
import Menu from "./Menu";

function Home() {
  const $counter = useStore(counter);

  return (
    <div>
      <h1>HOME</h1>
      <button onClick={() => counterIncrease(1)}>{$counter} | Add</button>
      <button onClick={() => counterIncrease(-1)}>{$counter} | Sub</button>

      <Menu />
    </div>
  );
}

export default Home;
