import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import ReactGA from "react-ga4";

import { Provider } from "./provider.tsx";
import "./index.css";
import MarketingPage from "./MarketingPage.tsx";
import LegalPage from "./LegalPage.tsx";

const gaMeasurementId = "G-MBRSNLKTMD";

if (gaMeasurementId) {
  ReactGA.initialize(gaMeasurementId);
} else if (import.meta.env.DEV) {
  // eslint-disable-next-line no-console -- surface missing configuration during development
  console.warn("Google Analytics measurement ID is not configured.");
}

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!gaMeasurementId) {
      return;
    }

    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location.pathname, location.search]);

  return null;
}

const legalSectionRoutes = {
  terms: "/terms",
  privacy: "/privacy",
  cookies: "/cookies",
} as const;

type LegalSectionRouteKey = keyof typeof legalSectionRoutes;

function LegacyLegalRedirect() {
  const location = useLocation();
  const { sectionId } = useParams<{ sectionId?: string }>();

  const hashSectionId = location.hash?.slice(1) ?? "";
  const candidateSectionId = sectionId ?? hashSectionId;

  if (candidateSectionId && candidateSectionId in legalSectionRoutes) {
    const normalizedSectionId = candidateSectionId as LegalSectionRouteKey;
    return <Navigate to={legalSectionRoutes[normalizedSectionId]} replace />;
  }

  return <Navigate to={legalSectionRoutes.terms} replace />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<MarketingPage />} />
          <Route path="/legal" element={<LegacyLegalRedirect />} />
          <Route path="/legal/:sectionId" element={<LegacyLegalRedirect />} />
          <Route path="/terms" element={<LegalPage activeSectionId="terms" />} />
          <Route path="/privacy" element={<LegalPage activeSectionId="privacy" />} />
          <Route path="/cookies" element={<LegalPage activeSectionId="cookies" />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
