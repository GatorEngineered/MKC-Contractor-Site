import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mission from "../styles/mission.module.css";

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const listRefs = useRef<HTMLLIElement[]>([]); // Correctly typed array of list items

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Section fade-in animation
            if (sectionRef.current) {
                gsap.fromTo(
                    sectionRef.current,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            }

            // Ensure list items are available
            if (listRefs.current.length) {
                gsap.fromTo(
                    listRefs.current,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.3,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            }
        });

        return () => ctx.revert(); // Clean up GSAP animations on component unmount
    }, []);

    return (
        <section id="mission" ref={sectionRef} className={mission.missionSection}>
            <h2 className={mission.missionTitle}>About The Owner - Matthew Kenneth Cortes</h2>
            <p className={mission.missionText}>
            I’m <strong>Matthew Kenneth Cortes</strong>, a <strong>state-licensed Florida building contractor</strong> with over 20 years of real-world experience in construction, remodeling, and project supervision. I hold a <strong>Project Management certification</strong>, along with multiple certifications in <strong>construction, artificial intelligence, and robotics-related fields</strong>.
I believe the future of construction lies in innovation. My long-term mission is to be at the forefront of that future—<strong>developing cutting-edge technologies that elevate, modernize, and eventually transform an industry that’s long overdue for a breakthrough</strong>.
At MKC Licensed Contractor, every job I take on reflects that vision. I treat each project like it’s part of something bigger—because it is. When you work with me, you're not just getting a contractor. You're getting someone who’s hands-on, licensed, and truly invested in quality. I’m on-site, supervising every phase, and committed to doing it right.
Some clients have started calling me <strong>“Accountable Ken”</strong>—and I take that seriously. It means I show up, follow through, and stand behind every job I put my name on.
But more than anything, I’m a father. And I want my daughter to grow up seeing what it means to build with integrity, push the boundaries of possibility, and leave behind a reputation worth inheriting.
This isn’t just my career. <strong>It’s my legacy</strong>.

            </p>
            <ul className={mission.missionList}>
                {[
                    "Residential Construction & Remodeling / Code Violation Corrections",
                    "Certified in Mobile Home Installation",
                    "Commercial Build-Outs & Tenant Improvements",
                    "Project Management & Permit Acquisition",
                ].map((item, index) => (
                    <li key={index} ref={(el) => { if (el) listRefs.current[index] = el; }}>
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Mission;
