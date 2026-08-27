import { useEffect } from "react";

import { useLocation } from "react-router-dom";

function ScrollToTop() {

    const { pathname, hash } = useLocation();

    useEffect(() => {

        if (hash) {

            const sectionId = hash.replace("#", "");

            const scrollToSection = () => {

                const section = document.getElementById(sectionId);

                if (section) {

                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                    return true;

                }

                return false;

            };


            // Intentamos inmediatamente.
            if (scrollToSection()) {
                return;
            }


            // Si la Home todavía se está renderizando,
            // esperamos brevemente y volvemos a buscar.
            const timeout = setTimeout(() => {

                scrollToSection();

            }, 150);


            return () => clearTimeout(timeout);

        }


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, [pathname, hash]);


    return null;

}

export default ScrollToTop;