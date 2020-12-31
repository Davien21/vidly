// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";

function init() {
  // Sentry.init({
  //   dsn:
  //     "https://1c7e690004854057a5f70a42906465f9@o498142.ingest.sentry.io/5575357",
  //   autoSessionTracking: true,
  //   integrations: [new Integrations.BrowserTracing()],
  //   tracesSampleRate: 1.0,
  //   environment: "development-test",
  //   release: "1-0-0",
  // });
}

function log(error) {
  console.log(error);
  // Sentry.captureException(error);
}

let logger = {
  init,
  log,
};
export default logger;
