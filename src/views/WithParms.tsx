import Menu from "./Menu";
import { createSearchParams } from "@nanostores/router";

function WithParms() {
  const searchParams = createSearchParams();
  const { parm } = searchParams.get();

  return (
    <div>
      <h1>WITH PARMS {parm}</h1>
      <Menu />
    </div>
  );
}

export default WithParms;
