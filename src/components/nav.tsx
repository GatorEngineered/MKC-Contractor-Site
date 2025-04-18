import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // ✅ Still using Link for SPA routing
import navs from "../styles/navs.module.css";

const Navigation = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };

        if (showDropdown) {
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [showDropdown]);

    return (
        <div className={navs.border}>
            <div className={navs.logo}>Florida Licensed Contractor</div>
            <nav className={navs.navigation}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/#mission">Mission</Link></li>

                    {/* Services Dropdown */}
                    <li
                        ref={dropdownRef}
                        className={navs.services}
                        onMouseEnter={() => setShowDropdown(true)}
                    >
                        <Link to="/services">Services</Link>

                        {showDropdown && (
                            <ul className={navs.dropdown}>
                                <li><Link to="/services/code-enforcement">Code Enforcement</Link></li>
                                <li><Link to="/services/permits">Permits</Link></li>
                            </ul>
                        )}
                    </li>

                    <li><Link to="/#contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;

