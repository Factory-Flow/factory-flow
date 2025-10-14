import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "./provider.tsx";
import "./index.css";
import MarketingPage from "./MarketingPage.tsx";
import LegalPage from "./LegalPage.tsx";
import AnalyticsTracker from "./components/AnalyticsTracker.tsx";
import { initializeAnalytics } from "./lib/analytics";

initializeAnalytics();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnalyticsTracker />
      <Provider>
        <Routes>
          <Route path="/" element={<MarketingPage />} />
          <Route path="/legal" element={<LegalPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
