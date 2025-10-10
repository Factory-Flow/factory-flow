import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { GA_MEASUREMENT_ID, trackPageView } from "../lib/analytics";

const getFullPath = (pathname: string, search: string, hash: string) => `${pathname}${search}${hash}`;

export function AnalyticsTracker() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) {
      return;
    }

    const path = getFullPath(pathname, search, hash);
    trackPageView(path);
  }, [hash, pathname, search]);

  return null;
}

export default AnalyticsTracker;
