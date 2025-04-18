import { } from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    role?: string; // ✅ Add role prop
    "aria-label"?: string; // ✅ Add aria-label for accessibility
}

const Card: React.FC<CardProps> = ({ children, className, style, onClick, role, "aria-label": ariaLabel }) => {
    return (
        
        <div
            className={`custom-card ${className}`}
            style={style}
            onClick={onClick}
            role={role} // ✅ Now Card supports role
            aria-label={ariaLabel} // ✅ Now Card supports aria-label
        >
            {children}
        </div>
    );
};

export default Card;


