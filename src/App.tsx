import { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/nav";
import Home from "./components/home";
import Mission from "./components/mission";
import Carousel from "./components/services";
import RotatingWheel from "./components/banner";
import ContactForm from "./components/contactform";
import Footer from "./components/footer";
import CodeEnforcement from "./pages/CodeEnforcement";
import Permits from "./pages/Permits";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip, ScrollTrigger, Observer, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(useGSAP, Flip, ScrollTrigger, Observer, ScrollToPlugin);

function App() {
    const [message, setMessage] = useState("");
    const contactRef = useRef<HTMLDivElement | null>(null);

    const handleSurveyComplete = (generatedMessage: string) => {
        setMessage(generatedMessage);
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Router>
            <Navigation />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Home onSurveyComplete={handleSurveyComplete} />

                            {/* Section Anchors */}
                            <section id="mission">
                                <Mission />
                            </section>

                            <section id="services">
                                <Carousel />
                            </section>

                            <RotatingWheel />

                            <section id="contact">
                                <ContactForm contactRef={contactRef} defaultMessage={message} />
                            </section>

                            <Footer />
                        </>
                    }
                />

                {/* Service Pages */}
                <Route path="/services/code-enforcement" element={<CodeEnforcement />} />
                <Route path="/services/permits" element={<Permits />} />
            </Routes>
        </Router>
    );
}

export default App;


