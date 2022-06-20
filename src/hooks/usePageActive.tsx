import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function usePageActive() {
  const location = useLocation();
  const [isPageActive, setIsPageActive] = useState(false);
  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-zA-Z0-9]/g, "");
    if (pathname === "dashboard") {
      setIsPageActive(true);
    } else {
      setIsPageActive(false);
    }
  }, [location.pathname]);
  return isPageActive;
}
