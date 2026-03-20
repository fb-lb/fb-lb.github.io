import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        if(location.hash) {
            const el = document.getElementById(location.hash.slice(1));
            if (el) {
                const rect = el.getBoundingClientRect();
                window.scrollTo({top: (rect.top + window.scrollY - 20), behavior: "smooth"}); // go 20px above the anchor element
            }
        } else {
            window.scrollTo({top: 0, behavior: "smooth"});
        }
    }, [location]);

    return null;
}