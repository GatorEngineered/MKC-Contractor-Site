import { useEffect, useRef, useState } from "react";
import Card from "./card"; // Corrected import
import services from "../styles/services.module.css"; // Import the CSS file
import tree from "../assets/tree trim.jpeg";
import structual from "../assets/structual.jpg";
import interior from "../assets/interior remodeling.jpg";
import exterior from "../assets/exterior remodeling.jpg";
import dump from "../assets/dump run.jpeg";
import permit from "../assets/permit.jpg";

const cards = [
  { title: "Structural Repairs", description: "Expert structural repairs for homes and businesses.", image: structual },
  { title: "Tree Trimming & Removal", description: "Safe and efficient tree trimming and removal services.", image: tree },
  { title: "Interior Remodeling", description: "Transform your interiors with our professional remodeling services.", image: interior },
  { title: "Exterior Renovation", description: "Enhance curb appeal with top-quality exterior renovations.", image: exterior },
  { title: "Permitting Assistance", description: "Navigate county regulations with our permitting expertise.", image: permit },
  { title: "Dump Runs & Cleanup", description: "Efficient dump runs and cleanup services for your property.", image: dump }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  return (
    
    <div id="services" className={services.carouselContainer} onMouseEnter={stopAutoPlay} onMouseLeave={startAutoPlay}>
      <h2 className={services.servicesTitle}>Services</h2>
      {cards.map((card, index) => {
        const position = (index - currentIndex + cards.length) % cards.length;
        let transformStyle = "";
        let opacity = 1;
        let zIndex = 5;
        let isActive = position === 0;

        if (isActive) {
          transformStyle = "scale(1.1) translateX(0)";
          zIndex = 10;
        } else if (position === 1) {
          transformStyle = "scale(1) translateX(130px)";
          opacity = 0.8;
          zIndex = 5;
        } else if (position === cards.length - 1) {
          transformStyle = "scale(1) translateX(-130px)";
          opacity = 0.8;
          zIndex = 5;
        } else {
          transformStyle = "scale(0.9) translateX(0)";
          opacity = 0.5;
          zIndex = 1;
        }

        return (
          <Card
            key={index}
            className={services.carouselCard}
            style={{ transform: transformStyle, opacity: opacity, zIndex: zIndex }}
            onClick={position === 1 ? handleNext : position === cards.length - 1 ? handlePrev : undefined}
            role="button"
            aria-label={`View ${card.title}`}
          >

            <img src={card.image} alt={card.title} className={services.cardImage} />
            <div className={services.cardOverlay}></div> {/* Overlay added here */}
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </Card>
        );
      })}
      <div className={services.carouselControls}>
        <button onClick={handlePrev} aria-label="Previous card">◀</button>
        <button onClick={handleNext} aria-label="Next card">▶</button>
      </div>
    </div>
  );
};

export default Carousel;
