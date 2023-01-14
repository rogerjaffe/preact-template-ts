import Home from "./Home";
import Category from "./Add";
import Users from "./Users";
import WithParms from "./WithParms";
import { useStore } from "@nanostores/preact";
import { createSearchParams } from "@nanostores/router";
import { router } from "../router";
import { usePageTracking } from "../utilities/preact-google-analytics";

function App() {
  usePageTracking();

  // See https://github.com/nanostores/router
  const page = useStore(router);
  const searchParams = createSearchParams();
  console.log(page);
  console.log(searchParams.get());

  let c = null;
  if (!page) {
    c = <div>Oops!!</div>;
  } else if (page.route === "home") {
    c = <Home />;
  } else if (page.route === "add") {
    c = <Category delta={page.params.delta} />;
  } else if (page.route === "users") {
    c = <Users userId={page.params.userId} />;
  } else if (page.route === "withParms") {
    c = <WithParms />;
  } else if (page.route === "query") {
    c = <div>QUERY</div>;
  }
  return <>{c}</>;
}

export default App;
