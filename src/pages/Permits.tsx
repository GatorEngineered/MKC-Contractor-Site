import PermitSection from "../components/permitsection";
import { useNavigate } from "react-router-dom";
import perk from "./permit.module.css"

const Permits = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/#contact");
    }
    return (
        <>
        <div className={perk.headline}>
            <h1 className={perk.permitHome}>Permits</h1>
            
        </div>
        <main className={perk.permitIntro}>
            <p className={perk.introContext}> Getting a permit doesn’t have to slow your project down. With the right expertise, it’s a seamless part of the process—not a headache.

From home remodels to commercial build-outs, <strong>permits are a legal requirement </strong>to ensure that work meets Florida’s safety standards. But navigating codes, submitting the right documents, and coordinating with the local building department can be overwhelming. That’s where experienced support makes all the difference.<br></br> <br></br>

With over two decades in construction and permitting, I handle the full process from start to finish. That means preparing the paperwork, meeting code requirements, working with engineers and designers, and communicating directly with city or county offices—so you don’t have to.

Whether you’re upgrading your home, flipping an investment property, or launching a business location, the job gets done right the first time. <strong>No handoffs. No shortcuts.</strong> Just clear guidance and direct support.<br></br><br></br>

Based in the Tampa Bay area, I’ve helped clients across Pasco, Pinellas, Hernando, and beyond. You’ll work directly with me every step of the way—no middlemen, no confusion, and no surprises.
</p>
<button className={perk.ctafile} onClick={handleNavigate}>File My Permit Now</button>

        </main>

        
  <main className={perk.page_content}>
    <h3 className={perk.dynamicTitle}>Permit Help for Residential & Commercial Projects</h3>
    <p className={perk.choose}><em>Choose one</em></p>
    <PermitSection />
  </main>
        </>
    );
};

export default Permits;
