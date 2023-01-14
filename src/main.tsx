import { render } from "preact";
import App from "./views/App";
import "./index.css";
import { configureGoogleAnalytics } from "./utilities/preact-google-analytics";

// Set up Google Analytics.  See tutorial at
// https://support.google.com/analytics/answer/9304153
const MEASUREMENT_ID = "GAnalyticsMeasurementID";
configureGoogleAnalytics(MEASUREMENT_ID);

render(<App />, document.getElementById("root") as HTMLElement);
