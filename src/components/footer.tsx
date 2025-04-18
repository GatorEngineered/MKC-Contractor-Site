import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import style from "../styles/footer.module.css"; // Import the CSS file

const Footer = () => {
    const gatorRef = useRef(null);
    const chompsRef = useRef(null);

    useLayoutEffect(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });

        tl.to(chompsRef.current, {
            x: 5,
            duration: 0.1,
            repeat: 5,
            yoyo: true,
            ease: "power1.inOut",
        });

        tl.to(gatorRef.current, {
            y: -10,
            duration: 0.3,
            repeat: 1,
            yoyo: true,
            ease: "power1.inOut",
        }, "-=0.5"); // Starts a little earlier

        return () => {
            tl.kill(); // Cleanup GSAP animation when component unmounts
        };
    }, []);

    return (
        <footer className={style.footer}>
            <p>
                Made with creative{" "}
                <span ref={gatorRef} className={style.gator}>🐊</span>{" "}
                <span ref={chompsRef} className={style.chomps}>chomps</span> {" "} {" "} in mind by{" "}
                <strong>Gator Engineered Technologies</strong>.
            </p>
        </footer>
    );
};

export default Footer;
