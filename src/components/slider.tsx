import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import image1 from "../assets/beehive.jpg";
import image2 from "../assets/remodel1.jpg";
import image3 from "../assets/remodel2.jpg";
import slider from "../styles/slider.module.css";

const images = [image1, image2, image3];

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageTrackRef = useRef(null);

    // Function to move to the next image
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    // Animate the slide transition
    useEffect(() => {
        if (imageTrackRef.current) {
            gsap.to(imageTrackRef.current, {
                x: `-${currentIndex * 100}%`,
                duration: 1,
                ease: "power2.inOut",
            });
        }
    }, [currentIndex]);

    return (
        <div className={slider.sliderContainer}>
            <div className={slider.imageTrack} ref={imageTrackRef}>
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`Slide ${index + 1}`} />
                ))}
            </div>

            {/* Dots Navigation */}
            <div className={slider.dots}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`${slider.dot} ${
                            currentIndex === index ? slider.active : ""
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;


