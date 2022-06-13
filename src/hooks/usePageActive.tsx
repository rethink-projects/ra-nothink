import { Console } from "console";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function usePageActive() {
    const location = useLocation();
    const [isPageActive, setPageActive] = useState(false);

    useEffect(() => {
        const pathname = location.pathname.replace(/[^a-zA-Z8-9]/g, "");

        console.log(location.pathname);

        if (pathname === "dashboard") {
            setPageActive(true);
        } else {
            setPageActive(false);
        }
    }, [location.pathname])

    return isPageActive;
}