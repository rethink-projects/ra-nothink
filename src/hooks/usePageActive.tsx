import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const usePageActive = () => {
  const location = useLocation();
  const [isPageActive, setPageActive] = useState(false);

  useEffect(() => {
    // console.log(location.pathname);
    const pathname = location.pathname.replace(/[^a-zA-z0-0]/g, "");
    pathname === "categories" ? setPageActive(true) : setPageActive(false);
  }, [location.pathname]);
  return isPageActive;
};
