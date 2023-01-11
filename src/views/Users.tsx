import Menu from "./Menu";
import { useState } from "preact/compat";
import { useEffect } from "preact/hooks";
import { useInterval } from "../hooks/useInterval";

function Users({ userId }: { userId: string }) {
  const [date, setDate] = useState(new Date());
  useInterval(() => setDate(new Date()), 1000);

  return (
    <div>
      <h1>USERS {userId}</h1>
      <h3>{date.toString()}</h3>
      <Menu />
    </div>
  );
}

export default Users;
