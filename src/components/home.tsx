import { useState, useLayoutEffect, useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { gsap } from "gsap";
import home from "../styles/home.module.css";
import TabButton from "./tabbutton";
import { tab_content } from "../data/hometab";
import SurveyForm from "./surveyform";
import portrait from "../assets/portrait.jpg";
import ImageSlider from "./slider";

interface HomeProps {
    onSurveyComplete: (message: string) => void;
}

const Home: React.FC<HomeProps> = ({ onSurveyComplete }) => {
    const [selectedTopic, setSelectedTopic] = useState<"experience" | "vision">("experience");

    // Refs to prevent GSAP from running before elements exist
    const superpowerRef = useRef(null);
    const dynamicRef = useRef(null);
    const picturesqueRef = useRef(null);
    const showcaseRef = useRef(null);
    const involveRef = useRef(null);

    useLayoutEffect(() => {
        // Create a GSAP timeline
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(superpowerRef.current, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1.2 })
            .fromTo(dynamicRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 }, "-=0.5")
            .fromTo(picturesqueRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2 }, "-=0.5")
            .fromTo(showcaseRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1 }, "-=0.5")
            .fromTo(involveRef.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1.2 }, "-=0.5");

        return () => {
            tl.kill(); // Cleanup GSAP animations when component unmounts
        };
    }, []);

    // Function to handle tab selection
    const handleSelect = (topic: "experience" | "vision") => {
        setSelectedTopic(topic);
    };

    const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const sectionId = location.hash.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      // Use GSAP if you like
      gsap.to(window, {
        scrollTo: { y: element, offsetY: 100 },
        duration: 1,
        ease: "power2.out"
      });
    }
  }
}, [location]);

    return (
        <main className={home.main}>
            <div className={home.toplayer}>
                <div ref={superpowerRef} className={home.superpower}>
                    Your<strong> Licensed Contractor  </strong>
                    <span className={home.block}></span> <strong> Hands-On</strong>
                </div>
                <div ref={dynamicRef} className={home.dynamic}>
                    <menu>
                        <TabButton
                            isSelected={selectedTopic === "experience"}
                            onSelect={() => handleSelect("experience")}
                        >
                            Experience
                        </TabButton>

                        <TabButton
                            isSelected={selectedTopic === "vision"}
                            onSelect={() => handleSelect("vision")}
                        >
                            Vision
                        </TabButton>
                    </menu>

                    {selectedTopic && (
                        <div className={home.tabcontent}>
                            <h3>{tab_content[selectedTopic].title}</h3>
                            <p>{tab_content[selectedTopic].description}</p>
                            <div className={home.btnRow}>
                                {/* ✅ Updated "CONSULT NOW" Button to Navigate to Contact Page */}
                                <Link to="/contact" className={home.btnMain}>
                                    CONSULT NOW
                                </Link>

                                <button className={home.popupIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                    </svg>
                                </button>

                                {/* ✅ Updated "Learn More" to Link to Services Page */}
                                <Link to="/services" className={home.learnMore}>
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className={home.bottomlayer}>
                <div ref={picturesqueRef} className={home.picturesque}>
                    <img className={home.contractor} src={portrait} alt="headshot" />
                    <div className={home.ctaPicturesque}>
                        Let's develop your home or <br /> commercial project plans
                    </div>

                    {/* ✅ Updated Button to Navigate to Contact Page */}
                    <Link to="/contact" className={home.popupcta}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                        </svg>
                    </Link>
                </div>

                <div ref={showcaseRef} className={home.showcase}>
                    <ImageSlider />
                </div>

                <div ref={involveRef} className={home.involve}>
                    <SurveyForm onSurveyComplete={onSurveyComplete} />
                </div>
            </div>
        </main>
    );
};

export default Home;
