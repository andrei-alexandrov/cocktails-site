import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import backToTopBtn from "../../lottieAnimations/backToTop1.json";

import "./BackToTopBtn.scss";

export default function ScrollToTopBtn() {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 160) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const goUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {backToTop && (
                <Lottie
                    className="back-to-top-btn"
                    role="img"
                    aria-label="backToTop Icon"
                    animationData={backToTopBtn}
                    onClick={goUp}
                />
            )}
        </div>
    );
}
