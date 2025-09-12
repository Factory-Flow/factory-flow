import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "./provider.tsx";
import './index.css'
import MarketingPage from "./MarketingPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <MarketingPage />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
