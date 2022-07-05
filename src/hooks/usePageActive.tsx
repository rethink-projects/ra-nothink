import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function usePageActive() {
  const location = useLocation();
  const [isPageActive, setPageActive] = useState(false);

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-zA-z8-9]/g, "");

    if (pathname === "categories") {
      setPageActive(true);
    } else {
      setPageActive(false);
    }
  }, [location.pathname]);

  return isPageActive;
}
