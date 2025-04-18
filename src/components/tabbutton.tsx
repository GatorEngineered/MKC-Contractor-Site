

interface TabButtonProps {
    children: React.ReactNode;
    onSelect: () => void;
    isSelected: boolean;
}

export default function TabButton({ children, onSelect, isSelected }: TabButtonProps) {
    return (
        <li>
            <button 
                className={`${isSelected ? 'active' : ''} tab-button`}
                onClick={onSelect}
            >
                {children}
            </button>
        </li>
    );
}
