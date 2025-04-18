import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import enforcement from "./enforcement.module.css";

gsap.registerPlugin(ScrollTrigger);

const CodeEnforcement = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/#contact");
    ;
  };

  useEffect(() => {
    const divs = sectionRef.current?.querySelectorAll("div");

    if (divs && divs.length > 0) {
      gsap.fromTo(
        divs,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);
  return (
    <>
      <main className={enforcement.display}>
        <div className={enforcement.overlayWrapper}>
          <h1 className={enforcement.title}>Code Enforcement</h1>


        </div>
      </main>
      <aside className={enforcement.reason}>
        <div className={enforcement.outlinereason}>
          <h3 className={enforcement.reason_title}>Why Code Enforcement Matters</h3>
          <p className={enforcement.reason_context}>
            Code enforcement ensures properties follow local building safety, zoning, and construction laws. Homeowners and commercial
            businesses face serious consequences for non-compliance — including stop-work orders, liens, and fines up to $500 per day.
            Each project type may require different permits: structural, electrical, plumbing, or tree removal.
            Violations are often triggered by neighbor complaints or surprise inspections.
            We speak directly with code enforcement officers, pull proper permits, correct existing violations,
            and keep your property compliant so you don’t have to deal with the stress or penalties.
          </p>
          <button onClick={handleNavigate} className={enforcement.ctaHire}>Get Compliant Now</button>
        </div>
      </aside>


      <aside className={enforcement.understanding}>
        <div className={enforcement.gridRow}>
          <h3>Understanding Code Enforcement</h3>
          <p>
            Think of code enforcement as the gatekeeper. It ensures safety and legal compliance for your home or building project.
            If a project skips permits or fails an inspection, the county can stop work, fine you, or worse — delay your sale, refinance, or rental.
          </p>
        </div>


        <div className={enforcement.gridRowAlt}>
          <h3>Initial Walkthrough & Plan</h3>
          <p>
            When I visit your property, I evaluate what's been done and what’s needed — including reviewing any existing violations,
            past permits, or unpermitted work. Then I create a plan that aligns with county codes.
          </p>
        </div>


        <div className={enforcement.gridRow}>
          <h3>Handling the Permitting Process</h3>
          <p>
            You don’t have to deal with county paperwork or wait in line at the building department.
            I pull all the necessary permits — structural, electrical, plumbing, or tree — and make sure everything's filed correctly.
          </p>
        </div>


        <div className={enforcement.gridRowAlt}>
          <h3>Fixing Violations or Unpermitted Work</h3>
          <p>
            If you’ve received a violation notice or need to legalize unpermitted work, I’ll do the corrections and updates
            required by the county inspector — whether it’s documentation, construction changes, or both.
          </p>
        </div>

        <div className={enforcement.gridRow}>
          <h3>Final Inspection & Compliance Sign-Off</h3>
          <p>
            Once the work is complete, I coordinate with the code enforcement office to schedule your final inspection.
            I make sure everything passes and your project is marked as fully compliant — no stress, no surprises.
          </p>
        </div>

      </aside>

      <div className={enforcement.btnArea}>
        <a href="sms:7279927202?body=Hi, I need a consultation about code enforcement.">
          <button>Text to Consult Now</button>
        </a>
      </div>


    </>
  );
};

export default CodeEnforcement;
