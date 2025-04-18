import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import styles from "../styles/banner.module.css"; // Import CSS file

const phrases = [
  "Florida Licensed Contractor",
  "Project Management Certified",
  "Certified in Construction, AI & Robotics",
  "Personally Oversees Every Project",
  "Integrity, Clear Communication, & Accountability",
  "Passionate About Innovation",
  "Legacy-Driven Approach"
];

const RotatingWheel = () => {
  const [index, setIndex] = useState(0);
  const phraseRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    // Animate text fading in & out
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(phraseRef.current, { opacity: 1, duration: 1.5 })
      .to(phraseRef.current, { opacity: 0, duration: 1.5, delay: 5.5 });

    // Change phrase every second
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 1000);
    return () => {
      clearInterval(interval);
      tl.kill();
    };
  }, []);

  return (
    <div className={styles.rotatingWheel}>
      <span ref={phraseRef} className={styles.phrase}>
        {phrases[index]}
      </span>
    </div>
  );
};

export default RotatingWheel;


