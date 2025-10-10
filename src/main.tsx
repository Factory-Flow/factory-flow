import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "./provider.tsx";
import "./index.css";
import MarketingPage from "./MarketingPage.tsx";
import AnalyticsTracker from "./components/AnalyticsTracker.tsx";
import { initializeAnalytics } from "./lib/analytics";

initializeAnalytics();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnalyticsTracker />
      <Provider>
        <MarketingPage />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
