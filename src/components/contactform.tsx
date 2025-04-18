import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import contactform from '../styles/contactform.module.css';

gsap.registerPlugin(ScrollTrigger);

interface ContactFormProps {
    defaultMessage?: string;
    contactRef?: RefObject<HTMLDivElement | null>;
}

const mergeRefs = <T,>(...refs: (React.Ref<T> | null | undefined)[]) => {
    return (element: T) => {
        refs.forEach(ref => {
            if (!ref) return;
            if (typeof ref === 'function') {
                ref(element);
            } else if (ref && 'current' in ref) {
                (ref as React.MutableRefObject<T | null>).current = element;
            }
        });
    };
};

const ContactForm: React.FC<ContactFormProps> = ({ defaultMessage, contactRef }) => {
    const messageRef = useRef<HTMLTextAreaElement | null>(null);
    const formRef = useRef<HTMLDivElement | null>(null);
    const infoRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (defaultMessage) {
            messageRef.current?.focus();
        }
    }, [defaultMessage]);

    useEffect(() => {
        if (formRef.current && infoRef.current) {
            gsap.fromTo(
                formRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out",
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );

            gsap.fromTo(
                infoRef.current,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 1.2, ease: "power2.out", delay: 0.5,
                    scrollTrigger: {
                        trigger: infoRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }
    }, []);

    return (
        <main id="contact" className={contactform.outline}>
            <div ref={mergeRefs(contactRef, formRef)} className={contactform.contactForm}>
                <h2 className={contactform.contact}>Contact Us</h2>
                <form className={contactform.insideForm}>
                    <label>Name:</label>
                    <input type="text" placeholder="Your Name" required />

                    <label>Email:</label>
                    <input type="email" placeholder="Your Email" required />

                    <label>Message:</label>
                    <textarea ref={messageRef} placeholder="Your Project Necessities" required defaultValue={defaultMessage} rows={5}></textarea>

                    <button type="submit">Send</button>
                </form>
            </div>

            <div className={contactform.infoOutline} ref={infoRef}>
                <div className={contactform.contextInfo}>
                    <h2 className={contactform.infoHeading}>Start Your Project with Confidence <br /> Contact Us Now!</h2>
                    <div className={contactform.servicing}>
                        <h4>Servicing:</h4>
                        <p>Hillsborough, Hernando, Pasco & Pinellas Counties</p>
                    </div>
                    <div className={contactform.availability}>
                        <h4>Availability</h4>
                        <ol>
                            <li>Monday - Saturday : 5:00 AM - 9:30 PM</li>
                            <li>Sunday : 1:30 PM - 6:30 PM</li>
                        </ol>
                    </div>
                    <p className={contactform.phone}>
                        <a href="tel:+17279927202">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                            (727) 992-7202
                        </a>
                    </p>
                    <p className={contactform.email}>
                        <a href="mailto:Matthew@LicensedFloridaContractor.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z" />
                            </svg>
                            Matthew@LicensedFloridaContractor.com
                        </a>
                    </p>
                    <div className={contactform.connect}>
                        <h4>Connect With Us </h4><br />
                        <a href="https://www.facebook.com/MKC.Licensed.Contractor" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" className={contactform.facebooklogo} width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
                            </svg>
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" className={contactform.linkedinlogo} width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactForm;

